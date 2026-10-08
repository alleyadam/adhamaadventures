import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Handshake, Home, Leaf, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Local experts, real accountability',
    text: 'Adhama plans from Arusha with guides who know the parks, seasons, roads, communities, and the quiet details that make a safari feel effortless.',
  },
  {
    icon: Leaf,
    title: 'Eco-minded safari planning',
    text: 'Routes are shaped around responsible travel, lower-impact choices, community benefit, and respect for Tanzania\u2019s wildlife corridors.',
  },
  {
    icon: Home,
    title: 'Culture beyond the vehicle',
    text: 'Homestays, cooking, schools, Maasai, Hadzabe, Datoga, Chagga, and village visits turn the itinerary into a human story.',
  },
  {
    icon: Handshake,
    title: 'Flexible private journeys',
    text: 'Safari, Kilimanjaro, Zanzibar, student programs, and community projects can be tailored around pace, comfort, budget, and purpose.',
  },
];

const stats = [
  { number: '45+', label: 'Community projects' },
  { number: '1,000+', label: 'Travellers hosted' },
  { number: '50,000+', label: 'Trees planted' },
  { number: '22', label: 'Schools supported' },
];

export default function WhyChooseAdhama() {
  return (
    <section className="section-padding relative overflow-hidden bg-muted/50">
      <div className="container relative mx-auto px-6">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <span className="editorial-label">Why choose Adhama</span>
          <h2 className="editorial-heading mb-0 mt-4">
            Tanzania tours with local soul, polished planning, and measurable impact.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary/72">
            The experience should feel premium without losing what makes Adhama different: community-first tourism, thoughtful guides, honest advice, and safari routes that fit the traveller instead of a template.
          </p>
        </div>

        {/* Image + Stats Strip */}
        <div className="mb-6 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-stretch">
          {/* Left: Image card with overlay CTA */}
          <div className="relative min-h-[380px] overflow-hidden rounded-3xl bg-secondary shadow-xl shadow-secondary/10 lg:min-h-[440px]">
            <Image
              src="/images/adhama-old/maasai-attire.webp"
              alt="Maasai cultural experience with Adhama Adventures"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
              <p className="mb-1 font-headline text-sm font-600 italic text-white/70">Arusha-based. Community-first. Privately planned.</p>
              <p className="mb-5 max-w-md text-xl font-bold leading-snug text-white">
                Real Tanzania, planned by the people who live here.
              </p>
              <Link
                href="/about/our-focus"
                className="inline-flex h-12 items-center gap-2.5 rounded-full bg-primary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-amber-600"
              >
                See Our Difference <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-start justify-center rounded-2xl border border-border/60 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md lg:p-7"
              >
                <span className="font-headline text-3xl font-700 leading-none text-primary md:text-4xl">
                  {stat.number}
                </span>
                <span className="mt-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-secondary/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Reasons: 4-card row */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group relative flex flex-col rounded-2xl border border-border/60 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2.5 font-headline text-base font-700 leading-tight tracking-tight text-secondary">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-secondary/68">
                  {reason.text}
                </p>
                <span className="mt-auto pt-5 text-[10px] font-black uppercase tracking-[0.16em] text-primary/40">
                  0{i + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
