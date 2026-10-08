'use client';

import Link from 'next/link';
import { ArrowRight, CalendarDays, MessageCircle, Sparkles, MapPin, Leaf, Heart } from 'lucide-react';
import PlanSafariDialog from '@/components/layout/PlanSafariDialog';
import { Button } from '@/components/ui/button';

const trustHighlights = [
  { icon: Heart, label: 'Community-first operator' },
  { icon: MapPin, label: '45+ communities empowered' },
  { icon: Sparkles, label: '1,000+ travellers hosted' },
  { icon: Leaf, label: '50,000+ trees planted' },
];

export default function AuthorityQuotePanel() {
  return (
    <section className="relative z-20 bg-background px-6 py-10 md:py-14">
      <div className="container mx-auto">
        <div className="grid overflow-hidden rounded-[1.5rem] border border-border/70 bg-white shadow-[0_24px_80px_rgba(58,32,17,0.12)] lg:grid-cols-[1fr_400px]">
          {/* Left: Trust strip + testimonial */}
          <div className="relative flex flex-col justify-between overflow-hidden bg-secondary p-7 text-white md:p-10">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-45"
              style={{ backgroundImage: "url('/images/adhama-old/children-visit.webp')" }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/92 via-secondary/80 to-secondary/72" aria-hidden="true" />

            {/* Trust highlights */}
            <div className="relative z-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
              {trustHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex flex-col gap-2.5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/25 ring-1 ring-white/10">
                      <Icon className="h-4 w-4 text-accent" />
                    </span>
                    <span className="text-[11px] font-bold uppercase leading-relaxed tracking-[0.1em] text-white/85">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Testimonial */}
            <div className="relative z-10 mt-10 max-w-xl">
              <p className="mb-3 font-headline text-5xl leading-none text-accent/40">&ldquo;</p>
              <p className="text-xl font-medium leading-relaxed text-white/95">
                Adhama didn&rsquo;t just take us on safari &mdash; they introduced us to the people, the
                villages, and the real Tanzania. Every detail was handled with care and heart.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 font-headline text-sm font-700 text-white">
                  S
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Sarah &amp; James, UK</p>
                  <p className="text-xs text-white/60">7-Day Northern Safari, 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quote panel */}
          <div className="flex flex-col justify-center bg-accent p-8 text-secondary md:p-10">
            <div className="mb-5 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-accent">
                <Sparkles className="h-4 w-4" />
              </div>
              <p className="text-[11px] font-black uppercase tracking-[0.2em]">Get a free quote</p>
            </div>

            <h2 className="mb-3 font-headline text-3xl font-700 leading-[1.15] tracking-tight">
              Expert planning.<br />Zero spam.
            </h2>
            <p className="mb-7 text-sm leading-relaxed text-secondary/75">
              Tell us what you want to see, when you want to travel, and how you like to move.
              A Tanzania specialist will shape the route.
            </p>

            <div className="space-y-3">
              <PlanSafariDialog>
                <Button className="h-13 w-full rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white transition-all hover:bg-primary hover:shadow-lg hover:shadow-primary/30">
                  <CalendarDays className="h-4 w-4" />
                  Plan my safari
                </Button>
              </PlanSafariDialog>
              <Button asChild variant="outline" className="h-13 w-full rounded-full border-secondary/25 bg-white/30 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-secondary hover:bg-white">
                <Link href="https://wa.me/255753300602">
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </Link>
              </Button>
            </div>

            <Link href="/tours" className="mt-6 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-secondary/70 transition-colors hover:text-secondary">
              See package ideas <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
