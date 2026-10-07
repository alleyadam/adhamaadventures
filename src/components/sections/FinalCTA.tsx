'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';
import { USARI_IMAGES } from '@/lib/usari-images';

export default function FinalCTA() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-foreground py-28 md:py-36">
      <Image
        src={USARI_IMAGES.lionesses}
        alt="Lionesses resting in the Serengeti at sunset"
        fill
        className="object-cover opacity-75 transition-transform duration-[10000ms] hover:scale-105"
        sizes="100vw"
        data-ai-hint="lion pride"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/75 to-secondary/45" />

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="mx-auto max-w-4xl space-y-6 rounded-[2rem] bg-black/30 p-6 backdrop-blur-sm md:p-10">
          <span className="editorial-label mx-auto w-fit rounded-full bg-black/30 px-4 py-2 text-accent">{t('cta.label')}</span>
          <h2 className="font-serif text-5xl leading-[1.0] md:text-7xl lg:text-8xl">
            {t('cta.heading1')}<br /><span className="text-accent underline underline-offset-[16px] decoration-1">{t('cta.heading2')}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-semibold leading-relaxed text-white/90 md:text-2xl">
            {t('cta.subheading')}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 pt-10 sm:flex-row">
          <Button asChild size="lg" className="h-14 rounded-full border-none bg-accent px-12 text-[10px] font-black uppercase tracking-[0.2em] text-secondary shadow-xl shadow-primary/20 transition-all duration-500 hover:bg-white sm:px-16">
            <Link href="/contact">{t('cta.button1')}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 rounded-full border-white/40 bg-white/10 px-12 text-[10px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-500 hover:bg-white hover:text-secondary sm:px-16">
            <Link href="https://wa.me/255753300602">{t('cta.button2')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
