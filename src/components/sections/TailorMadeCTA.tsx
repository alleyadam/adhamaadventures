import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TailorMadeCTA() {
  return (
    <section className="relative py-40 overflow-hidden">
      <Image 
        src="/images/Elephant3.jpeg" 
        alt="Tailor-made Tanzania" 
        fill 
        className="object-cover" 
        data-ai-hint="elephant wildlife"
      />
      <div className="absolute inset-0 bg-[#3A2011]/72 backdrop-blur-[1px]" />
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white space-y-10">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="editorial-label text-white/80 mx-auto">BESPOKE DESIGN</span>
          <h2 className="text-5xl md:text-7xl font-serif italic leading-tight">Your trip doesn't have to fit a template.</h2>
          <p className="text-xl md:text-2xl font-serif italic text-white/90 leading-relaxed max-w-2xl mx-auto">
            "Every traveller is different. Tell us what you want to experience, and we'll help shape the journey around you."
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <Button asChild size="lg" className="bg-primary hover:bg-secondary text-white rounded-full h-16 px-16 font-bold tracking-[0.3em] text-[10px] uppercase transition-colors border-none shadow-xl shadow-primary/30">
            <Link href="/contact">START PLANNING</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary rounded-full h-16 px-16 font-bold tracking-[0.3em] text-[10px] uppercase bg-white/5 backdrop-blur-sm transition-colors">
            <Link href="https://wa.me/255753300602">CHAT ON WHATSAPP</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
