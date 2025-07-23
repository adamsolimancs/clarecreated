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
    <main className="flex flex-col items-center justify-start min-h-screen gap-5 pt-12">
      <SplitText
        text="welcome to clarecreated!"
        className="text-3xl sm:text-5xl font-bold text-center pb-20 mt-10 drop-shadow-lg"
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
      <p className="text-base sm:text-lg text-center max-w-xs sm:max-w-xl drop-shadow-lg">
        hi, i’m clare! i share fun & yummy recipes, baking/cooking hacks, and fun lifestyle content. follow me on social media for more food content
      </p>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-22 mt-6 w-full items-center justify-center">
        <Link
          href="https://www.instagram.com/clarecreated/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
        >
          <div className="w-24 h-24 sm:w-[120px] sm:h-[120px] flex items-center justify-center">
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={120}
              height={120}
              className="rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200 object-contain"
              priority
            />
          </div>
          <span className="mt-2 text-base sm:text-lg font-medium">instagram</span>
        </Link>
        <Link
          href="https://www.tiktok.com/@claredodo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
        >
          <div className="w-20 h-20 sm:w-[100px] sm:h-[100px] flex items-center justify-center">
            <Image
              src="/tiktok.webp"
              alt="TikTok"
              width={120}
              height={120}
              className="rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200 object-contain"
              priority
            />
          </div>
          <span className="mt-2 text-base sm:text-lg font-medium">tiktok</span>
        </Link>
      </div>
    </main>
  );
}
