'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { FALLBACK_DESTINATIONS } from '@/lib/safari-content';

const HOME_DESTINATION_SLUGS = [
  'serengeti',
  'ngorongoro-crater',
  'kilimanjaro',
  'tarangire',
  'zanzibar',
  'lake-eyasi',
];

const homeDestinations = HOME_DESTINATION_SLUGS.map((slug) =>
  FALLBACK_DESTINATIONS.find((destination) => destination.slug === slug)
).filter(Boolean) as typeof FALLBACK_DESTINATIONS;

export default function DestinationExplorer() {
  return (
    <section className="section-padding relative overflow-hidden bg-secondary text-background">
      <div className="absolute inset-0 bg-secondary/10" />
      <div className="container mx-auto px-6 relative">
        <div className="mb-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="space-y-6">
            <span className="editorial-label text-accent">THE LAND OF WONDERS</span>
            <h2 className="editorial-heading text-white mb-0">
              Where will Tanzania<br />
              <span className="italic text-accent">take you?</span>
            </h2>
          </div>
          <div className="grid gap-5 text-background/72 md:grid-cols-2">
            <p className="text-lg font-serif italic leading-relaxed">
              Explore the client&apos;s strongest Tanzania regions: migration plains, crater country, Kilimanjaro foothills, elephant parks, Zanzibar coast, and living cultures.
            </p>
            <p className="text-sm font-medium leading-relaxed">
              Each card now uses Adhama route knowledge, stronger photography, best-season context, and clear destination pages for safari planning.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homeDestinations.map((dest) => (
            <Link 
              key={dest.id} 
              href={`/destinations/${dest.slug}`}
              className="group relative min-h-[430px] overflow-hidden bg-muted/10 shadow-2xl transition-all duration-700 hover:-translate-y-1 organic-frame"
            >
              <Image 
                src={dest.image || '/images/adhama-old/giraffe-wild-scaled.jpg'} 
                alt={dest.name} 
                fill 
                className="object-cover transition-all duration-1000 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                data-ai-hint="tanzania destination"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors duration-700 group-hover:bg-black/38" />
              <div className="absolute inset-7 flex flex-col justify-end">
                <div className="rounded-[1.35rem] border border-white/16 bg-black/42 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur-sm transition-all duration-700 group-hover:bg-black/62">
                  <div className="mb-4 flex w-fit items-center gap-2 rounded-full bg-white/16 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-white ring-1 ring-white/20">
                    <MapPin className="h-3 w-3 text-accent" />
                    {dest.circuit}
                  </div>
                  <h3 className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-accent drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">{dest.name}</h3>
                  <p className="text-2xl font-serif leading-tight text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.95)] transition-all duration-700 group-hover:translate-x-1 group-hover:text-3xl">
                    {dest.title}
                  </p>
                  <p className="mt-0 max-h-0 overflow-hidden text-sm font-bold leading-relaxed text-white opacity-0 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] transition-all duration-700 group-hover:mt-4 group-hover:max-h-24 group-hover:opacity-100">
                    {dest.description}
                  </p>
                  <div className="mt-0 flex max-h-0 items-center justify-between overflow-hidden border-t border-white/20 pt-0 opacity-0 transition-all duration-700 group-hover:mt-6 group-hover:max-h-14 group-hover:pt-4 group-hover:opacity-100">
                    <span className="text-[9px] font-black uppercase tracking-[0.26em] text-white">Explore region</span>
                    <span className="text-lg text-accent">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
           <Link href="/destinations" className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent border-b border-white/20 pb-2 hover:text-white hover:border-white transition-colors">
            VIEW ALL DESTINATIONS →
           </Link>
        </div>
      </div>
    </section>
  );
}
