import type { MetadataRoute } from 'next';
import { FALLBACK_DESTINATIONS, FALLBACK_TOURS, SEO_IMAGES, SITE_URL } from '@/lib/safari-content';

const staticRoutes = [
  '',
  '/tours',
  '/destinations',
  '/contact',
  '/about',
  '/about/our-story',
  '/about/our-focus',
  '/about/local-partnerships',
  '/sustainability',
  '/inspiration',
  '/inspiration/eco-tourism',
  '/inspiration/core-activities',
  '/inspiration/homestays',
  '/inspiration/live-in-tanzania',
  '/inspiration/students-tour',
  '/faqs',
  '/blog',
  '/gallery',
  '/company-licensing',
  '/team-guides',
  '/vehicles',
  '/safety',
  '/how-we-operate',
  '/payment-policy',
  '/terms',
  '/privacy-policy',
  '/cookie-policy',
  '/cancellation-policy',
  '/travel-trade',
  '/support',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const destinationRoutes = FALLBACK_DESTINATIONS.map((destination) => `/destinations/${destination.slug}`);
  const tourImages = FALLBACK_TOURS.map((tour) => `${SITE_URL}${tour.image}`);

  return [...staticRoutes, ...destinationRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/tours' || route === '/destinations' ? 0.9 : 0.7,
    images: route === '' ? [...SEO_IMAGES, ...tourImages] : undefined,
  }));
}
