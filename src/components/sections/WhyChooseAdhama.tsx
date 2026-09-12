import Link from 'next/link';
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
    <section className="section-padding bg-[#EFE8DE]">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="space-y-7">
            <span className="editorial-label">Why choose Adhama</span>
            <h2 className="editorial-heading mb-0">Tanzania tours with local soul, polished planning, and measurable impact.</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The experience should feel premium without losing what makes Adhama different: community-first tourism, thoughtful guides, honest advice, and safari routes that fit the traveller instead of a template.
            </p>
            <Link
              href="/about/our-focus"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-secondary px-7 text-[10px] font-black uppercase tracking-[0.22em] text-white shadow-xl shadow-secondary/10 transition-all hover:-translate-y-0.5 hover:bg-primary"
            >
              See Our Difference <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[1.75rem] border border-secondary/10 bg-white p-5 shadow-2xl">
            <div className="grid gap-3 border-b border-border/70 pb-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat} className="rounded-2xl bg-secondary px-4 py-5 text-center text-white">
                  <Star className="mx-auto mb-3 h-4 w-4 fill-accent text-accent" />
                  <p className="text-[10px] font-black uppercase leading-relaxed tracking-[0.16em]">{stat}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 pt-5 md:grid-cols-2">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="rounded-2xl border border-border/70 bg-[#FBF8F2] p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-secondary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-3 text-lg font-black leading-tight text-secondary">{reason.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{reason.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
