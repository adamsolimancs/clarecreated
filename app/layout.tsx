import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Silk from '@/app/ui/Silk.js'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClareCreated",
  description: "Discover delicious recipes, cooking tips, and behind-the-scenes fun from ClareCreated. Follow Clare on Instagram and TikTok for daily food inspiration!",
  keywords: [
    "ClareCreated",
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
  authors: [{ name: "ClareCreated" }],
  openGraph: {
    title: "ClareCreated | Cooking Inspiration & Social Media Recipes",
    description: "Discover delicious recipes, cooking tips, and behind-the-scenes fun from ClareCreated. Follow Clare on Instagram and TikTok for daily food inspiration!",
    url: "https://clarecreated.com/",
    siteName: "ClareCreated",
    images: [
      {
        url: "/instagram.png",
        width: 120,
        height: 120,
        alt: "ClareCreated Instagram Logo"
      },
      {
        url: "/tiktok.webp",
        width: 120,
        height: 120,
        alt: "ClareCreated TikTok Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ClareCreated | Cooking Inspiration & Social Media Recipes",
    description: "Discover delicious recipes, cooking tips, and behind-the-scenes fun from ClareCreated. Follow Clare on Instagram and TikTok for daily food inspiration!",
    images: [
      "/instagram.png"
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div style={{ position: "fixed", inset: 0, zIndex: -1 }}>
          <Silk
            speed={3.5}
            scale={0.75}
            color="#6d0e8dff"
            noiseIntensity={0.5}
            rotation={1.71}
          />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
