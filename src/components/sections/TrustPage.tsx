import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, ShieldCheck, FileText, Lock, ScrollText } from 'lucide-react';
import type { Metadata } from 'next';

type TrustSection = {
  title: string;
  body?: string;
  items?: string[];
};

type TrustPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  note?: string;
  sections: TrustSection[];
  ctaLabel?: string;
  metadata?: Metadata;
};

export default function TrustPage({ eyebrow, title, intro, note, sections, ctaLabel = 'Plan my safari' }: TrustPageProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* HERO */}
      <section className="relative overflow-hidden bg-secondary px-6 pb-24 pt-36 text-white md:pt-48">
        {/* Decorative gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(236,173,56,0.16),transparent_40%),radial-gradient(circle_at_85%_30%,rgba(174,62,35,0.12),transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.22))]" />
        <div className="kente-border absolute inset-x-0 top-0 h-1.5" />

        {/* Decorative corner accents */}
        <div className="pointer-events-none absolute left-8 top-28 h-16 w-16 border-l-2 border-t-2 border-accent/40" />
        <div className="pointer-events-none absolute bottom-12 right-8 h-16 w-16 border-b-2 border-r-2 border-accent/30" />

        <div className="container relative mx-auto">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-5 py-2.5 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">{eyebrow}</span>
            </div>
            <h1 className="font-serif text-5xl leading-[0.98] md:text-7xl lg:text-8xl">{title}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/72 md:text-xl">{intro}</p>

            {/* Quick trust badges */}
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                { icon: Lock, label: 'GDPR-aware' },
                { icon: FileText, label: 'Written confirmation' },
                { icon: ScrollText, label: 'Transparent policies' },
              ].map((badge) => (
                <div key={badge.label} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 backdrop-blur-sm">
                  <badge.icon className="h-3.5 w-3.5 text-accent" />
                  <span className="text-[10px] font-black uppercase tracking-[0.14em] text-white/80">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-padding">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[0.72fr_1.28fr]">
          {/* SIDEBAR */}
          <aside className="h-fit rounded-[1.5rem] border border-border/70 bg-white p-8 shadow-xl lg:sticky lg:top-28">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h2 className="mb-4 font-serif text-3xl leading-tight text-secondary">Trust note</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {note ||
                'Operational claims, licences, registrations, awards, review counts, and partner credentials should be verified by Adhama before publication or supported with uploaded documentation.'}
            </p>

            {/* Quick contact card */}
            <div className="mt-8 rounded-2xl bg-muted/40 p-5">
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Need help?</p>
              <p className="mt-2 text-sm font-bold text-secondary">info@adhamaadventures.co.tz</p>
              <p className="mt-1 text-sm font-bold text-secondary">+255 753 300 602</p>
            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-secondary px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-primary"
            >
              {ctaLabel} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </aside>

          {/* SECTIONS */}
          <div className="grid gap-6">
            {sections.map((section, idx) => (
              <article
                key={section.title}
                className="group relative overflow-hidden rounded-[1.5rem] border border-border/70 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl md:p-10"
              >
                {/* Section number accent */}
                <span className="absolute right-6 top-6 font-serif text-6xl text-primary/8 md:text-7xl">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <div className="relative">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="h-8 w-1 rounded-full bg-gradient-to-b from-primary to-accent" />
                    <span className="text-[10px] font-black uppercase tracking-[0.24em] text-primary">
                      Section {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="mb-5 font-serif text-3xl leading-tight text-secondary md:text-4xl">{section.title}</h2>
                  {section.body ? (
                    <p className="mb-6 text-base leading-relaxed text-muted-foreground">{section.body}</p>
                  ) : null}
                  {section.items?.length ? (
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 rounded-xl border border-border/40 bg-muted/20 p-3.5 text-sm font-medium leading-relaxed text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative overflow-hidden bg-secondary px-6 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(236,173,56,0.14),transparent_34%)]" />
        <div className="container relative mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">Questions about our policies?</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/72">
            Our team is here to help. Reach out and we'll walk you through any aspect of your booking.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-accent px-8 text-[10px] font-black uppercase tracking-[0.2em] text-secondary shadow-xl transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              Contact Us <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/payments"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-secondary"
            >
              Payment Methods <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
