'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Camera, Info, ChevronRight, MapPin } from 'lucide-react';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, where, limit } from 'firebase/firestore';
import { FALLBACK_DESTINATIONS } from '@/lib/safari-content';

// Static fallback data for when Firestore is empty or loading
const FALLBACK_DATA: Record<string, any> = {
  'serengeti': {
    name: 'SERENGETI',
    title: 'The Endless Plains',
    hero: '/images/adhama-old/wildebeest-river-crossing.webp',
    overview: 'The Serengeti is perhaps the most famous wildlife sanctuary in the world. Its name comes from the Maasai word "Siringet", meaning "endless plains". This UNESCO World Heritage site hosts the largest terrestrial mammal migration on Earth.',
    highlights: [
      'Witness the Great Migration river crossings.',
      'Spot the Big Five in their natural habitat.',
      'Soar over the plains in a hot air balloon.',
      'Authentic Maasai cultural encounters.'
    ],
    bestTime: 'Year-round, Migration crossings July to October.',
    weather: 'Warm days (25-30°C) and cool nights.',
    hint: 'serengeti migration'
  }
};

const DESTINATION_PHOTOS: Record<string, string> = {
  'arusha-np': '/images/Mount Meru.jpeg',
  'lake-natron': '/images/Flamengo2.jpeg',
  'lake-eyasi': '/images/Maasai.jpeg',
  mkomazi: '/images/Elephant 2.jpeg',
  nyerere: '/images/Hippopotamus.jpeg',
  ruaha: '/images/adhama-old/tanzania-camping-safari-1.webp',
  mikumi: '/images/adhama-old/giraffe-wild-scaled.jpg',
  udzungwa: '/images/lake duluti.jpeg',
  kitulo: '/images/usari (31).jpeg',
  gombe: '/images/lake duluti.jpeg',
  mahale: '/images/lake duluti.jpeg',
  katavi: '/images/Crocodile.jpeg',
  rubondo: '/images/Yellow Billed Stork.jpeg',
  pemba: '/images/adhama-old/swahili-coast.webp',
  'mafia-island': '/images/adhama-old/swahili-coast.webp',
  saadani: '/images/adhama-old/swahili-coast.webp',
  kilwa: '/images/adhama-old/swahili-coast.webp',
  'pangani-bagamoyo': '/images/adhama-old/swahili-coast.webp',
  'dar-es-salaam': '/images/adhama-old/swahili-coast.webp',
  'arusha-city': '/images/adhama-old/maasai-attire.webp',
  moshi: '/images/adhama-old/kilimanjaro-umbwe.webp',
  dodoma: '/images/Olduvai Gorge Sand.jpeg',
  mwanza: '/images/lake duluti.jpeg',
};

function destinationNameFromSlug(value: string) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function buildFallbackDestination(slug: string) {
  const listed = FALLBACK_DESTINATIONS.find((destination) => destination.slug === slug);
  if (listed) {
    return {
      ...listed,
      name: listed.name.toUpperCase(),
      overview: listed.description,
      hero: listed.image,
    };
  }

  const name = destinationNameFromSlug(slug);
  return {
    name: name.toUpperCase(),
    title: `Explore ${name}`,
    hero: DESTINATION_PHOTOS[slug] || '/images/adhama-old/giraffe-wild-scaled.jpg',
    image: DESTINATION_PHOTOS[slug] || '/images/adhama-old/giraffe-wild-scaled.jpg',
    overview:
      `${name} is part of Tanzania's wider story: wild landscapes, local knowledge, and routes that reward travellers who want to go beyond the obvious.`,
    description:
      `${name} is part of Tanzania's wider story: wild landscapes, local knowledge, and routes that reward travellers who want to go beyond the obvious.`,
    highlights: [
      'Local guiding shaped around the season and your travel pace.',
      'Safari, culture, coast, or conservation experiences matched to the region.',
      'Thoughtful routing with time for real connection, not rushed checklists.',
      'Adhama planning support from first idea to final transfer.',
    ],
    bestTime: 'Ask our team for the strongest seasonal window based on wildlife, weather, and your route.',
    weather: 'Conditions vary by region, so we help you pack around the exact itinerary and travel month.',
  };
}

export default function DestinationDetailClient({ slug }: { slug: string }) {
  const router = useRouter();
  const db = useFirestore();
  
  const destQuery = query(collection(db, 'destinations'), where('slug', '==', slug), limit(1));
  const { data: results, loading } = useCollection<any>(destQuery);
  
  const firestoreData = results && results.length > 0 ? results[0] : null;
  const data = firestoreData || FALLBACK_DATA[slug] || buildFallbackDestination(slug);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image 
          src={data.image || data.hero || '/images/adhama-old/giraffe-wild-scaled.jpg'} 
          alt={data.name} 
          fill 
          className="object-cover transition-transform duration-1000 animate-slow-zoom" 
          priority
          data-ai-hint={data.hint || 'tanzania landscape'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        
        <div className="relative h-full container mx-auto px-6 flex flex-col justify-center pt-20">
          <div className="max-w-4xl space-y-6">
            <button 
              onClick={() => router.back()}
              className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-accent uppercase mb-8 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> BACK TO DESTINATIONS
            </button>
            <div className="space-y-2">
              <span className="editorial-label text-accent mb-2">{data.name} • TANZANIA</span>
              <h1 className="text-5xl md:text-8xl font-serif italic text-white leading-tight tracking-tighter">
                {data.title || data.name}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7 space-y-16">
            <div className="space-y-8">
              <h2 className="editorial-label">OVERVIEW</h2>
              <p className="text-2xl font-serif italic text-secondary leading-relaxed">
                {data.description || data.overview}
              </p>
            </div>

            {data.highlights && (
              <div className="space-y-8">
                <h2 className="editorial-label">WHY VISIT</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {data.highlights.map((item: string, i: number) => (
                    <div key={i} className="flex gap-4 p-6 bg-white/75 border border-secondary/5 rounded-[1.25rem] shadow-sm">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Camera className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-sm font-bold text-secondary leading-relaxed uppercase tracking-tight">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 space-y-12">
            <div className="bg-secondary text-white p-12 space-y-10 shadow-2xl relative overflow-hidden organic-frame-alt">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <Calendar className="h-5 w-5" />
                  <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-accent">BEST TIME</h3>
                </div>
                <p className="text-lg font-serif italic leading-relaxed text-white/90">
                  {data.bestTime || 'Year-round adventures.'}
                </p>
              </div>

              <div className="space-y-6 border-t border-white/10 pt-10">
                <div className="flex items-center gap-3 text-primary">
                  <Info className="h-5 w-5" />
                  <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-accent">EXPERT ADVICE</h3>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  {data.weather || 'Consult with our guides for seasonal clothing tips.'}
                </p>
              </div>

              <div className="pt-8">
                <Button asChild className="w-full bg-primary hover:bg-white hover:text-secondary h-16 rounded-full font-black uppercase tracking-[0.2em] text-[10px] transition-all">
                  <Link href="/contact">ENQUIRE FOR {data.name}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-6 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="editorial-label mx-auto">LOCATION</h2>
            <h3 className="text-4xl font-serif italic text-secondary">Discover the heart of the region.</h3>
          </div>
          <div className="aspect-video w-full max-w-5xl mx-auto bg-white shadow-2xl relative flex items-center justify-center border-8 border-white overflow-hidden group organic-frame">
            <Image 
              src={data.gallery?.[0] || data.image || data.hero || '/images/adhama-old/giraffe-wild-scaled.jpg'} 
              alt={`${data.name} landscape`} 
              fill 
              className="object-cover grayscale opacity-35 group-hover:opacity-70 transition-opacity duration-1000"
            />
            <div className="relative z-10 text-center space-y-4">
              <MapPin className="h-12 w-12 text-primary mx-auto animate-bounce" />
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Discover {data.name} with Adhama.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
