'use client';

import React from 'react';
import Image from 'next/image';
import { CalendarDays, MapPin, ShieldCheck } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PlanSafariForm from '../forms/PlanSafariForm';
import { useTranslation } from '@/context/LanguageContext';
import { USARI_IMAGES } from '@/lib/usari-images';

interface PlanSafariDialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function PlanSafariDialog({ children, open, onOpenChange }: PlanSafariDialogProps) {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-5xl border-none bg-white p-0 shadow-2xl overflow-hidden rounded-[1.75rem] h-[88vh] max-h-[760px] pointer-events-auto">
        <div className="grid h-full grid-cols-1 overflow-hidden lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left visual panel */}
          <div className="relative hidden overflow-hidden bg-secondary lg:block">
            <Image 
              src={USARI_IMAGES.giraffeHerd}
              alt="Plan Your Safari"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 44vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,40,27,0.12),rgba(10,40,27,0.84)),radial-gradient(circle_at_20%_10%,rgba(236,173,56,0.28),transparent_34%)]" />
            <div className="kente-border absolute inset-x-0 top-0 h-2" />
            <div className="absolute inset-x-6 bottom-6 space-y-5 text-white lg:inset-x-10 lg:bottom-10">
              <div className="inline-flex rounded-full border border-white/20 bg-white/12 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-accent backdrop-blur-md">
                Tailor-made Tanzania
              </div>
              <h3 className="max-w-md font-serif text-4xl font-bold leading-[0.95] lg:text-5xl">
                Your route, shaped by local experts.
              </h3>
              <div className="grid gap-3 lg:grid-cols-1 xl:grid-cols-3">
                <div className="rounded-2xl border border-white/15 bg-black/24 p-4 backdrop-blur-sm">
                  <MapPin className="mb-3 h-5 w-5 text-accent" />
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/70">Based in</p>
                  <p className="mt-1 text-sm font-bold">Arusha</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-black/24 p-4 backdrop-blur-sm">
                  <CalendarDays className="mb-3 h-5 w-5 text-accent" />
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/70">Response</p>
                  <p className="mt-1 text-sm font-bold">Within 24h</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-black/24 p-4 backdrop-blur-sm">
                  <ShieldCheck className="mb-3 h-5 w-5 text-accent" />
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/70">Planning</p>
                  <p className="mt-1 text-sm font-bold">Private & local</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form panel — fixed height, no scroll */}
          <div className="flex h-full flex-col bg-[#fbf7ef] p-5 sm:p-7 lg:p-8 overflow-hidden">
            <DialogHeader className="mb-4 shrink-0 text-left">
              <DialogDescription className="mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                {t('form.subtitle')}
              </DialogDescription>
              <DialogTitle className="font-serif text-3xl font-bold leading-none text-secondary sm:text-4xl">
                {t('form.title')}
              </DialogTitle>
            </DialogHeader>
            
            <div className="min-h-0 flex-1 overflow-hidden">
              <PlanSafariForm onSuccess={() => onOpenChange?.(false)} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
