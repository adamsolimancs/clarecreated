import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Heart, MessageCircle, PlayCircle } from "lucide-react";
import {
    getInstagramRecipeCards,
    instagramRecipesFallback,
    type RecipeCard,
} from "@/app/lib/instagram-recipes";

export const metadata: Metadata = {
    title: "Recipes",
    description:
        "Browse ClareCreated recipes, including quick meals, baking favorites, and easy ideas for everyday cooking.",
    alternates: {
        canonical: "/recipes",
    },
    openGraph: {
        title: "Recipes | clarecreated",
        description:
            "Discover recipes and kitchen inspiration from ClareCreated.",
        url: "/recipes",
        type: "website",
        images: [
            {
                url: "/logo.png",
                width: 220,
                height: 220,
                alt: "ClareCreated logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Recipes | clarecreated",
        description:
            "Discover recipes and kitchen inspiration from ClareCreated.",
        images: ["/logo.png"],
    },
};

export const revalidate = 1800;

const formatDate = (date: Date) =>
    new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(date);

const formatCompactNumber = (value: number) =>
    new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(value);

const toCaptionPreview = (caption: string) =>
    caption.length > 180 ? `${caption.slice(0, 177).trimEnd()}...` : caption;

const renderTag = (tag: string) => (
    <span
        key={tag}
        className="rounded-full bg-white/80 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-foreground/70"
    >
        {tag}
    </span>
);

const RecipeCardView = ({ card }: { card: RecipeCard }) => (
    <article
        className={`group overflow-hidden rounded-3xl border border-white/60 bg-white/75 shadow-[0_25px_70px_rgba(24,39,35,0.14)] transition-transform duration-200 hover:-translate-y-1 ${
            card.isVideo ? "mx-auto w-full max-w-[19rem] sm:max-w-none" : ""
        }`}
    >
        <Link href={card.url} target="_blank" rel="noopener noreferrer" className="block">
            <div className="relative aspect-[4/5] overflow-hidden bg-white/40">
                <Image
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                {card.isVideo && (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/65 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-white">
                        <PlayCircle className="h-3.5 w-3.5" />
                        reel
                    </span>
                )}
            </div>
        </Link>

        <div className="space-y-4 p-4 sm:p-5">
            <div className="space-y-2">
                <h2 className="text-lg font-semibold leading-tight text-foreground">
                    <Link href={card.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        {card.title}
                    </Link>
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    {card.caption
                        ? toCaptionPreview(card.caption)
                        : "Open this post on Instagram for the full recipe details."}
                </p>
            </div>

            <div className="flex flex-wrap gap-2">
                {card.tags.map(renderTag)}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {formatDate(card.publishedAt)}
                </span>
                {card.likeCount !== null && (
                    <span className="inline-flex items-center gap-1.5">
                        <Heart className="h-3.5 w-3.5" />
                        {formatCompactNumber(card.likeCount)}
                    </span>
                )}
                {card.commentCount !== null && (
                    <span className="inline-flex items-center gap-1.5">
                        <MessageCircle className="h-3.5 w-3.5" />
                        {formatCompactNumber(card.commentCount)}
                    </span>
                )}
            </div>
        </div>
    </article>
);

export default async function RecipesPage() {
    let source = instagramRecipesFallback;
    let sourceWarning: string | null = null;

    try {
        source = await getInstagramRecipeCards();
    } catch {
        sourceWarning = "Instagram data is temporarily unavailable. Opening the profile still gives you the latest recipes.";
    }

    return (
        <main className="px-4 pb-20 pt-12 sm:px-6 lg:px-8">
            <section className="mx-auto flex w-full max-w-6xl flex-col gap-8">
                <header className="rounded-[32px] border border-white/60 bg-white/70 p-6 text-center shadow-[0_30px_80px_rgba(18,36,31,0.12)] sm:p-10">
                    <p className="text-s uppercase tracking-[0.35em] text-muted-foreground">recipes</p>
                    <h1 className="mt-2 text-balance text-xl font-bold text-foreground sm:text-5xl">
                        cook from Clare&apos;s latest posts
                    </h1>

                    {sourceWarning && (
                        <p className="mx-auto mt-6 max-w-2xl rounded-2xl border border-amber-200/80 bg-amber-50/90 px-4 py-3 text-sm text-amber-800">
                            {sourceWarning}
                        </p>
                    )}
                </header>

                {source.cards.length > 0 ? (
                    <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
                        {source.cards.map((card) => (
                            <RecipeCardView key={card.id} card={card} />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-3xl border border-white/60 bg-white/70 p-8 text-center text-muted-foreground shadow-[0_20px_60px_rgba(15,33,28,0.1)]">
                        <p className="text-lg font-semibold text-foreground">Recipes are loading soon.</p>
                        <p className="mt-2 text-sm">
                            In the meantime, open Clare&apos;s Instagram profile for the newest recipe drops.
                        </p>
                    </div>
                )}
            </section>
        </main>
    );
}
