'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';

export default function FinalCTA() {
  const { t } = useTranslation();

  return (
    <section className="relative py-48 overflow-hidden bg-foreground">
      <Image 
        src="/images/Lions.jpeg" 
        alt="Start your journey" 
        fill 
        className="object-cover opacity-55 transition-transform hover:scale-110" 
        style={{ transitionDuration: '10000ms' }}
        data-ai-hint="crocodile wildlife"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white space-y-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="editorial-label text-accent mx-auto">{t('cta.label')}</span>
          <h2 className="text-5xl md:text-8xl font-serif italic leading-[1.0]">
            {t('cta.heading1')}<br /><span className="text-accent underline underline-offset-[16px] decoration-1">{t('cta.heading2')}</span>
          </h2>
          <p className="text-xl md:text-2xl font-serif italic text-white/80 max-w-2xl mx-auto leading-relaxed">
            {t('cta.subheading')}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
          <Button asChild size="lg" className="bg-accent hover:bg-white text-secondary rounded-full h-16 px-16 font-bold tracking-[0.22em] text-[11px] uppercase transition-all duration-500 border-none shadow-xl shadow-primary/20">
            <Link href="/contact">{t('cta.button1')}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white hover:text-secondary rounded-full h-16 px-16 font-bold tracking-[0.22em] text-[11px] uppercase bg-white/10 backdrop-blur-sm transition-all duration-500">
            <Link href="https://wa.me/255753300602">{t('cta.button2')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
