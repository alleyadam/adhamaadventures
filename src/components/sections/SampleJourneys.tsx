
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const JOURNEYS = [
  {
    duration: '7 DAYS',
    title: 'Northern Tanzania Safari',
    accent: 'Serengeti, Ngorongoro & Tarangire',
    desc: 'A carefully balanced journey through the iconic landscapes of the northern circuit, blending world-class wildlife with intimate community connections.',
    price: '$3,800',
    img: '/images/adhama-old/serengeti-10-day.webp',
    href: '/safaris/northern-tanzania'
  },
  {
    duration: '9 DAYS',
    title: 'Great Migration Experience',
    accent: 'The Wildebeest River Crossing',
    desc: 'Follow nature’s greatest spectacle in the heart of the northern Serengeti. Witness the drama of the Mara River crossing from verified viewpoints.',
    price: '$5,200',
    img: '/images/adhama-old/wildebeest-river-crossing.webp',
    href: '/safaris/great-migration'
  },
  {
    duration: '10 DAYS',
    title: 'Wildlife & Culture',
    accent: 'Deep Immersion Journey',
    desc: 'A transformative journey that splits time between the big five and the ancient cultures of the Rift Valley. Meet the real stewards of the Serengeti.',
    price: '$4,100',
    img: '/images/adhama-old/maasai-attire.webp',
    href: '/safaris/wildlife-culture'
  }
];

export default function SampleJourneys() {
  return (
    <section className="section-padding bg-[#F8F4ED]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24 space-y-6">
          <span className="editorial-label">CURATED SAMPLES</span>
          <h2 className="editorial-heading">Some journeys we're excited about.</h2>
        </div>

        <div className="space-y-32">
          {JOURNEYS.map((j, i) => (
            <div key={i} className="grid lg:grid-cols-2 gap-16 items-center group">
              <div className={cn(
                "relative aspect-[3/2] overflow-hidden bg-foreground shadow-2xl",
                i % 2 === 0 ? "organic-frame" : "organic-frame-alt",
                i % 2 === 1 ? "lg:order-2" : "lg:order-1"
              )}>
                <Image 
                  src={j.img} 
                  alt={j.title} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105" 
                  style={{ transitionDuration: '2000ms' }}
                  data-ai-hint="tanzania safari"
                />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 text-[10px] font-bold tracking-widest text-primary uppercase">
                   Best Time: Jan — Dec
                </div>
              </div>
              
              <div className={cn(
                "space-y-8",
                i % 2 === 1 ? "lg:order-1 text-right lg:items-end" : "lg:order-2"
              )}>
                <div className="space-y-4">
                  <div className={cn(
                    "flex items-center gap-4 text-[10px] font-black tracking-widest text-primary uppercase",
                    i % 2 === 1 ? "justify-end" : "justify-start"
                  )}>
                    <span>{j.duration}</span>
                    <div className="w-8 h-[1px] bg-secondary" />
                    <span>NORTHERN TANZANIA</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif leading-[1.1] tracking-tighter text-secondary">
                    {j.title}<br />
                    <span className="italic text-accent">& {j.accent.split('&')[1] || j.accent}</span>
                  </h3>
                  <p className={cn(
                    "text-lg text-muted-foreground leading-relaxed max-w-md",
                    i % 2 === 1 ? "ml-auto" : ""
                  )}>
                    {j.desc}
                  </p>
                </div>

                <div className={cn(
                  "flex items-center gap-10",
                  i % 2 === 1 ? "justify-end" : "justify-start"
                )}>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase block mb-1">From</span>
                    <span className="text-2xl font-serif text-primary">{j.price} <span className="text-xs italic text-muted-foreground font-sans">per person</span></span>
                  </div>
                  <Link href={j.href} className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] uppercase text-primary border-b border-primary/20 pb-2 hover:text-secondary hover:border-secondary transition-colors">
                    EXPLORE JOURNEY <ArrowRight className="h-4 w-4 text-accent" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">
           <Link href="/tours" className="bg-primary text-white px-16 py-6 font-bold tracking-[0.3em] text-[10px] uppercase hover:bg-secondary transition-all inline-block shadow-lg shadow-primary/20">
             VIEW ALL SAFARIS
           </Link>
        </div>
      </div>
    </section>
  );
}
