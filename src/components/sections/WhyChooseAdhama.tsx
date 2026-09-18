import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Handshake, Home, Leaf, ShieldCheck, Star } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Local experts, real accountability',
    text: 'Adhama plans from Arusha with guides who know the parks, seasons, roads, communities, and the quiet details that make a safari feel effortless.',
  },
  {
    icon: Leaf,
    title: 'Eco-minded safari planning',
    text: 'Routes are shaped around responsible travel, lower-impact choices, community benefit, and respect for Tanzania’s wildlife corridors.',
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
  '45+ community projects',
  '1,000+ travellers hosted',
  '50,000+ trees planted',
  '22 schools supported',
];

export default function WhyChooseAdhama() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#EFE8DE]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(255,155,64,0.22),transparent_28rem),radial-gradient(circle_at_88%_18%,rgba(155,89,41,0.16),transparent_30rem)]" aria-hidden="true" />
      <div className="container relative mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative space-y-8">
            <div className="absolute -left-8 top-14 hidden h-48 w-1 rounded-full bg-primary/60 lg:block" aria-hidden="true" />
            <span className="editorial-label">Why choose Adhama</span>
            <h2 className="editorial-heading mb-0 max-w-2xl">
              Tanzania tours with local soul, polished planning, and measurable impact.
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-secondary/72">
              The experience should feel premium without losing what makes Adhama different: community-first tourism, thoughtful guides, honest advice, and safari routes that fit the traveller instead of a template.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/about/our-focus"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-secondary px-7 text-[10px] font-black uppercase tracking-[0.22em] text-white shadow-xl shadow-secondary/10 transition-all hover:-translate-y-0.5 hover:bg-primary"
              >
                See Our Difference <ArrowUpRight className="h-4 w-4" />
              </Link>
              <p className="text-xs font-black uppercase leading-relaxed tracking-[0.18em] text-primary">
                Arusha-based. Community-first. Privately planned.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-6 -top-8 hidden h-44 w-44 rounded-full border border-primary/25 lg:block" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] bg-secondary text-white shadow-[0_30px_90px_rgba(58,32,17,0.2)]">
              <Image
                src="/images/adhama-old/maasai-attire.webp"
                alt=""
                fill
                className="object-cover opacity-22"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/92 to-primary/75" aria-hidden="true" />
              <div className="relative z-10 grid gap-0 lg:grid-cols-[0.78fr_1fr]">
                <div className="border-b border-white/12 p-6 md:p-8 lg:border-b-0 lg:border-r">
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    {stats.map((stat) => (
                      <div key={stat} className="group rounded-[1.25rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/14">
                        <Star className="mb-4 h-4 w-4 fill-accent text-accent" />
                        <p className="text-[10px] font-black uppercase leading-relaxed tracking-[0.18em] text-white">{stat}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-px bg-white/12 md:grid-cols-2">
                  {reasons.map((reason) => {
                    const Icon = reason.icon;
                    return (
                      <div key={reason.title} className="bg-[#F8F4ED]/96 p-7 text-secondary md:p-8">
                        <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/20">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="mb-3 text-lg font-black leading-tight tracking-tight text-secondary">{reason.title}</h3>
                        <p className="text-sm leading-relaxed text-secondary/70">{reason.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
