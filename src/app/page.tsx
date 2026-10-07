
import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
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
import MasterContentSection from '@/components/sections/MasterContentSection';
import HomeImageGallery from '@/components/sections/HomeImageGallery';
import { SITE_URL } from '@/lib/safari-content';
import { USARI_IMAGES } from '@/lib/usari-images';

export const metadata: Metadata = {
  title: 'Tanzania Safari & Community Tours | Adhama Africa Adventures',
  description:
    'Plan responsible Tanzania safaris, community-based cultural tours, Kilimanjaro climbs and Zanzibar holidays with Adhama Africa Adventures — a local Arusha tour operator since 2023.',
  keywords: [
    'Tanzania safari',
    'community based tourism Tanzania',
    'private safari Tanzania',
    'Serengeti safari',
    'Kilimanjaro climbing',
    'Zanzibar beach holiday',
    'Maasai cultural tour',
    'Hadzabe tribe visit',
    'responsible tourism Tanzania',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Tanzania Safari & Community Tours | Adhama Africa Adventures',
    description:
      'Plan responsible Tanzania safaris, community-based cultural tours, Kilimanjaro climbs and Zanzibar holidays with a local Arusha tour operator.',
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}${USARI_IMAGES.lionesses}`,
        width: 1200,
        height: 800,
        alt: 'Lionesses in the Serengeti, Tanzania safari',
      },
    ],
  },
};

const homeStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  '@id': `${SITE_URL}/#homepage`,
  name: 'Adhama Africa Adventures',
  url: SITE_URL,
  image: `${SITE_URL}${USARI_IMAGES.lionesses}`,
  description:
    'A Tanzania-based safari company designing private wildlife safaris, Kilimanjaro climbs, Zanzibar escapes, cultural journeys, and responsible travel experiences.',
  areaServed: ['Tanzania', 'Zanzibar', 'Serengeti', 'Ngorongoro Crater', 'Kilimanjaro'],
  telephone: '+255753300602',
  email: 'info@adhamaadventures.co.tz',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Script
        id="homepage-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }}
      />
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

      {/* CLIENT MASTER CONTENT - Homepage */}
      <MasterContentSection page="homepage" />

      {/* 12. HOW IT WORKS - 4 Step Process */}
      <HowItWorks />

      {/* 13. DESTINATIONS - Regional Exploration */}
      <DestinationExplorer />

      {/* 14. IMPACT - Positive Footprint */}
      <ImpactStats />

      {/* 14.5 IMAGE GALLERY - Authentic safari photography */}
      <HomeImageGallery />

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
