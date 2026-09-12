'use client';

import { Map, Users, Sparkles, HeartHandshake, Compass } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-data';
import PageHeader from '@/components/layout/PageHeader';
import { useTranslation } from '@/context/LanguageContext';

/**
 * @fileOverview Adhama Africa Adventures About Page.
 * Corrected from leftover template content to authentic Adhama mission/vision.
 */

export default function AboutPage() {
  const { t } = useTranslation();
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-image');

  const pillars = [
    {
      icon: Map,
      title: "Deep Local Roots",
      desc: "Founded and operated by Tanzanian safari experts who have spent decades exploring every corner of the Serengeti and Kilimanjaro."
    },
    {
      icon: HeartHandshake,
      title: "Community First Ethos",
      desc: "We prioritize local impact, ensuring that the revenue from your journey directly supports the families and educators in our partner communities."
    },
    {
      icon: Sparkles,
      title: "Authentic Immersion",
      desc: "We move beyond staged tourist traps to offer unscripted global connections—true moments that transform both the traveler and the host."
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        title="Our Story"
        subtitle="Bridging the gap between global explorers and vibrant local communities since our inception."
      />
      
      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="editorial-label">WHO WE ARE</span>
              <h2 className="text-4xl md:text-5xl font-serif italic text-secondary tracking-tighter leading-tight">
                Authentic journeys designed with <span className="text-primary">heart.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                "Adhama Africa Adventures was born from a simple desire: to redefine the Tanzanian safari experience by returning to the unscripted grandeur of our land."
              </p>
            </div>

            <div className="grid gap-10">
              {pillars.map((p, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                    <p.icon className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-black uppercase tracking-widest text-secondary">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden shadow-2xl border-[12px] border-white organic-frame">
              <Image 
                src={aboutImage?.imageUrl || '/images/adhama-old/giraffe-wild-scaled.jpg'}
                alt="Adhama Team"
                fill
                className="object-cover"
                data-ai-hint="tanzania safari people"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-secondary text-white p-12 max-w-sm shadow-2xl hidden xl:block organic-frame-alt">
               <Compass className="h-10 w-10 text-primary mb-6" />
               <p className="text-2xl font-serif italic leading-tight">Your visit leaves a positive, verifiable footprint.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainable Mission Section */}
      <section className="bg-secondary text-white py-24 md:py-32">
        <div className="container mx-auto px-6 text-center max-w-4xl space-y-8">
           <span className="editorial-label text-primary mx-auto">OUR COMMITMENT</span>
           <h3 className="text-4xl md:text-6xl font-serif italic tracking-tight leading-tight">
             Beyond the Big Five.
           </h3>
           <p className="text-xl text-white/70 leading-relaxed italic">
             While the majesty of our wildlife is legendary, our primary focus remains the human connection. We believe that true travel happens in the kitchens of Arusha and the traditional homesteads of the Maasai.
           </p>
        </div>
      </section>
    </div>
  );
}
