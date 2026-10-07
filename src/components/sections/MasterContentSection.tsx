import { MASTER_CONTENT } from '@/lib/master-content';
import { CheckCircle2, HeartHandshake, Quote, Sparkles } from 'lucide-react';
import Link from 'next/link';

type MasterContentSectionProps = {
  page: keyof typeof MASTER_CONTENT;
};

const RELATABLE_COPY: Record<keyof typeof MASTER_CONTENT, { note: string; goodFor: string[] }> = {
  homepage: {
    note: 'Start with the kind of trip you want to feel: close to people, kind to nature, and easy to plan from home.',
    goodFor: ['First-time Tanzania guests', 'Families', 'Schools', 'Purpose-led travelers'],
  },
  about: {
    note: 'Meet the people behind the journey before you trust them with your time, money, and memories.',
    goodFor: ['Trust building', 'Local expertise', 'Responsible guests'],
  },
  focus: {
    note: 'See how each trip is planned so your adventure supports real community priorities, not just nice words.',
    goodFor: ['Impact-minded travelers', 'NGOs', 'Schools', 'Church groups'],
  },
  destinations: {
    note: 'Choose places by the experience you want: wildlife, culture, beaches, mountains, or a slower local connection.',
    goodFor: ['Safari planning', 'Zanzibar add-ons', 'Cultural routes', 'Kilimanjaro trips'],
  },
  ecoTourism: {
    note: 'Enjoy the wildlife you came for while knowing your visit helps protect the landscapes that make it possible.',
    goodFor: ['Wildlife lovers', 'Eco-conscious guests', 'Small groups'],
  },
  homestays: {
    note: 'For travelers who want to share meals, stories, and everyday life with Tanzanian families in a respectful way.',
    goodFor: ['Cultural immersion', 'Students', 'Church groups', 'Slow travel'],
  },
  partnerships: {
    note: 'Understand who Adhama works with locally, and how partnerships keep impact accountable.',
    goodFor: ['Institutions', 'Donors', 'Schools', 'NGOs'],
  },
  sustainability: {
    note: 'A clear view of how travel funds support trees, schools, local jobs, cleaner operations, and conservation.',
    goodFor: ['CSR teams', 'Responsible travelers', 'Corporate groups'],
  },
  inspiration: {
    note: 'For groups who want more than sightseeing: shared learning, service, culture, and reflection.',
    goodFor: ['Schools', 'Churches', 'Elder groups', 'Volunteer teams'],
  },
  faqs: {
    note: 'Quick answers for the questions people usually have before they feel ready to book.',
    goodFor: ['Planning confidence', 'Safety questions', 'Payment questions'],
  },
  blog: {
    note: 'Stories and guides that help guests picture the journey before they arrive in Tanzania.',
    goodFor: ['Travel research', 'Packing ideas', 'Culture tips'],
  },
  contact: {
    note: 'A simple next step when you are curious, almost ready, or planning on behalf of a group.',
    goodFor: ['Custom quotes', 'Institutional trips', 'WhatsApp planning'],
  },
};

export default function MasterContentSection({ page }: MasterContentSectionProps) {
  const content = MASTER_CONTENT[page];
  const relatable = RELATABLE_COPY[page];

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
              <div className="flex items-center gap-2 text-primary">
                <HeartHandshake className="h-4 w-4" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">Why it matters</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-secondary/85">{relatable.note}</p>
              <p className="mt-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Good for</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {relatable.goodFor.map((label) => (
                  <span key={label} className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-primary">
                    {label}
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
              <div className="flex items-center gap-2 text-white/75">
                <Sparkles className="h-4 w-4" />
                <p className="text-[10px] font-black uppercase tracking-[0.22em]">Ready when you are</p>
              </div>
              <p className="mt-3 text-2xl font-serif font-bold leading-tight">{content.cta}</p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-primary transition-transform hover:-translate-y-0.5"
              >
                Talk to Adhama
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
