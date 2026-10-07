import DestinationDetailClient from '@/components/sections/DestinationDetailClient';

/**
 * @fileOverview Server Component for Destination Detail pages.
 * Handles static path generation for production builds.
 */

export async function generateStaticParams() {
  const slugs = [
    'serengeti', 'ngorongoro', 'tarangire', 'lake-manyara', 'kilimanjaro', 
    'arusha-np', 'lake-natron', 'lake-eyasi', 'mkomazi', 'nyerere', 
    'ruaha', 'mikumi', 'udzungwa', 'kitulo', 'gombe', 'mahale', 
    'katavi', 'rubondo', 'zanzibar', 'pemba', 'mafia-island', 
    'saadani', 'kilwa', 'pangani-bagamoyo', 'dar-es-salaam', 
    'arusha-city', 'moshi', 'dodoma', 'mwanza', 'morogoro',
    'bwejuu', 'dongwe', 'fumba', 'jambiani', 'kendwa', 'kizimkazi',
    'matemwe', 'nungwi', 'paje', 'uroa', 'ndutu', 'lake-victoria',
    'mount-meru', 'bagamoyo', 'marangu', 'stone-town',
    'tanzania-in-january', 'tanzania-in-february', 'tanzania-in-june',
    'tanzania-in-july', 'tanzania-in-august', 'tanzania-in-september',
    'tanzania-in-october', 'tanzania-in-december'
  ];
  return slugs.map((slug) => ({ slug }));
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <DestinationDetailClient slug={slug} />;
}
