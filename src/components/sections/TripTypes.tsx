'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';

const TYPES = [
  { title: "Wildlife Safaris", desc: "Experience Tanzania's extraordinary wildlife.", img: "/images/adhama-old/lion-african.webp", href: "/tours?type=wildlife" },
  { title: "Private Safaris", desc: "Your vehicle. Your guide. Your pace.", img: "/images/adhama-old/giraffe-wild-scaled.jpg", href: "/tours?type=private" },
  { title: "Luxury Safaris", desc: "Exceptional camps and lodges.", img: "/images/adhama-old/luxury-safari.webp", href: "/tours?type=luxury" },
  { title: "Family Safaris", desc: "Designed for travellers of all ages.", img: "/images/Girrafe.jpeg", href: "/tours?type=family" },
  { title: "Honeymoon", desc: "Romance and wilderness.", img: "/images/Lions.jpeg", href: "/tours?type=honeymoon" },
  { title: "Culture & Community", desc: "Experience Tanzania beyond the parks.", img: "/images/adhama-old/maasai-attire.webp", href: "/tours?type=culture" },
  { title: "Great Migration", desc: "Follow nature's greatest spectacle.", img: "/images/adhama-old/wildebeest-river-crossing.webp", href: "/tours?type=migration" },
  { title: "Kilimanjaro", desc: "Climb Africa's highest mountain.", img: "/images/adhama-old/kilimanjaro-umbwe.webp", href: "/destinations/kilimanjaro" },
];

export default function TripTypes() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <span className="editorial-label mx-auto">{t('tripTypes.label')}</span>
          <h2 className="editorial-heading">{t('tripTypes.heading')}<span className="italic">{t('tripTypes.headingAccent')}</span></h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TYPES.map((type, i) => (
            <Link key={i} href={type.href} className={`group relative block aspect-[4/5] overflow-hidden bg-foreground shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${i % 2 === 0 ? 'organic-frame' : 'organic-frame-alt'}`}>
              <Image 
                src={type.img} 
                alt={type.title} 
                fill 
                className="object-cover transition-transform opacity-90 group-hover:opacity-60 group-hover:scale-110" 
                style={{ transitionDuration: '1500ms' }}
                data-ai-hint="tanzania travel"
              />
              <div className="absolute inset-0 image-vignette opacity-85 group-hover:opacity-95 transition-opacity duration-700" />
              <div className="absolute inset-x-8 bottom-8 text-white space-y-3">
                <h3 className="text-2xl font-serif font-medium leading-tight">{type.title}</h3>
                <p className="text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  {type.desc}
                </p>
                <div className="pt-2 opacity-0 group-hover:opacity-100 transition-all duration-700">
                   <div className="h-[2px] w-8 bg-accent mb-4" />
                  <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase">{t('tripTypes.explore')}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-20 text-center">
           <Link href="/tours" className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary border-b border-primary/20 pb-2 hover:text-secondary hover:border-secondary transition-colors">
            {t('tripTypes.viewAll')}
           </Link>
        </div>
      </div>
    </section>
  );
}
