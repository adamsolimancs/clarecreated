'use client';
import Image from "next/image";
import Link from "next/link";
// file path changed
import SplitText from '@/app/ui/SplitText.js';

// Home page component
export default function Home() {
  const handleAnimationComplete = () => {
    console.log('Title animated!');
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-10 p-1">
      <SplitText
        text="welcome to clarecreated!"
        className={"text-5xl font-bold text-center"}
        delay={10}
        duration={2}
        ease="elastic.out(1, 0.3)"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
      <p className="text-lg text-center max-w-xl">
        hi, i’m clare! i share fun & yummy recipes, baking/cooking hacks, and fun lifestyle content. follow me on social media for more food content</p>
      <div className="flex gap-22 mt-6">
        <Link
          href="https://www.instagram.com/clarecreated/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
        >
          <div className="w-[120px] h-[120px] flex items-center justify-center">
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={120}
              height={120}
              className="rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200 object-contain"
              priority
            />
          </div>
          <span className="mt-2 text-lg font-medium">instagram</span>
        </Link>
        <Link
          href="https://www.tiktok.com/@claredodo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
        >
          <div className="w-[120px] h-[120px] flex items-center justify-center">
            <Image
              src="/tiktok.webp"
              alt="TikTok"
              width={80}
              height={80}
              className="rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200 object-contain"
              priority
            />
          </div>
          <span className="mt-2 text-lg font-medium">tiktok</span>
        </Link>
      </div>
    </main>
  );
}
