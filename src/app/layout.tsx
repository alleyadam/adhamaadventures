
import { Suspense } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import BackToTop from '@/components/layout/BackToTop';
import AIAssistant from '@/components/layout/AIAssistant';
import { FirebaseClientProvider } from '@/firebase';
import VisitorTracker from '@/components/analytics/VisitorTracker';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import { LanguageProvider } from '@/context/LanguageContext';
import LanguageHydrator from '@/components/layout/LanguageHydrator';
import { SEO_IMAGES, SITE_URL } from '@/lib/safari-content';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Adhama Africa Adventures | Tanzania Safari, Culture & Kilimanjaro',
    template: '%s | Adhama Africa Adventures',
  },
  description:
    'Plan responsible Tanzania safaris, community-based cultural tours, Kilimanjaro climbs and Zanzibar beach holidays with Adhama Africa Adventures — a local Arusha tour operator since 2023.',
  keywords: [
    'Tanzania safari',
    'Tanzania community based tourism',
    'responsible tourism Tanzania',
    'private safari Tanzania',
    'Serengeti safari packages',
    'Ngorongoro Crater tours',
    'Kilimanjaro climbing',
    'Zanzibar beach holiday',
    'cultural tours Tanzania',
    'Maasai cultural experience',
    'Hadzabe tribe tour',
    'Great Migration safari',
    'family safari Tanzania',
    'luxury safari Tanzania',
    'budget safari Tanzania',
    'Adhama Africa Adventures',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Adhama Africa Adventures',
    title: 'Adhama Africa Adventures | Tanzania Safari, Culture & Kilimanjaro',
    description:
      'Book responsible safaris, cultural journeys, Kilimanjaro climbs and Zanzibar escapes with a local Arusha tour operator.',
    images: SEO_IMAGES.map((url) => ({
      url,
      width: 1200,
      height: 800,
      alt: 'Tanzania safari with Adhama Africa Adventures',
    })),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adhama Africa Adventures | Tanzania Safari, Culture & Kilimanjaro',
    description:
      'Book responsible safaris, cultural journeys, Kilimanjaro climbs and Zanzibar escapes with a local Arusha tour operator.',
    images: SEO_IMAGES,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'travel',
  verification: {
    google: 'google-site-verification-placeholder',
  },
  other: {
    'theme-color': '#185233',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['TravelAgency', 'LocalBusiness'],
      '@id': `${SITE_URL}/#business`,
      name: 'Adhama Africa Adventures',
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.ico`,
      image: SEO_IMAGES,
      description:
        'A Tanzania-based safari company designing private wildlife safaris, Kilimanjaro climbs, Zanzibar escapes, cultural journeys, and responsible travel experiences.',
      telephone: '+255753300602',
      email: 'info@adhamaadventures.co.tz',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'House No. 6, Njiro Ghorofa Mbili',
        addressLocality: 'Arusha',
        addressRegion: 'Arusha',
        postalCode: '23101',
        addressCountry: 'TZ',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -3.3869,
        longitude: 36.683,
      },
      priceRange: '$$$',
      currenciesAccepted: 'USD, TZS',
      paymentAccepted: 'Cash, Credit Card, Bank Transfer',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '09:00',
          closes: '14:00',
        },
      ],
      areaServed: [
        { '@type': 'Country', name: 'Tanzania' },
        { '@type': 'Place', name: 'Zanzibar' },
        { '@type': 'Place', name: 'Serengeti National Park' },
        { '@type': 'Place', name: 'Ngorongoro Crater' },
        { '@type': 'Place', name: 'Mount Kilimanjaro' },
        { '@type': 'Place', name: 'Tarangire National Park' },
      ],
      sameAs: [
        'https://wa.me/255753300602',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Adhama Africa Adventures',
      publisher: {
        '@id': `${SITE_URL}/#business`,
      },
      inLanguage: 'en',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/tours?destination={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: 'Adhama Africa Adventures | Tanzania Safari, Culture & Kilimanjaro',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#business` },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: SEO_IMAGES[0],
        width: 1200,
        height: 800,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased'
      )} suppressHydrationWarning>
        <Script
          id="adhama-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <LanguageProvider>
          <LanguageHydrator />
          <FirebaseClientProvider>
              <VisitorTracker />
              <div className="relative flex min-h-screen flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
                <WhatsAppButton />
                <BackToTop />
                <AIAssistant />
              </div>
              <Toaster />
          </FirebaseClientProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
