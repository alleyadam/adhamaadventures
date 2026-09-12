'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';

export default function EditorialIntro() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-16 lg:gap-24 items-center">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-8">
              <span className="editorial-label">{t('intro.label')}</span>
              <h2 className="editorial-heading">
                {t('intro.heading')}
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-xl font-sans">
                <p>{t('intro.p1')}</p>
                <p>{t('intro.p2')}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4">
              {t('intro.pillars').map((item: string) => (
                <div key={item} className="premium-card p-5 space-y-3">
                  <span className="text-[10px] font-black tracking-widest uppercase text-primary">{item}</span>
                  <div className="h-[2px] w-10 rounded-full bg-accent" />
                </div>
              ))}
            </div>

            <Button asChild variant="link" className="p-0 h-auto text-primary font-bold tracking-[0.2em] text-[10px] group uppercase hover:text-secondary transition-colors">
              <Link href="/about/our-story" className="flex items-center gap-3">
                {t('intro.discover')} <ArrowRight className="h-4 w-4 text-secondary transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden group organic-frame shadow-2xl">
              <Image 
                src="/images/Wilderbeast2.jpeg" 
                alt="Authentic Tanzania" 
                fill 
                className="object-cover transition-transform group-hover:scale-105" 
                style={{ transitionDuration: '2000ms' }}
                data-ai-hint="wildebeest wildlife"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-1/2 aspect-square hidden lg:block border-[12px] border-background shadow-2xl overflow-hidden rounded-[2rem]">
               <Image 
                src="/images/Southern Ground HornBills.jpeg" 
                alt="Safari detail" 
                fill 
                className="object-cover" 
                data-ai-hint="hornbill bird"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
