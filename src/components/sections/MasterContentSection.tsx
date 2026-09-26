import { MASTER_CONTENT } from '@/lib/master-content';
import { CheckCircle2, Quote } from 'lucide-react';
import Link from 'next/link';

type MasterContentSectionProps = {
  page: keyof typeof MASTER_CONTENT;
};

export default function MasterContentSection({ page }: MasterContentSectionProps) {
  const content = MASTER_CONTENT[page];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <aside className="lg:sticky lg:top-28">
            <p className="editorial-label">{content.eyebrow}</p>
            <h2 className="text-3xl font-serif font-bold leading-tight text-foreground md:text-5xl">
              {content.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              {content.intro}
            </p>
            <div className="mt-8 rounded-2xl border border-border bg-muted/25 p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">SEO Direction</p>
              <p className="mt-3 text-sm font-bold text-secondary">{content.metaTitle}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{content.metaDescription}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {content.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-primary">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            {content.blocks.map((block) => (
              <div key={block.heading} className="rounded-[28px] border border-border bg-background p-6 shadow-sm md:p-8">
                <h3 className="text-xl font-serif font-bold leading-tight text-secondary md:text-2xl">{block.heading}</h3>
                {block.body ? <p className="mt-4 leading-relaxed text-muted-foreground">{block.body}</p> : null}
                {block.items?.length ? (
                  <ul className="mt-5 space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}

            {content.testimonials?.length ? (
              <div className="grid gap-4 md:grid-cols-2">
                {content.testimonials.map((testimonial) => (
                  <blockquote key={testimonial} className="rounded-[24px] bg-secondary p-6 text-white shadow-lg">
                    <Quote className="mb-4 h-6 w-6 text-accent" />
                    <p className="text-sm leading-relaxed text-white/85">{testimonial}</p>
                  </blockquote>
                ))}
              </div>
            ) : null}

            <div className="rounded-[28px] bg-primary p-6 text-white md:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/70">Client CTA</p>
              <p className="mt-3 text-2xl font-serif font-bold leading-tight">{content.cta}</p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-primary transition-transform hover:-translate-y-0.5"
              >
                Start Planning
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
