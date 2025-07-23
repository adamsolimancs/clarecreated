import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Silk from '@/app/ui/Silk.js';

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
  description: "Discover delicious recipes, cooking tips, and lifestyle fun from ClareCreated. Follow Clare on Instagram and TikTok for daily food inspo!",
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
  authors: [{ name: "ClareCreated" }],
  openGraph: {
    title: "clarecreated",
    description: "Delicious recipes, cooking tips, and lifestyle content from ClareCreated. Follow Clare on Instagram and TikTok for daily food inspo!",
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
    description: "Delicious recipes, cooking tips, and lifestyle content from ClareCreated. Follow Clare on Instagram and TikTok for daily food inspo!",
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
            color="#f86ce1ff"
            noiseIntensity={0}
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
