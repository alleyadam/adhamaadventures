import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

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
};

export default function TrustPage({ eyebrow, title, intro, note, sections, ctaLabel = 'Plan my safari' }: TrustPageProps) {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-secondary px-6 pb-20 pt-36 text-white md:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,155,64,0.24),transparent_32rem)]" />
        <div className="container relative mx-auto">
          <div className="max-w-4xl">
            <span className="editorial-label text-accent">{eyebrow}</span>
            <h1 className="font-serif text-5xl leading-[0.98] md:text-8xl">{title}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/72">{intro}</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="h-fit rounded-[1.5rem] border border-border/70 bg-white p-7 shadow-xl lg:sticky lg:top-28">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h2 className="mb-4 font-serif text-3xl italic leading-tight text-secondary">Trust note</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {note ||
                'Operational claims, licences, registrations, awards, review counts, and partner credentials should be verified by Adhama before publication or supported with uploaded documentation.'}
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-secondary px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-primary"
            >
              {ctaLabel} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </aside>

          <div className="grid gap-6">
            {sections.map((section) => (
              <article key={section.title} className="rounded-[1.5rem] border border-border/70 bg-white p-7 shadow-lg">
                <h2 className="mb-4 font-serif text-3xl italic leading-tight text-secondary">{section.title}</h2>
                {section.body ? <p className="mb-6 text-base leading-relaxed text-muted-foreground">{section.body}</p> : null}
                {section.items?.length ? (
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm font-medium leading-relaxed text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
