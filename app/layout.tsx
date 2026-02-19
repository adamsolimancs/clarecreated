import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://clarecreated.com";
const siteTitle = "clarecreated";
const siteDescription =
  "Delicious recipes, cooking tips, and lifestyle fun from @clarecreated. Follow on Instagram and TikTok for daily food inspo!";
const ogImage = "/logo.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | clarecreated",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "ClareCreated",
    "clarecreated",
    "claredodo",
    "cooking",
    "recipes",
    "food",
    "social media",
    "TikTok recipes",
    "Instagram food",
    "cooking tips",
    "food creator",
    "home cooking"
  ],
  authors: [{ name: "clarecreated" }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    images: [
      {
        url: ogImage,
        width: 220,
        height: 220,
        alt: "ClareCreated Logo"
      },
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [
      ogImage
    ]
  }
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteTitle,
      description: siteDescription,
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "ClareCreated",
      url: siteUrl,
      logo: `${siteUrl}${ogImage}`,
      sameAs: [
        "https://www.instagram.com/clarecreated/?hl=en",
        "https://www.tiktok.com/@claredodo",
        "https://www.youtube.com/@clarecreated"
      ]
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/about#person`,
      name: "Clare",
      alternateName: "clarecreated",
      url: `${siteUrl}/about`,
      image: `${siteUrl}/clare.jpeg`,
      sameAs: [
        "https://www.instagram.com/clarecreated/?hl=en",
        "https://www.tiktok.com/@claredodo",
        "https://www.youtube.com/@clarecreated"
      ],
      worksFor: {
        "@id": `${siteUrl}/#organization`,
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-foreground`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
        <div className="relative min-h-screen overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 select-none"
            aria-hidden="true"
          >
            <div className="absolute -top-48 left-[-10%] h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-emerald-200/60 via-[#d7ffe7] to-transparent blur-3xl opacity-70" />
            <div className="absolute top-10 right-[-15%] h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-pink-200/60 via-[#f9e1ff] to-transparent blur-3xl opacity-80" />
            <div className="absolute bottom-[-20%] left-1/2 h-[30rem] w-[45rem] -translate-x-1/2 rounded-[40%] bg-gradient-to-r from-[#caf8e3] via-[#fde2f9] to-[#fef9d7] blur-[120px] opacity-70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.4),transparent_55%)]" />
          </div>
          <div className="relative z-10 flex min-h-screen flex-col">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
