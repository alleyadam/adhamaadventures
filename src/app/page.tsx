
import React from 'react';
import SlidingHero from '@/components/sections/SlidingHero';
import AuthorityQuotePanel from '@/components/sections/AuthorityQuotePanel';
import EditorialIntro from '@/components/sections/EditorialIntro';
import TripTypes from '@/components/sections/TripTypes';
import TourCategoryShowcase from '@/components/sections/TourCategoryShowcase';
import SafariStyleMatrix from '@/components/sections/SafariStyleMatrix';
import TailorMadeCTA from '@/components/sections/TailorMadeCTA';
import HowItWorks from '@/components/sections/HowItWorks';
import ImpactStats from '@/components/sections/ImpactStats';
import DestinationExplorer from '@/components/sections/DestinationExplorer';
import JournalFeed from '@/components/sections/JournalFeed';
import FinalCTA from '@/components/sections/FinalCTA';
import TravellerReviews from '@/components/sections/TravellerReviews';
import TravelCalendar from '@/components/sections/TravelCalendar';
import FeaturedTours from '@/components/sections/FeaturedTours';
import TopRatedToursPanel from '@/components/sections/TopRatedToursPanel';
import WhyChooseAdhama from '@/components/sections/WhyChooseAdhama';
import HomeToursFaqs from '@/components/sections/HomeToursFaqs';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO - Editorial Sliding Carousel */}
      <SlidingHero />

      {/* 2. TRUST + QUOTE ENTRY */}
      <AuthorityQuotePanel />

      {/* 3. EDITORIAL INTRODUCTION - The Adhama Approach */}
      <EditorialIntro />

      {/* 4. EASY-STYLE TOUR CATALOG */}
      <TopRatedToursPanel />

      {/* 5. CATEGORY BROWSER */}
      <TourCategoryShowcase />

      {/* 6. SAFARI STYLES */}
      <SafariStyleMatrix />

      {/* 7. TOURS PREVIEW - Featured Experiences */}
      <FeaturedTours />

      {/* 8. TRIP TYPES - Visual Dreaming */}
      <TripTypes />

      {/* 9. TRAVEL CALENDAR - Seasonal Highlights */}
      <TravelCalendar />

      {/* 10. TAILOR-MADE CTA - Design your own journey */}
      <TailorMadeCTA />

      {/* 11. WHY CHOOSE ADHAMA */}
      <WhyChooseAdhama />

      {/* 12. HOW IT WORKS - 4 Step Process */}
      <HowItWorks />

      {/* 13. DESTINATIONS - Regional Exploration */}
      <DestinationExplorer />

      {/* 14. IMPACT - Positive Footprint */}
      <ImpactStats />

      {/* 15. REVIEWS - Traveller Stories */}
      <TravellerReviews />

      {/* 16. FAQS */}
      <HomeToursFaqs />

      {/* 17. JOURNAL - Local Stories */}
      <JournalFeed />

      {/* 18. FINAL CTA - Closing Invitation */}
      <FinalCTA />
    </div>
  );
}
