const INSTAGRAM_USERNAME = "clarecreated";
const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/clarecreated/?hl=en";
const INSTAGRAM_WEB_PROFILE_INFO_ENDPOINT =
  "https://i.instagram.com/api/v1/users/web_profile_info/?username=clarecreated";
const REVALIDATE_SECONDS = 60 * 30;
const MIN_RECIPE_POSTS = 9;
const MAX_RECIPE_POSTS = 18;
const LOG_PREFIX = "[instagram-recipes]";
const DEBUG_LOGGING_ENABLED = process.env.INSTAGRAM_RECIPES_DEBUG === "1";

const POSITIVE_KEYWORDS = [
  "recipe",
  "bake",
  "baking",
  "cook",
  "cooking",
  "meal",
  "easy",
  "breakfast",
  "lunch",
  "dinner",
  "dessert",
  "snack",
  "oat",
  "bagel",
  "pasta",
  "salad",
  "soup",
  "cookie",
  "brownie",
  "cake",
  "bread",
  "smoothie",
  "sorbet",
  "matcha",
  "chicken",
  "beef",
  "shrimp",
  "tofu",
  "ingredient",
  "homemade",
];

const NEGATIVE_KEYWORDS = [
  "giveaway",
  "partner",
  "sponsored",
  "ad",
  "#ad",
  "collab",
];

export type RecipeCard = {
  id: string;
  title: string;
  caption: string;
  url: string;
  imageUrl: string;
  isVideo: boolean;
  publishedAt: Date;
  likeCount: number | null;
  commentCount: number | null;
  tags: string[];
};

type InstagramEdge = {
  node?: {
    id?: string;
    shortcode?: string;
    __typename?: string;
    is_video?: boolean;
    display_url?: string;
    thumbnail_src?: string;
    taken_at_timestamp?: number;
    edge_liked_by?: { count?: number };
    edge_media_to_comment?: { count?: number };
    edge_media_to_caption?: {
      edges?: Array<{ node?: { text?: string } }>;
    };
  };
};

type InstagramWebProfileInfoResponse = {
  data?: {
    user?: {
      edge_owner_to_timeline_media?: {
        edges?: InstagramEdge[];
      };
    };
  };
};

const normalizeWhitespace = (value: string) =>
  value.replace(/\s+/g, " ").trim();

const toTags = (caption: string) => {
  const lower = caption.toLowerCase();
  const tags = new Set<string>();

  if (lower.includes("breakfast")) tags.add("breakfast");
  if (lower.includes("lunch")) tags.add("lunch");
  if (lower.includes("dinner")) tags.add("dinner");
  if (lower.includes("dessert") || lower.includes("cookie") || lower.includes("cake")) tags.add("dessert");
  if (lower.includes("easy") || lower.includes("quick")) tags.add("quick");
  if (lower.includes("high protein") || lower.includes("protein")) tags.add("high-protein");

  return Array.from(tags).slice(0, 3);
};

const isLikelyRecipePost = (caption: string) => {
  if (!caption) return false;

  const lower = caption.toLowerCase();
  if (NEGATIVE_KEYWORDS.some((keyword) => lower.includes(keyword))) return false;

  return POSITIVE_KEYWORDS.some((keyword) => lower.includes(keyword));
};

const cleanCaption = (caption: string) =>
  normalizeWhitespace(
    caption
      .replace(/#[\w-]+/g, "")
      .replace(/https?:\/\/\S+/g, "")
  );

const deriveTitle = (caption: string) => {
  const firstLine = caption.split("\n").map((line) => line.trim()).find(Boolean) ?? "";
  const titleCandidate = firstLine
    .replace(/https?:\/\/\S+/g, "")
    .replace(/#[\w-]+/g, "")
    .replace(/[^\p{L}\p{N}\s,'!?&+-]/gu, "")
    .trim();

  const finalTitle = titleCandidate.length > 72 ? `${titleCandidate.slice(0, 69)}...` : titleCandidate;
  return finalTitle || "Recipe idea from Instagram";
};

const createPostUrl = (shortcode: string, isVideo: boolean) =>
  `https://www.instagram.com/${isVideo ? "reel" : "p"}/${shortcode}/`;

const readCaption = (edge: InstagramEdge) =>
  edge.node?.edge_media_to_caption?.edges?.[0]?.node?.text ?? "";

export async function getInstagramRecipeCards(): Promise<{
  cards: RecipeCard[];
  sourceUrl: string;
  syncedAt: Date | null;
  username: string;
}> {
  const startedAt = Date.now();
  console.info(`${LOG_PREFIX} Fetching posts for @${INSTAGRAM_USERNAME}`);

  const response = await fetch(INSTAGRAM_WEB_PROFILE_INFO_ENDPOINT, {
    headers: {
      "x-ig-app-id": "936619743392459",
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
      accept: "application/json",
      "accept-language": "en-US,en;q=0.9",
      origin: "https://www.instagram.com",
      referer: "https://www.instagram.com/clarecreated/",
      "sec-fetch-site": "same-site",
      "sec-fetch-mode": "cors",
      "sec-fetch-dest": "empty",
    },
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (DEBUG_LOGGING_ENABLED) {
    console.info(
      `${LOG_PREFIX} Response status=${response.status} content-type=${response.headers.get("content-type") ?? "unknown"}`
    );
  }

  if (!response.ok) {
    const errorBodyPreview = normalizeWhitespace((await response.text()).slice(0, 400));
    console.error(
      `${LOG_PREFIX} Instagram fetch failed status=${response.status} bodyPreview="${errorBodyPreview}"`
    );
    throw new Error(`Instagram fetch failed (${response.status})`);
  }

  let payload: InstagramWebProfileInfoResponse;
  try {
    payload = (await response.json()) as InstagramWebProfileInfoResponse;
  } catch (error) {
    console.error(`${LOG_PREFIX} Failed to parse Instagram JSON response`, error);
    throw error;
  }

  const edges = payload.data?.user?.edge_owner_to_timeline_media?.edges ?? [];
  if (DEBUG_LOGGING_ENABLED) {
    console.info(`${LOG_PREFIX} Raw edges found=${edges.length}`);
  }

  let skippedForMissingFields = 0;

  const mapped = edges
    .map((edge) => {
      const node = edge.node;
      if (!node?.id || !node.shortcode || (!node.display_url && !node.thumbnail_src)) {
        skippedForMissingFields += 1;
        return null;
      }

      const rawCaption = readCaption(edge);
      const caption = cleanCaption(rawCaption);
      const isVideo = Boolean(node.is_video || node.__typename === "GraphVideo");
      const timestamp = node.taken_at_timestamp ?? 0;

      return {
        id: node.id,
        isLikelyRecipe: isLikelyRecipePost(rawCaption),
        publishedAtEpoch: timestamp,
        card: {
          id: node.id,
          title: deriveTitle(rawCaption),
          caption,
          url: createPostUrl(node.shortcode, isVideo),
          imageUrl: node.display_url ?? node.thumbnail_src ?? "",
          isVideo,
          publishedAt: new Date(timestamp * 1000),
          likeCount:
            typeof node.edge_liked_by?.count === "number" && node.edge_liked_by.count >= 0
              ? node.edge_liked_by.count
              : null,
          commentCount:
            typeof node.edge_media_to_comment?.count === "number" && node.edge_media_to_comment.count >= 0
              ? node.edge_media_to_comment.count
              : null,
          tags: toTags(rawCaption),
        },
      };
    })
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  const recipeCards = mapped
    .filter((entry) => entry.isLikelyRecipe)
    .sort((a, b) => b.publishedAtEpoch - a.publishedAtEpoch)
    .map((entry) => entry.card);

  const fallbackRecentCards = mapped
    .sort((a, b) => b.publishedAtEpoch - a.publishedAtEpoch)
    .map((entry) => entry.card);

  const cards =
    recipeCards.length >= MIN_RECIPE_POSTS
      ? recipeCards.slice(0, MAX_RECIPE_POSTS)
      : fallbackRecentCards.slice(0, MAX_RECIPE_POSTS);

  if (DEBUG_LOGGING_ENABLED) {
    console.info(
      `${LOG_PREFIX} mapped=${mapped.length} skippedMissing=${skippedForMissingFields} recipeMatches=${recipeCards.length} fallbackCandidates=${fallbackRecentCards.length} finalCards=${cards.length}`
    );
  }

  if (cards.length === 0) {
    const sampleCaptions = edges
      .slice(0, 5)
      .map((edge) => readCaption(edge))
      .map((caption) => normalizeWhitespace(caption).slice(0, 120))
      .filter(Boolean);

    console.warn(
      `${LOG_PREFIX} No cards produced. rawEdges=${edges.length} mapped=${mapped.length} recipeMatches=${recipeCards.length} sampleCaptions=${JSON.stringify(sampleCaptions)}`
    );
  }

  const elapsedMs = Date.now() - startedAt;
  console.info(
    `${LOG_PREFIX} Completed fetch in ${elapsedMs}ms using ${cards.length > 0 ? "instagram-data" : "empty-result"}`
  );

  return {
    cards,
    sourceUrl: INSTAGRAM_PROFILE_URL,
    syncedAt: cards.length ? new Date() : null,
    username: INSTAGRAM_USERNAME,
  };
}

export const instagramRecipesFallback = {
  cards: [] as RecipeCard[],
  sourceUrl: INSTAGRAM_PROFILE_URL,
  syncedAt: null as Date | null,
  username: INSTAGRAM_USERNAME,
};
