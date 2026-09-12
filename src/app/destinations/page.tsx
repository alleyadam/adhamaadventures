'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { MapPin, Compass, Waves, Building2, Loader2, Landmark } from 'lucide-react';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query } from 'firebase/firestore';
import { FALLBACK_DESTINATIONS } from '@/lib/safari-content';

const CIRCUIT_ICONS: Record<string, any> = {
  'Northern Circuit': Compass,
  'Southern Circuit': MapPin,
  'Coastal & Islands': Waves,
  'Major Hubs': Building2,
  'Western Circuit': Compass,
};

export default function DestinationsPage() {
  const db = useFirestore();
  const destQuery = query(collection(db, 'destinations'));
  const { data: destinations, loading } = useCollection<any>(destQuery);
  const displayDestinations = destinations?.length ? destinations : FALLBACK_DESTINATIONS;

  const circuits = ['Northern Circuit', 'Southern Circuit', 'Western Circuit', 'Coastal & Islands', 'Major Hubs'];

  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title="Iconic Destinations"
        subtitle="Explore Tanzania’s legendary safari circuits, pristine islands, and vibrant cities with local experts who call this land home."
      />

      <div className="container mx-auto px-6 py-24">
        {loading && destinations?.length > 0 ? (
          <div className="flex flex-col items-center justify-center py-40 space-y-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">Mapping your adventure...</p>
          </div>
        ) : (
          <div className="space-y-32">
            {circuits.map((circuitName) => {
              const circuitDests = displayDestinations.filter(d => d.circuit === circuitName);
              if (!circuitDests || circuitDests.length === 0) return null;
              
              const Icon = CIRCUIT_ICONS[circuitName] || Compass;

              return (
                <section key={circuitName} className="space-y-12">
                  <div className="flex items-center gap-6 border-b border-primary/20 pb-8">
                    <div className="p-4 bg-primary text-white rounded-full">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-5xl font-serif italic text-secondary leading-none">{circuitName}</h2>
                      <p className="editorial-label mt-4 mb-0">Discover the heart of the region</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {circuitDests.map((dest) => (
                      <Link 
                        key={dest.id} 
                        href={`/destinations/${dest.slug}`}
                        className="group space-y-6 block"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-foreground organic-frame shadow-2xl">
                          <Image 
                            src={dest.image || '/images/adhama-old/giraffe-wild-scaled.jpg'} 
                            alt={dest.name} 
                            fill 
                            className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                            data-ai-hint="tanzania travel"
                          />
                          <div className="absolute inset-0 image-vignette opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
                          <div className="absolute top-4 left-4">
                            <span className="bg-white/95 backdrop-blur-sm px-3 py-1 text-[8px] font-black tracking-widest text-primary uppercase shadow-xl rounded-full">
                              {dest.category || 'WILDLIFE'}
                            </span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="text-xl font-serif italic text-secondary group-hover:text-primary transition-colors leading-tight">
                            {dest.name}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 italic">
                            {dest.description}
                          </p>
                          <div className="pt-2">
                            <span className="text-[10px] font-black tracking-widest text-primary uppercase border-b border-primary/20 pb-1 group-hover:border-accent group-hover:text-accent transition-all">
                              EXPLORE {dest.name} →
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {/* Deep Knowledge Section */}
        <div className="mt-40 p-12 md:p-20 bg-secondary text-white organic-frame relative overflow-hidden border-t-8 border-accent shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-serif italic leading-tight">Beyond common paths.</h2>
              <p className="text-lg text-white/70 font-serif italic leading-relaxed">
                "Tanzania is a continent within a country. While the Serengeti calls many, the wild chimpanzees of Mahale or the ruins of Kilwa offer stories few have heard."
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-white hover:text-secondary text-secondary rounded-full h-16 px-12 font-black uppercase tracking-[0.2em] text-[11px] transition-all">
                <Link href="/contact">CUSTOMIZE YOUR CIRCUIT</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Western Circuit', icon: Compass },
                { label: 'Cultural Sites', icon: Landmark },
                { label: 'Great Lakes', icon: Waves },
                { label: 'Marine Parks', icon: MapPin }
              ].map((item) => (
                <div key={item.label} className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 text-center rounded-[1.25rem] group hover:bg-white/10 transition-colors">
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-black tracking-widest uppercase text-primary block">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
