'use client';

import Link from 'next/link';
import { ArrowRight, CalendarDays, MessageCircle, ShieldCheck, Star } from 'lucide-react';
import PlanSafariDialog from '@/components/layout/PlanSafariDialog';
import { Button } from '@/components/ui/button';
import { TRUST_BADGES } from '@/lib/safari-content';

export default function AuthorityQuotePanel() {
  return (
    <section className="relative z-20 bg-background px-6 py-10 md:py-12">
      <div className="container mx-auto">
        <div className="grid overflow-hidden rounded-[1.5rem] border border-border/70 bg-white shadow-[0_24px_80px_rgba(58,32,17,0.12)] lg:grid-cols-[1fr_420px]">
          <div className="bg-secondary p-6 text-white md:p-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {TRUST_BADGES.map((badge) => (
                <div key={badge} className="flex items-center gap-3 border-white/10 lg:border-r lg:last:border-r-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                  </span>
                  <span className="text-[10px] font-black uppercase leading-relaxed tracking-[0.14em] text-white/86">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-accent p-7 text-secondary md:p-9">
            <div className="mb-6 flex items-center gap-3">
              <ShieldCheck className="h-5 w-5" />
              <p className="text-[10px] font-black uppercase tracking-[0.22em]">Get a free quote</p>
            </div>
            <h2 className="mb-4 font-serif text-3xl leading-none">Expert planning. Zero spam.</h2>
            <p className="mb-8 text-sm font-medium leading-relaxed text-secondary/80">
              Tell Adhama what you want to see, when you want to travel, and how you like to move. A Tanzania specialist will shape the route.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <PlanSafariDialog>
                <Button className="h-14 rounded-full bg-secondary px-6 text-[10px] font-black uppercase tracking-[0.18em] text-white hover:bg-primary">
                  <CalendarDays className="h-4 w-4" />
                  Plan my safari
                </Button>
              </PlanSafariDialog>
              <Button asChild variant="outline" className="h-14 rounded-full border-secondary/30 bg-white/20 px-6 text-[10px] font-black uppercase tracking-[0.18em] text-secondary hover:bg-white">
                <Link href="https://wa.me/255753300602">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Link>
              </Button>
            </div>
            <Link href="/tours" className="mt-6 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-secondary/80 hover:text-secondary">
              See package ideas <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
