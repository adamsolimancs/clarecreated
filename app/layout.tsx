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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div style={{ position: "relative", zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
