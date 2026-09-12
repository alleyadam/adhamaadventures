'use client';

import React, { useState, useMemo } from 'react';
import { Star, Quote, Plus, Loader2 } from 'lucide-react';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, where, addDoc, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger 
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/context/LanguageContext';

const fallbackReviews = [
  {
    name: 'Andrew W',
    country: 'United Kingdom',
    trip: 'Northern Tanzania Safari',
    rating: 5,
    source: 'Tripadvisor',
    text: 'Adhama made the entire safari feel personal, calm, and beautifully organised. Our guide knew exactly where to be and when to pause.',
  },
  {
    name: 'Rita M',
    country: 'United States',
    trip: 'Serengeti & Ngorongoro',
    rating: 5,
    source: 'Google',
    text: 'The wildlife was unforgettable, but the community visit is what stayed with us. It felt respectful, warm, and completely genuine.',
  },
  {
    name: 'Belinda S',
    country: 'Australia',
    trip: 'Family Safari',
    rating: 5,
    source: 'Tripadvisor',
    text: 'A smooth private safari from first email to airport drop-off. The pacing worked perfectly for our family and every lodge was well chosen.',
  },
  {
    name: 'Guido D',
    country: 'Germany',
    trip: 'Kilimanjaro & Culture',
    rating: 5,
    source: 'Google',
    text: 'Professional mountain logistics, kind local crew, and thoughtful cultural experiences around Moshi and Arusha. Highly recommended.',
  },
];

export default function TravellerReviews() {
  const db = useFirestore();
  const { t } = useTranslation();
  
  // Public query: Fetch approved testimonials. 
  const reviewsQuery = query(
    collection(db, 'testimonials'), 
    where('status', '==', 'approved')
  );
  const { data: rawReviews, loading } = useCollection<any>(reviewsQuery);
  
  const reviews = useMemo(() => {
    if (!rawReviews) return [];
    return [...rawReviews].sort((a, b) => {
      const timeA = a.createdAt?.seconds || 0;
      const timeB = b.createdAt?.seconds || 0;
      return timeB - timeA;
    });
  }, [rawReviews]);
  const displayReviews = reviews.length ? reviews : fallbackReviews;
  
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', country: '', trip: '', text: '', rating: 5 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.text) {
      toast({ variant: "destructive", title: "Missing Information", description: "Please provide your name and story." });
      return;
    }
    
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'testimonials'), {
        ...form,
        status: 'pending',
        createdAt: serverTimestamp()
      });
      toast({ 
        title: "Story Shared", 
        description: "Asante Sana! Your story has been submitted for verification. It will be live after our team reviews it." 
      });
      setIsSubmitOpen(false);
      setForm({ name: '', country: '', trip: '', text: '', rating: 5 });
    } catch (e) {
      toast({ variant: "destructive", title: "Error", description: "We couldn't receive your story at this moment. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="editorial-label">{t('reviews.label')}</span>
          <h2 className="editorial-heading mb-5">{t('reviews.heading')}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Trusted by safari, Kilimanjaro, Zanzibar, and culture travellers planning their Tanzania journey with Adhama.
          </p>
        </div>

        <div className="mb-10 overflow-hidden rounded-[1.25rem] border border-border/60 bg-white shadow-xl">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-border/60 px-6 py-5 text-sm font-black text-secondary">
            <span className="border-b-2 border-secondary pb-2">All reviews 5.0</span>
            <span className="pb-2 text-muted-foreground"><span className="text-[#4285F4]">G</span>oogle 4.9</span>
            <span className="pb-2 text-muted-foreground">Tripadvisor 5.0</span>
            <Dialog open={isSubmitOpen} onOpenChange={setIsSubmitOpen}>
              <DialogTrigger asChild>
                <Button className="ml-auto h-11 rounded-full bg-primary px-6 text-[10px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary">
                  <Plus className="mr-2 h-4 w-4" /> {t('reviews.button')}
                </Button>
              </DialogTrigger>
              <DialogContent className="rounded-none border-none shadow-2xl p-0 overflow-hidden bg-[#F8F4ED]">
                <DialogHeader className="p-8 bg-secondary text-white">
                  <DialogTitle className="text-2xl font-serif italic">Your Adhama Experience</DialogTitle>
                  <DialogDescription className="text-white/60 text-xs uppercase tracking-widest font-bold">Share your journey with the world.</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Full Name</Label>
                      <Input value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="rounded-none border-muted h-12 focus-visible:ring-primary" placeholder="e.g. Sarah Jenkins" required />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Your Country</Label>
                      <Input value={form.country} onChange={e => setForm({...form, country: e.target.value})} className="rounded-none border-muted h-12 focus-visible:ring-primary" placeholder="e.g. United Kingdom" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Which Trip Did You Take?</Label>
                    <Input value={form.trip} onChange={e => setForm({...form, trip: e.target.value})} placeholder="e.g. Serengeti Explorer Safari" className="rounded-none border-muted h-12 focus-visible:ring-primary" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Your Rating</Label>
                    <div className="flex gap-2 p-3 bg-white border border-muted w-fit shadow-sm">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setForm({...form, rating: star})}
                          className="focus:outline-none transition-transform hover:scale-125"
                        >
                          <Star 
                            className={cn(
                              "h-6 w-6 transition-colors", 
                              star <= form.rating ? "fill-accent text-accent" : "text-muted"
                            )} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Your Story</Label>
                    <Textarea value={form.text} onChange={e => setForm({...form, text: e.target.value})} className="rounded-none border-muted min-h-[120px] focus-visible:ring-primary" placeholder="Tell us about your unscripted moments..." required />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-secondary text-white rounded-none h-16 font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/20">
                    {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                    SUBMIT FOR VERIFICATION
                  </Button>
                  <p className="text-[9px] text-center text-muted-foreground uppercase tracking-widest">Your story will be verified by our team before appearing site-wide.</p>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm font-black text-secondary">5.0 | Top Rated Service</p>
            </div>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-primary">
              Verified by Adhama Team
            </span>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {loading ? (
            [1,2,3,4].map(i => (
              <div key={i} className="h-[280px] bg-muted/10 animate-pulse border border-border/20 flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-muted" />
              </div>
            ))
          ) : (
            displayReviews.slice(0, 4).map((r, i) => (
              <div key={`${r.name}-${i}`} className="relative flex h-full min-h-[300px] flex-col bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl">
                <Quote className="absolute right-5 top-5 h-8 w-8 text-accent/15" />
                
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EFE8DE] text-sm font-black text-primary">
                    {r.name?.slice(0, 1) || 'A'}
                  </div>
                  <div>
                    <p className="font-black text-secondary">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.country || 'Global Explorer'}</p>
                  </div>
                </div>
                
                <div className="mb-5 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className={cn("h-3 w-3 rounded-full border-2", s <= (r.rating || 5) ? "border-primary bg-primary" : "border-muted")} />
                  ))}
                  <Star className="ml-1 h-3.5 w-3.5 fill-primary text-primary" />
                </div>
                
                <h3 className="mb-3 text-base font-black leading-tight text-secondary">{r.trip || 'Safari Journey'}</h3>
                <p className="line-clamp-5 flex-grow text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                
                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">
                  <span>Read more</span>
                  <span>{r.source || 'Verified'}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
