'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, ChevronRight, Star, Filter, Loader2, Compass } from 'lucide-react';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { FALLBACK_TOURS } from '@/lib/safari-content';

function ToursList() {
  const db = useFirestore();
  const searchParams = useSearchParams();
  
  // Read navigation filters from URL
  const filterType = searchParams.get('type');
  const filterStyle = searchParams.get('style');
  const filterDest = searchParams.get('destination');

  // Unified data source from Firestore CMS
  const toursQuery = query(collection(db, 'tours'), orderBy('createdAt', 'desc'));
  const { data: rawTours, loading } = useCollection<any>(toursQuery);

  // Client-side filtering logic
  const tours = useMemo(() => {
    const sourceTours = rawTours?.length ? rawTours : FALLBACK_TOURS;
    return sourceTours.filter(tour => {
      let match = true;
      if (filterType) {
        const cat = tour.category?.toLowerCase() || '';
        const haystack = `${cat} ${tour.title} ${tour.excerpt}`.toLowerCase();
        match = match && haystack.includes(filterType.toLowerCase());
      }
      if (filterStyle) {
        const haystack = `${tour.category} ${tour.title} ${tour.excerpt}`.toLowerCase();
        match = match && haystack.includes(filterStyle.toLowerCase());
      }
      if (filterDest) {
        const dest = tour.destination?.toLowerCase() || '';
        match = match && dest.includes(filterDest.toLowerCase());
      }
      return match;
    });
  }, [rawTours, filterType, filterStyle, filterDest]);

  return (
    <>
      {/* Filter Status Bar */}
      {(filterType || filterStyle || filterDest) && (
        <div className="bg-primary/5 border-b py-6">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Filter className="h-4 w-4 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-widest text-secondary">
                Filtering by: <span className="text-primary">{filterType || filterStyle || 'All'}</span> in <span className="text-primary">{filterDest || 'All Regions'}</span>
              </span>
            </div>
            <Button variant="link" asChild className="h-auto p-0 text-[10px] font-bold text-primary uppercase">
              <Link href="/tours">Clear Filters</Link>
            </Button>
          </div>
        </div>
      )}

      {/* Tours Grid */}
      <div className="container mx-auto px-6 py-24">
        {loading && rawTours?.length > 0 ? (
          <div className="flex flex-col items-center justify-center py-40 space-y-4">
             <Loader2 className="h-10 w-10 animate-spin text-primary" />
             <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground italic">Consulting the local guides...</p>
          </div>
        ) : tours.length === 0 ? (
          <div className="text-center py-40 space-y-8 border-2 border-dashed rounded-lg bg-white/50">
             <Compass className="h-16 w-16 mx-auto text-muted-foreground opacity-20" />
             <div className="space-y-2">
                <h3 className="text-2xl font-serif italic text-secondary">No matching journeys found.</h3>
                <p className="text-muted-foreground text-sm max-w-md mx-auto">We specialize in bespoke itineraries. Tell us what you're dreaming of and we'll design it from scratch.</p>
             </div>
             <Button asChild className="bg-primary hover:bg-secondary text-white rounded-full px-12 h-14 font-black uppercase tracking-widest text-[10px]">
                <Link href="/contact">PLAN A CUSTOM SAFARI</Link>
             </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {tours.map((tour) => (
              <Card key={tour.id} className="premium-card overflow-hidden border-none group flex flex-col h-full bg-white">
                <div className="relative h-72 w-full overflow-hidden organic-frame">
                  <Image 
                    src={tour.image || '/images/usari (15).jpeg'} 
                    alt={tour.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    data-ai-hint="tanzania safari"
                  />
                  <div className="absolute inset-0 image-vignette opacity-0 group-hover:opacity-90 transition-opacity duration-700" />
                  
                  {tour.featured && (
                    <div className="absolute top-6 left-6 bg-accent text-secondary text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em] shadow-xl">
                      Featured
                    </div>
                  )}
                  
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-white/95 backdrop-blur-sm p-5 rounded-[1.15rem] shadow-2xl w-full flex justify-between items-center border-b-4 border-accent">
                          <div>
                              <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest mb-1">Adventure From</p>
                              <p className="text-2xl font-black text-secondary leading-none">${tour.price?.toLocaleString() || '---'}</p>
                          </div>
                          <div className="text-right">
                              <span className="text-[10px] font-black text-primary uppercase tracking-widest block">{tour.duration}</span>
                              <div className="flex gap-0.5 mt-2">
                                  {[1,2,3,4,5].map(s => <Star key={s} className="h-2 w-2 fill-accent text-accent" />)}
                              </div>
                          </div>
                      </div>
                  </div>
                </div>

                <CardHeader className="flex-grow pt-10 px-8">
                  <div className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                    <MapPin className="h-3.5 w-3.5" /> {tour.destination}
                  </div>
                  <CardTitle className="text-2xl font-serif leading-tight group-hover:text-primary transition-colors duration-500 uppercase italic">
                    {tour.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 italic font-sans">
                    {tour.excerpt || `Experience the unscripted grandeur of ${tour.destination}. Our local guides bring centuries of heritage to every moment of your ${tour.category?.toLowerCase() || 'safari'} journey.`}
                  </p>
                </CardContent>

                <CardFooter className="pt-0 p-8 border-t border-muted/50 mt-auto">
                  <Button asChild className="w-full bg-secondary hover:bg-primary text-white rounded-full h-14 text-[10px] font-black uppercase tracking-[0.24em] transition-all shadow-xl shadow-secondary/10">
                    <Link href="/contact">ENQUIRE NOW</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default function ToursPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        title="Tanzania Expeditions"
        subtitle="Every journey is a chapter in your personal African story. Explore our verified itineraries across the heart of the wild."
      />
      <Suspense fallback={
        <div className="flex flex-col items-center justify-center py-40 space-y-4">
           <Loader2 className="h-10 w-10 animate-spin text-primary" />
           <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground italic">Consulting the local guides...</p>
        </div>
      }>
        <ToursList />
      </Suspense>
    </div>
  );
}
