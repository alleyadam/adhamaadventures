
'use client';

import PageHeader from '@/components/layout/PageHeader';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { Loader2 } from 'lucide-react';

export default function FAQPage() {
  const db = useFirestore();
  const faqQuery = query(collection(db, 'faqs'), orderBy('order', 'asc'));
  const { data: faqs, loading } = useCollection<any>(faqQuery);

  return (
    <div className="bg-background">
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Expert advice and essential information for your Tanzanian safari experience."
      />
      <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* FAQ List */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-secondary uppercase tracking-tight mb-8 italic">Common Questions</h2>
            
            {loading ? (
              <div className="flex justify-center py-20"><Loader2 className="h-10 w-10 animate-spin text-primary" /></div>
            ) : faqs?.length === 0 ? (
              <p className="text-muted-foreground italic">No FAQs available yet. Contact us for immediate assistance.</p>
            ) : (
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-none px-6 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <AccordionTrigger className="text-left font-bold text-secondary hover:no-underline py-6 uppercase tracking-tight text-sm">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed italic text-sm border-t pt-4 border-muted">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>

          {/* Contact Form Section */}
          <Card className="border-none shadow-2xl bg-secondary text-white p-2 rounded-none">
            <CardHeader className="space-y-2 p-8">
                <CardTitle className="text-2xl font-black uppercase tracking-tight text-primary italic">Still have questions?</CardTitle>
                <p className="text-sm opacity-70">Fill out the form below and our team will get back to you within 24 hours.</p>
            </CardHeader>
            <CardContent className="bg-white text-foreground rounded-none p-8">
                <form className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Your Name</Label>
                        <Input id="name" placeholder="Enter your full name" className="rounded-none border-muted focus:ring-primary" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Your Email</Label>
                            <Input id="email" type="email" placeholder="email@example.com" className="rounded-none border-muted focus:ring-primary" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Phone</Label>
                            <Input id="phone" placeholder="+255..." className="rounded-none border-muted focus:ring-primary" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Your Message</Label>
                        <Textarea id="message" placeholder="How can we help you plan your journey?" className="rounded-none border-muted focus:ring-primary min-h-[120px]" />
                    </div>
                    <Button className="w-full bg-primary hover:bg-secondary text-white rounded-none h-14 font-black uppercase tracking-widest text-xs">
                        SEND MESSAGE
                    </Button>
                </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
