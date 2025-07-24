'use client';
import Image from "next/image";
import Link from "next/link";
import SplitText from '@/app/ui/SplitText.js';

// Home page component
export default function Home() {
  const handleAnimationComplete = () => {
    console.log('Title animated!');
  };

  return (
    <main className="flex flex-col items-center justify-start min-h-screen gap-5 pt-14">
      <SplitText
        text="welcome to clarecreated!"
        className="text-3xl sm:text-6xl font-bold text-center pb-20 drop-shadow-lg"
        delay={10}
        duration={2}
        ease="elastic.out(1, 0.3)"
        splitType="chars"
        from={{ opacity: 0, y: 30 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
      <p className="text-lg sm:text-xl text-center max-w-xs sm:max-w-xl drop-shadow-lg">
        hi, i’m clare! i share fun & yummy recipes, baking/cooking hacks, and lifestyle content. follow me on social media for more!
      </p>
      <div className="flex flex-row sm:flex-row gap-14 sm:gap-22 mt-6 w-full items-center justify-center">
        <Link
          href="https://www.instagram.com/clarecreated/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
        >
          <div className="w-16 h-16 sm:w-[120px] sm:h-[120px] flex items-center justify-center">
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={94}
              height={94}
              className="rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200 object-contain"
              priority
            />
          </div>
          <span className="mt-2 text-lg sm:text-xl font-medium">instagram</span>
        </Link>
        <Link
          href="https://www.tiktok.com/@claredodo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
        >
          <div className="w-16 h-16 sm:w-[120px] sm:h-[120px] flex items-center justify-center">
            <Image
              src="/tiktok.webp"
              alt="TikTok"
              width={84}
              height={84}
              className="rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200 object-contain"
              priority
            />
          </div>
          <span className="mt-2 text-lg sm:text-xl font-medium">tiktok</span>
        </Link>
      </div>
      <div className="mt-10 w-full flex justify-center">
        <div className="flex flex-col items-center bg-white/70 dark:bg-black/40 rounded-xl p-6 gap-4 shadow-lg max-w-xs sm:max-w-md w-full">
          <h3 className="text-lg sm:text-xl font-semibold mb-1 text-center">my promotions</h3>
          <Link
            href="https://www.amazon.com/shop/clarecreated?ref_=cm_sw_r_apin_aipsfshop_aipsfclarecreated_FS00Z55XDWZD69JDJX76&language=en_US"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-100 hover:bg-pink-200 text-pink-900 font-medium py-2 px-4 rounded-lg transition-colors text-center shadow max-w-xs w-full mx-auto"
          >
            kitchen & apartment essentials
          </Link>
          <Link
            href="https://nugonutrition.com/Clare"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-100 hover:bg-yellow-200 text-yellow-900 font-medium py-2 px-4 rounded-lg transition-colors text-center shadow max-w-xs w-full mx-auto"
          >
            nugo discount code
          </Link>
        </div>
      </div>
    </main>
  );
}
