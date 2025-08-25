'use client';
import MediaBanner from '@/app/ui/MediaBanner';
import PromotionsSection from '@/app/ui/PromotionsSection';
import Hero from '@/app/ui/Hero';
import { ArrowDown } from 'lucide-react';

export default function HomePage() {
  
  /**
   * Function to scroll to the promos section
   */
  const scrollToPromos = () => {
    const element = document.getElementById('promos');
    if (element) {
      // Smoothly scroll to the element
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Hero />
      <MediaBanner />
      <div className="text-center pt-6 pb-10">
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
