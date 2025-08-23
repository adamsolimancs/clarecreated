'use client';
import Link from "next/link";
import MediaBanner from '@/app/ui/MediaBanner';
import PromotionsSection from '@/app/ui/PromotionsSection';
import Hero from '@/app/ui/Hero';

// Home page component
export default function Home() {
  return (
    <div>
      <Hero />
      <MediaBanner />
      <PromotionsSection />

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
          <h4 className="text-sm sm:text-base font-medium mt-4 mb-1 text-center">business inquiries: itsclarecreated@gmail.com</h4>
        </div>
      </div>
      
    </div>
  );
}
