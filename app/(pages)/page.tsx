'use client';
import MediaBanner from '@/app/ui/MediaBanner';
import PromotionsSection from '@/app/ui/PromotionsSection';
import Hero from '@/app/ui/Hero';
import { ArrowDown } from 'lucide-react';
import { smoothScrollToId } from '@/app/lib/scroll';

export default function HomePage() {
  
  /**
   * Function to scroll to the promos section
   */
  const scrollToPromos = () => {
    smoothScrollToId('promos', { offset: 12 });
  };

  return (
    <div>
      <Hero />
      <MediaBanner />
      <div className="text-center pt-10 lg:pt-16">
        <button
          onClick={scrollToPromos}
          className="animate-float hover:text-primary transition-colors hover:cursor-pointer"
          aria-label="Scroll to promos"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
      <PromotionsSection />
    </div>
  );
}
