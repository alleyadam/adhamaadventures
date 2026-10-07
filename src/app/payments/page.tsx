import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, CreditCard, Building2, Lock, ArrowRight, CheckCircle2, Wallet, Globe } from 'lucide-react';
import { USARI_IMAGES } from '@/lib/usari-images';

export const metadata: Metadata = {
  title: 'Payment Methods | Bank Transfer, Card & Secure Online Payment',
  description:
    'Pay for your Tanzania safari securely with Adhama Africa Adventures. Choose bank transfer, card payment, or secure online payment. Transparent, verified and protected.',
  keywords: [
    'Tanzania safari payment',
    'bank transfer Tanzania',
    'card payment safari',
    'secure online payment Tanzania',
    'Adhama payment methods',
  ],
  alternates: { canonical: '/payments' },
};

export default function PaymentsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden bg-secondary px-6 pb-24 pt-36 text-white md:pt-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(236,173,56,0.16),transparent_40%),radial-gradient(circle_at_85%_30%,rgba(174,62,35,0.12),transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.22))]" />
        <div className="kente-border absolute inset-x-0 top-0 h-1.5" />
        <div className="pointer-events-none absolute left-8 top-28 h-16 w-16 border-l-2 border-t-2 border-accent/40" />
        <div className="pointer-events-none absolute bottom-12 right-8 h-16 w-16 border-b-2 border-r-2 border-accent/30" />
        <div className="container relative mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-5 py-2.5 backdrop-blur-sm">
            <Lock className="h-4 w-4 text-accent" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Payment Methods</span>
          </div>
          <h1 className="mt-2 font-serif text-5xl leading-[0.98] md:text-7xl">
            Pay securely. Travel with confidence.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/72 md:text-xl">
            Adhama Africa Adventures offers transparent, verified payment methods for your Tanzania safari.
            Every transaction is confirmed in writing, and your booking is protected by our terms and conditions.
          </p>
          {/* Quick trust badges */}
          <div className="mt-10 flex flex-wrap gap-4">
            {[
              { icon: ShieldCheck, label: 'PCI-DSS compliant' },
              { icon: Lock, label: '256-bit SSL encryption' },
              { icon: CheckCircle2, label: 'Written confirmation' },
            ].map((badge) => (
              <div key={badge.label} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 backdrop-blur-sm">
                <badge.icon className="h-3.5 w-3.5 text-accent" />
                <span className="text-[10px] font-black uppercase tracking-[0.14em] text-white/80">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT METHODS */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-primary">Accepted methods</span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-secondary md:text-5xl">
              Three ways to pay
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Choose the method that suits you best. All payments are verified by our reservations team before your booking is confirmed.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Bank Transfer */}
            <div className="group relative overflow-hidden rounded-[1.5rem] border border-border/60 bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-10 -translate-y-10 rotate-45 bg-primary/5 transition-transform group-hover:scale-150" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Building2 className="h-7 w-7" />
              </div>
              <h3 className="relative mt-6 font-serif text-2xl text-secondary">Bank Transfer</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                Transfer your deposit or full payment directly to our verified Tanzanian business bank account.
                Ideal for international travellers who prefer a direct, traceable transaction.
              </p>
              <ul className="relative mt-6 space-y-2.5">
                {[
                  'Official business bank account in Arusha',
                  'International SWIFT transfers accepted',
                  'Written invoice with full bank details provided',
                  'Confirmation receipt after funds clear',
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 text-xs leading-relaxed text-secondary/80">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="relative mt-6 rounded-xl bg-muted/40 p-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Processing time</p>
                <p className="mt-1 text-sm font-bold text-secondary">2–5 business days</p>
              </div>
            </div>

            {/* Card Payment */}
            <div className="group relative overflow-hidden rounded-[1.5rem] border border-border/60 bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-10 -translate-y-10 rotate-45 bg-accent/10 transition-transform group-hover:scale-150" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <CreditCard className="h-7 w-7" />
              </div>
              <h3 className="relative mt-6 font-serif text-2xl text-secondary">Card Payment</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                Pay by Visa or Mastercard. A secure payment link is sent after your itinerary and invoice are confirmed,
                so you always know exactly what you are paying for.
              </p>
              <ul className="relative mt-6 space-y-2.5">
                {[
                  'Visa and Mastercard accepted',
                  'Secure payment link sent to your email',
                  '3-D Secure authentication for buyer protection',
                  'Instant payment confirmation',
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 text-xs leading-relaxed text-secondary/80">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="relative mt-6 rounded-xl bg-muted/40 p-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Processing time</p>
                <p className="mt-1 text-sm font-bold text-secondary">Instant</p>
              </div>
            </div>

            {/* Secure Online Payment */}
            <div className="group relative overflow-hidden rounded-[1.5rem] border-2 border-primary bg-primary/[0.02] p-8 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-10 -translate-y-10 rotate-45 bg-primary/10 transition-transform group-hover:scale-150" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <span className="relative mt-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-primary">
                Most secure
              </span>
              <h3 className="relative mt-2 font-serif text-2xl text-secondary">Secure Online Payment</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                Our encrypted online payment gateway provides the highest level of transaction security.
                Your card data is processed through a certified, PCI-DSS-compliant payment platform.
              </p>
              <ul className="relative mt-6 space-y-2.5">
                {[
                  '256-bit SSL encryption on all transactions',
                  'PCI-DSS compliant payment gateway',
                  'Fraud protection and chargeback safeguards',
                  'Email and SMS payment receipts',
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 text-xs leading-relaxed text-secondary/80">
                    <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="relative mt-6 rounded-xl bg-primary/5 p-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary">Processing time</p>
                <p className="mt-1 text-sm font-bold text-secondary">Instant & encrypted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT PROCESS */}
      <section className="section-padding bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-primary">How it works</span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-secondary md:text-5xl">
              A clear, step-by-step payment process
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: '01',
                title: 'Receive your quote',
                desc: 'We prepare a detailed itinerary and written quote based on your enquiry. No payment is required until you approve.',
                icon: <Wallet className="h-5 w-5" />,
              },
              {
                num: '02',
                title: 'Confirm and invoice',
                desc: 'Once you approve the itinerary, we issue an official invoice with payment instructions and your chosen method.',
                icon: <Globe className="h-5 w-5" />,
              },
              {
                num: '03',
                title: 'Make your payment',
                desc: 'Pay your deposit (typically 20–30%) or full amount by bank transfer, card, or secure online gateway.',
                icon: <CreditCard className="h-5 w-5" />,
              },
              {
                num: '04',
                title: 'Booking confirmed',
                desc: 'We send written confirmation with your booking reference, itinerary, and all relevant travel documents.',
                icon: <ShieldCheck className="h-5 w-5" />,
              },
            ].map((step) => (
              <div key={step.num} className="relative overflow-hidden rounded-2xl border border-border/60 bg-white p-6 shadow-sm">
                <span className="absolute right-4 top-3 font-serif text-5xl text-primary/8">{step.num}</span>
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {step.icon}
                </div>
                <h3 className="relative mt-4 font-serif text-xl text-secondary">{step.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY & TRUST */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="relative h-64 overflow-hidden rounded-[1.5rem] shadow-xl lg:h-96">
              <img
                src={USARI_IMAGES.giraffeHerd}
                alt="Tanzania safari payment security"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
            </div>
            <div className="space-y-6">
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-primary">Security & trust</span>
              <h2 className="font-serif text-4xl leading-tight text-secondary md:text-5xl">
                Your payment is protected
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                We follow a transparent payment protocol designed to protect both you and our team. Every payment is
                documented in writing, and our terms and conditions outline exactly what happens at each stage of your booking.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Written confirmation', desc: 'Every payment is confirmed in writing by our team.' },
                  { title: 'Verified business', desc: 'Adhama is a registered Tanzanian tour operator with verified bank accounts.' },
                  { title: 'Encrypted gateway', desc: 'Online payments use 256-bit SSL encryption.' },
                  { title: 'Clear refund policy', desc: 'Cancellation and refund terms are outlined in our policies.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-border/50 bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      <h3 className="text-sm font-bold text-secondary">{item.title}</h3>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANK DETAILS */}
      <section className="section-padding bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-primary">Bank transfer details</span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-secondary md:text-5xl">
              Official business account
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Use these details for bank transfer payments. Always reference your invoice number so we can match your payment quickly.
            </p>
          </div>

          <div className="mx-auto max-w-2xl overflow-hidden rounded-[1.5rem] border border-border/60 bg-white shadow-xl">
            <div className="relative bg-secondary px-8 py-6 text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,rgba(236,173,56,0.12),transparent_40%)]" />
              <div className="relative flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-accent">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-accent">Verified bank account</p>
                  <h3 className="font-serif text-2xl">NMB Bank — Arusha, Tanzania</h3>
                </div>
              </div>
            </div>
            <div className="grid gap-px bg-border/40 sm:grid-cols-2">
              {[
                { label: 'Bank', value: 'NMB Bank' },
                { label: 'Account Name', value: 'Adhama Africa Adventures' },
                { label: 'Account Number', value: '1234567890' },
                { label: 'SWIFT Code', value: 'NMBCTZTZ' },
              ].map((detail) => (
                <div key={detail.label} className="bg-white p-6">
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{detail.label}</p>
                  <p className="mt-2 text-sm font-bold text-secondary">{detail.value}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-border/40 bg-muted/30 p-6">
              <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  Payment is due within 15 days of the invoice date. Please mention the invoice number as a reference for your payment.
                  Contact us at <span className="font-bold text-secondary">info@adhamaadventures.co.tz</span> or <span className="font-bold text-secondary">+255 753 300 602</span> if you need assistance.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-secondary px-6 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(236,173,56,0.14),transparent_34%)]" />
        <div className="container relative mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">Ready to secure your safari?</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/72">
            Start with a no-obligation quote. Our team will guide you through every step — from itinerary design to payment and travel.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-accent px-8 text-[10px] font-black uppercase tracking-[0.2em] text-secondary shadow-xl transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/terms"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-secondary"
            >
              View Terms & Conditions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
