'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader, CardContent } from '@/components/ui/card';
import { MapPin, MessageCircle, Loader2 } from 'lucide-react';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, where, limit } from 'firebase/firestore';
import { useTranslation } from '@/context/LanguageContext';
import { FALLBACK_TOURS, resolveTourImage } from '@/lib/safari-content';

export default function FeaturedTours() {
  const db = useFirestore();
  const { t } = useTranslation();
  
  // Real-time synchronization with published CMS data
  const featuredQuery = query(
    collection(db, 'tours'), 
    where('featured', '==', true), 
    limit(3)
  );
  const { data: tours, loading } = useCollection<any>(featuredQuery);
  const displayTours = (tours?.length ? tours : FALLBACK_TOURS).filter((tour) => tour.featured).slice(0, 3);

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col items-start gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div className="space-y-6">
            <span className="editorial-label">{t('tours.label')}</span>
            <h2 className="editorial-heading mb-0">{t('tours.heading')}</h2>
          </div>
          <Link href="/tours" className="text-[11px] font-bold tracking-[0.3em] uppercase text-primary border-b border-primary/20 pb-2 hover:text-accent hover:border-accent transition-colors">
            {t('tours.viewAll')}
          </Link>
        </div>

        {loading && tours?.length > 0 ? (
          <div className="flex justify-center py-40">
            <Loader2 className="h-10 w-10 animate-spin text-primary opacity-20" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {displayTours.map((tour) => (
              <Card key={tour.id} className="group flex h-full flex-col overflow-hidden rounded-none border border-border/60 bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative h-64 w-full overflow-hidden sm:h-56">
                  <Image 
                    src={resolveTourImage(tour)} 
                    alt={tour.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    data-ai-hint="tanzania safari"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                    <h3 className="font-serif text-2xl font-bold leading-tight text-white drop-shadow sm:text-2xl">{tour.title}</h3>
                    <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-secondary sm:px-3">
                      {tour.duration}
                    </span>
                  </div>
                </div>

                <CardHeader className="px-5 pb-3 pt-5 sm:px-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-4xl font-black leading-none text-secondary sm:text-3xl">
                        ${tour.price?.toLocaleString() || '---'}
                        <span className="ml-1 text-[10px] font-bold uppercase tracking-[0.08em] text-muted-foreground">per person</span>
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-grow px-5 pb-5 sm:px-6 sm:pb-6">
                  <div className="mb-4 flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <p><span className="font-bold text-secondary">You Visit:</span> {tour.destination}</p>
                  </div>
                  <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{tour.excerpt}</p>
                </CardContent>

                <CardFooter className="mt-auto grid grid-cols-[1fr_1fr_auto] items-center gap-3 border-t border-border/60 p-5 sm:p-6">
                  <Button asChild variant="outline" className="h-12 min-w-0 rounded-none border-secondary px-3 text-[10px] font-black uppercase tracking-[0.08em] text-secondary hover:bg-secondary hover:text-white sm:h-11 sm:px-4">
                    <Link href="/tours">View Itinerary</Link>
                  </Button>
                  <Button asChild className="h-12 min-w-0 rounded-none bg-secondary px-3 text-[10px] font-black uppercase tracking-[0.08em] text-white hover:bg-primary sm:h-11 sm:px-4">
                    <Link href="/contact">Enquire Now</Link>
                  </Button>
                  <Link href="https://wa.me/255753300602" aria-label="WhatsApp Adhama" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg sm:h-11 sm:w-11">
                    <MessageCircle className="h-5 w-5" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
