'use client';

import React from 'react';
import Link from 'next/link';
import { useFirestore, useDoc } from '@/firebase';
import { doc } from 'firebase/firestore';
import { Loader2, HeartHandshake, TreePine, GraduationCap, Globe } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';

/**
 * @fileOverview Dynamic Impact Stats Section.
 * Responsive grid refactored for small phones (320px+).
 */

export default function ImpactStats() {
  const db = useFirestore();
  const { t } = useTranslation();
  const { data: config, loading } = useDoc<any>(doc(db, 'settings', 'sustainability'));

  const stats = [
    { value: config?.generalStats?.communities || '45+', label: t('stats.communities'), icon: HeartHandshake },
    { value: config?.metrics?.trees ? config.metrics.trees.toLocaleString() + '+' : '50K+', label: t('stats.trees'), icon: TreePine },
    { value: config?.generalStats?.schools || '22', label: t('stats.schools'), icon: GraduationCap },
    { value: config?.generalStats?.travellers || '1,000+', label: t('stats.travellers'), icon: Globe },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F8F4ED] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-6 md:space-y-8">
              <span className="editorial-label">{t('impact.label')}</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-primary tracking-tighter italic">
                {t('impact.heading')}<span className="text-secondary">{t('impact.headingAccent')}</span>
              </h2>
              <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl font-sans">
                <p>{t('impact.p1')}</p>
                <p>{t('impact.p2')}</p>
              </div>
            </div>
            
            <div className="pt-4">
               <Link href="/sustainability" className="text-[10px] font-black tracking-[0.3em] uppercase text-primary border-b-2 border-primary/20 pb-2 hover:text-secondary hover:border-secondary transition-colors">
                {t('impact.button')}
               </Link>
            </div>
          </div>

          <div className="relative">
            {loading && (
              <div className="absolute inset-0 z-10 bg-white/40 backdrop-blur-sm flex items-center justify-center">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 p-6 sm:p-12 bg-white border border-border/30 relative shadow-2xl rounded-lg">
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-accent hidden sm:block" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-secondary hidden sm:block" />
              
              {stats.map((stat, i) => (
                <div key={i} className="space-y-3 p-4 sm:p-0 border-b sm:border-none border-muted last:border-none">
                  <div className="flex items-center gap-3 mb-1">
                    <stat.icon className="h-4 w-4 text-primary/40" />
                    <div className="text-[9px] font-black tracking-[0.2em] text-muted-foreground uppercase">{stat.label}</div>
                  </div>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary tracking-tighter transition-all duration-1000 leading-none">
                    {stat.value}
                  </div>
                  <div className="h-[2px] w-6 bg-accent/30" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
