
import { Suspense } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Playfair_Display } from 'next/font/google';
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

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '700', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Adhama Africa Adventures | Tanzania Safari Tours & Kilimanjaro Trips',
    template: '%s | Adhama Africa Adventures',
  },
  description:
    'Plan private Tanzania safaris, Serengeti migration tours, Kilimanjaro climbs, Zanzibar escapes, and community-first African adventures with local experts.',
  keywords: [
    'Tanzania safari',
    'Serengeti safari',
    'Kilimanjaro tours',
    'Zanzibar safari packages',
    'Ngorongoro Crater tours',
    'private Tanzania safari',
    'family safari Tanzania',
    'Great Migration safari',
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
    title: 'Adhama Africa Adventures | Tanzania Safari Tours & Kilimanjaro Trips',
    description:
      'Private Tanzania safaris, Serengeti migration journeys, Kilimanjaro climbs, Zanzibar extensions, and responsible travel planned by local experts.',
    images: SEO_IMAGES.map((url) => ({
      url,
      width: 1200,
      height: 800,
      alt: 'Tanzania safari with Adhama Africa Adventures',
    })),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adhama Africa Adventures | Tanzania Safari Tours',
    description:
      'Design a private Tanzania safari with Serengeti, Kilimanjaro, Ngorongoro, Zanzibar, and responsible local expertise.',
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
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['TravelAgency', 'LocalBusiness'],
      '@id': `${SITE_URL}/#business`,
      name: 'Adhama Africa Adventures',
      url: SITE_URL,
      image: SEO_IMAGES,
      description:
        'A Tanzania-based safari company designing private wildlife safaris, Kilimanjaro climbs, Zanzibar escapes, cultural journeys, and responsible travel experiences.',
      telephone: '+255753300602',
      email: 'info@adhamaadventures.co.tz',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'House No. 6, Njiro Ghorofa Mbili',
        addressLocality: 'Arusha',
        addressCountry: 'TZ',
      },
      priceRange: '$$',
      areaServed: ['Tanzania', 'Zanzibar', 'Serengeti', 'Kilimanjaro', 'Ngorongoro Crater'],
      sameAs: ['https://wa.me/255753300602'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Adhama Africa Adventures',
      publisher: {
        '@id': `${SITE_URL}/#business`,
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/tours?destination={search_term_string}`,
        'query-input': 'required name=search_term_string',
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
        'min-h-screen bg-background font-sans antialiased', 
        inter.variable,
        playfair.variable
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
