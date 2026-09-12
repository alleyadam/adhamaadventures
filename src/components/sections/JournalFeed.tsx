'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';

const POSTS = [
  {
    category: 'ZANZIBAR HERITAGE',
    title: 'Zanzibar’s Spice Farmers',
    excerpt: 'The untold story behind the island’s heritage, food culture, and community livelihoods.',
    img: '/images/adhama-old/zanzibar-rock.webp',
    href: '/blog'
  },
  {
    category: 'SUSTAINABLE TRAVEL',
    title: 'Packing for Tanzania',
    excerpt: 'A responsible travel checklist for safaris, climbs, homestays, and community visits.',
    img: '/images/adhama-old/tanzania-camping-safari-1.webp',
    href: '/blog'
  },
  {
    category: 'COMMUNITY DEVELOPMENT',
    title: 'A School Trip That Changed Everything',
    excerpt: 'How student travel can reshape the way young travellers see Tanzania and the world.',
    img: '/images/adhama-old/children-visit.webp',
    href: '/blog'
  }
];

export default function JournalFeed() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-[#F6F3EB] border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="space-y-6">
            <span className="editorial-label">{t('journal.label')}</span>
            <h2 className="editorial-heading mb-0">{t('journal.heading')}</h2>
          </div>
          <Link href="/blog" className="text-[11px] font-bold tracking-[0.3em] uppercase text-primary border-b border-primary/20 pb-2 hover:text-accent hover:border-accent transition-colors">
            {t('journal.button')}
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {POSTS.map((post, i) => (
            <Link key={i} href={post.href} className="group space-y-8">
              <div className={`relative aspect-[4/3] overflow-hidden bg-foreground shadow-xl ${i % 2 === 0 ? 'organic-frame' : 'organic-frame-alt'}`}>
                <Image 
                  src={post.img} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  data-ai-hint="tanzania journal"
                />
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">{post.category}</span>
                <h3 className="text-3xl font-serif group-hover:text-accent transition-colors duration-500 leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="pt-2">
                  <span className="text-[10px] font-black tracking-widest text-primary uppercase border-b border-primary/20 pb-1 group-hover:border-accent group-hover:text-accent transition-all">{t('journal.readMore')}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
