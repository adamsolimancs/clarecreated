import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "clarecreated",
  description: "Delicious recipes, cooking tips, and lifestyle fun from @clarecreated. Follow on Instagram and TikTok for daily food inspo!",
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
    title: "clarecreated",
    description: "Delicious recipes, cooking tips, and lifestyle fun from @clarecreated. Follow on Instagram and TikTok for daily food inspo!",
    url: "https://clarecreated.com/",
    siteName: "clarecreated",
    images: [
      {
        url: "/logo.png",
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
    title: "clarecreated",
    description: "Delicious recipes, cooking tips, and lifestyle fun from @clarecreated. Follow on Instagram and TikTok for daily food inspo!",
    images: [
      "/logo.png"
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-foreground`}>
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
