'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CalendarDays, ChevronLeft, ChevronRight, Mail, MapPinned, MessageCircle, ShieldCheck, Sparkles, UserRound } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import PlanSafariDialog from '@/components/layout/PlanSafariDialog';
import { useTranslation } from '@/context/LanguageContext';
import { Input } from '@/components/ui/input';
import { useFirestore } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { handleFormSubmission } from '@/app/actions/mail';
import { toast } from '@/hooks/use-toast';

/**
 * @fileOverview Adhama Africa Adventures Hero Section.
 * Features authentic safari vehicle and landscape imagery.
 * Optimized for desktop visibility and logo clearance.
 */

export default function SlidingHero() {
  const { t } = useTranslation();
  const db = useFirestore();
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isMiniSubmitting, setIsMiniSubmitting] = useState(false);
  const [miniForm, setMiniForm] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
  });

  const SLIDES = [
    {
      image: '/images/adhama-old/giraffe-wild-scaled.jpg',
      label: t('hero.slide1.label'),
      title: t('hero.slide1.title'),
      titleAccent: t('hero.slide1.accent'),
      subtitle: t('hero.slide1.subtitle'),
      hint: 'safari vehicle'
    },
    {
      image: '/images/adhama-old/lion-african.webp',
      label: t('hero.slide2.label'),
      title: t('hero.slide2.title'),
      titleAccent: t('hero.slide2.accent'),
      subtitle: t('hero.slide2.subtitle'),
      hint: 'safari truck'
    },
    {
      image: '/images/adhama-old/tanzania-camping-safari-1.webp',
      label: t('hero.slide3.label'),
      title: t('hero.slide3.title'),
      titleAccent: t('hero.slide3.accent'),
      subtitle: t('hero.slide3.subtitle'),
      hint: 'safari car'
    },
    {
      image: '/images/adhama-old/zanzibar-rock.webp',
      label: t('hero.slide4.label'),
      title: t('hero.slide4.title'),
      titleAccent: t('hero.slide4.accent'),
      subtitle: t('hero.slide4.subtitle'),
      hint: 'safari adventure'
    }
  ];

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [SLIDES.length]);

  const next = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  const handleMiniSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!miniForm.name.trim() || !miniForm.email.trim() || !miniForm.phone.trim()) {
      toast({
        variant: 'destructive',
        title: 'Missing information',
        description: 'Please add your name, email, and WhatsApp number.',
      });
      return;
    }

    setIsMiniSubmitting(true);
    const message = `Hero quick quote request. Preferred travel date: ${miniForm.travelDate || 'Not provided'}.`;
    let stored = false;
    let emailed = false;

    try {
      await addDoc(collection(db, 'enquiries'), {
        name: miniForm.name,
        email: miniForm.email,
        phone: miniForm.phone,
        country: 'Not provided',
        travellers: 'Not provided',
        budget: '',
        message,
        preferredTravelDate: miniForm.travelDate || null,
        source: 'hero_quick_quote',
        type: 'safari_enquiry',
        createdAt: serverTimestamp(),
      });
      stored = true;
    } catch (error) {
      console.error('Hero enquiry storage failed:', error);
    }

    try {
      const result = await handleFormSubmission('enquiry', {
        name: miniForm.name,
        email: miniForm.email,
        phone: miniForm.phone,
        travellers: 'Not provided',
        message,
      });
      emailed = Boolean(result?.success);
    } catch (error) {
      console.error('Hero enquiry email failed:', error);
    }

    setIsMiniSubmitting(false);

    if (stored || emailed) {
      setMiniForm({ name: '', email: '', phone: '', travelDate: '' });
      toast({
        title: 'Safari request received',
        description: 'Asante sana. An Adhama specialist will follow up shortly.',
      });
      return;
    }

    toast({
      variant: 'destructive',
      title: 'Could not send request',
      description: 'Please try again or contact us on WhatsApp.',
    });
  };

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-foreground" aria-label="Safari Showcase">
      {SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            current === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          )}
          aria-hidden={current !== idx}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            sizes="100vw"
            className={cn(
              "object-cover transition-transform ease-linear",
              current === idx ? "scale-110" : "scale-100"
            )}
            style={{ transitionDuration: '8000ms' }}
            priority={idx === 0}
            data-ai-hint={slide.hint}
          />
          <div className="absolute inset-0 cinematic-overlay" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-foreground/70 to-transparent" />
          
          <div className="relative min-h-[100svh] flex items-center container mx-auto px-6 lg:px-12">
            <div className={cn(
              "grid w-full gap-10 pt-28 pb-32 text-white lg:grid-cols-[minmax(0,1fr)_390px] lg:items-center",
              current === idx ? "animate-in fade-in slide-in-from-bottom-5 duration-1000" : ""
            )}>
              <div className="max-w-4xl space-y-5 sm:space-y-6 lg:space-y-7">
                <div className={cn(
                  "transition-all duration-1000 delay-300",
                  current === idx ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}>
                  {slide.label && (
                    <span className="editorial-label text-accent mb-4 lg:mb-8">{slide.label}</span>
                  )}
                  <h1 className="max-w-4xl text-5xl sm:text-6xl md:text-7xl lg:text-[clamp(4.2rem,6.4vw,5.6rem)] font-serif leading-[0.94] uppercase drop-shadow-2xl">
                    {slide.title}<br />
                    <span className="italic text-accent normal-case">{slide.titleAccent}</span>
                  </h1>
                </div>
                
                <p className={cn(
                  "text-base sm:text-lg md:text-xl font-serif italic text-white/90 max-w-2xl leading-relaxed transition-all duration-1000 delay-500 drop-shadow",
                  current === idx ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}>
                  {slide.subtitle}
                </p>
                
                <div className={cn(
                  "flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2 sm:pt-6 transition-all duration-1000 delay-700 lg:hidden",
                  current === idx ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}>
                  {mounted && (
                    <PlanSafariDialog>
                      <Button size="lg" tabIndex={current === idx ? 0 : -1} className="bg-accent hover:bg-white text-secondary pill-button h-14 sm:h-16 px-10 sm:px-12 font-black tracking-[0.16em] text-[10px] border-none uppercase relative z-20">
                        {t('nav.planButton')}
                      </Button>
                    </PlanSafariDialog>
                  )}
                  <Button asChild variant="outline" tabIndex={current === idx ? 0 : -1} size="lg" className="border-white/40 text-white hover:bg-white hover:text-secondary rounded-full h-14 sm:h-16 px-10 sm:px-12 font-black tracking-[0.16em] text-[10px] bg-white/10 backdrop-blur-md transition-all uppercase shadow-xl relative z-20">
                    <Link href="/destinations">{t('hero.explore')}</Link>
                  </Button>
                </div>

                <div className={cn(
                  "flex max-w-3xl items-center justify-center gap-4 pt-3 text-white transition-all duration-1000 delay-1000 sm:justify-start lg:hidden",
                  current === idx ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}>
                  {[
                    { icon: ShieldCheck, label: 'Local private guides' },
                    { icon: MapPinned, label: 'Tailored Tanzania routes' },
                    { icon: Sparkles, label: 'Impact-first travel' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="group relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/24 bg-black/24 text-accent shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-secondary"
                      aria-label={item.label}
                      title={item.label}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="sr-only">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block" aria-hidden="true" />
            </div>
          </div>
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 z-30 hidden lg:block">
        <div className="container mx-auto flex min-h-[100svh] items-center justify-end px-6 pb-32 pt-28 lg:px-12">
          <form onSubmit={handleMiniSubmit} className="pointer-events-auto w-[390px] rounded-lg border border-white/15 bg-white/95 p-6 text-secondary shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary">Get a free quote</p>
                <h2 className="mt-2 font-serif text-3xl leading-none">Plan your Tanzania tour.</h2>
              </div>
              <PlanSafariDialog>
                <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full bg-accent transition-colors hover:bg-primary hover:text-white" aria-label="Open full safari planner">
                <MessageCircle className="h-5 w-5" />
                </button>
              </PlanSafariDialog>
            </div>
            <div className="grid gap-3">
              {[
                { icon: UserRound, label: 'Your name', key: 'name', type: 'text', required: true },
                { icon: Mail, label: 'Email address', key: 'email', type: 'email', required: true },
                { icon: MessageCircle, label: 'WhatsApp number', key: 'phone', type: 'tel', required: true },
                { icon: CalendarDays, label: 'Preferred travel date', key: 'travelDate', type: 'text', required: false },
              ].map((field) => (
                <div key={field.label} className="flex h-12 items-center gap-3 rounded-full border border-border bg-background px-4">
                  <field.icon className="h-4 w-4 text-primary" />
                  <Input
                    type={field.type}
                    required={field.required}
                    value={miniForm[field.key as keyof typeof miniForm]}
                    onChange={(event) => setMiniForm((currentForm) => ({ ...currentForm, [field.key]: event.target.value }))}
                    placeholder={field.label}
                    className="h-auto border-0 bg-transparent p-0 text-xs font-bold uppercase tracking-[0.12em] text-secondary placeholder:text-muted-foreground focus-visible:ring-0"
                    disabled={isMiniSubmitting}
                  />
                </div>
              ))}
            </div>
            <Button type="submit" disabled={isMiniSubmitting} className="mt-5 h-14 w-full rounded-full bg-secondary text-[10px] font-black uppercase tracking-[0.22em] text-white hover:bg-primary">
              {isMiniSubmitting ? 'Sending...' : 'Start planning'}
            </Button>
            <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Expert planning. Zero spam. Opens the same Adhama lead flow.
            </p>
          </form>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/15 bg-[#3A2011]/42 px-3 py-2 shadow-2xl backdrop-blur-xl md:bottom-10">
        <button 
          onClick={prev} 
          className="flex h-10 w-10 items-center justify-center rounded-full text-white/75 transition-all hover:bg-white hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        
        <div className="flex items-center gap-2 px-1">
          {SLIDES.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-500",
                current === i ? "w-9 bg-accent" : "w-2 bg-white/35 hover:bg-white/70"
              )} 
            />
          ))}
        </div>

        <button 
          onClick={next} 
          className="flex h-10 w-10 items-center justify-center rounded-full text-white/75 transition-all hover:bg-white hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Next Slide"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
