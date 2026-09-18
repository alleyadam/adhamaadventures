import PageHeader from '@/components/layout/PageHeader';
import { ArrowRight, BadgeDollarSign, Binoculars, BookOpen, Handshake, Leaf, Recycle, ShieldCheck, Sprout, Target, Trees, Users } from 'lucide-react';
import Link from 'next/link';

export default function OurFocusPage() {
  const sdgs = [
    { label: 'SDG 1', title: 'No Poverty' },
    { label: 'SDG 4', title: 'Quality Education' },
    { label: 'SDG 8', title: 'Decent Work & Economic Growth' },
    { label: 'SDG 15', title: 'Life on Land' },
  ];
  const principles = [
    { icon: Handshake, title: 'Local supply chains', desc: 'We prioritize locally owned suppliers, guides, makers, cooks, drivers, and community partners wherever possible.' },
    { icon: Users, title: 'Cultural boundaries', desc: 'Community visits are designed with consent, respect, and space for hosts to decide what is shared.' },
    { icon: Recycle, title: 'No-plastic operations', desc: 'Safari planning favors reusable bottles, refill systems, and low-waste field practices.' },
    { icon: BadgeDollarSign, title: 'Financial transparency', desc: 'Host communities should clearly understand how tourism revenue supports agreed local priorities.' },
    { icon: ShieldCheck, title: 'Guest responsibility', desc: 'Travelers receive guidance on etiquette, conservation conduct, photography, and respectful exchange.' },
    { icon: Trees, title: 'Habitat care', desc: 'Routes and activities are selected to reduce disturbance while supporting conservation-led destinations.' },
    { icon: BookOpen, title: 'Education support', desc: 'Programs connect travel income with classrooms, learning materials, and school partnerships.' },
    { icon: Target, title: 'Long-term impact', desc: 'We focus on repeatable development gains, not one-off gestures that disappear after the trip.' },
  ];
  const pillars = [
    {
      icon: Users,
      title: 'Community',
      desc: 'Directing resources to build classrooms, fund local medical dispensaries, and provide micro-loans.',
    },
    {
      icon: BookOpen,
      title: 'Culture',
      desc: 'Preserving ancestral knowledge, languages, and crafts through respectful cultural exchange.',
    },
    {
      icon: Sprout,
      title: 'Carbon Reduction',
      desc: 'Offsetting the carbon footprint of every safari through indigenous tree-planting initiatives.',
    },
    {
      icon: Binoculars,
      title: 'Conservation',
      desc: 'Funding anti-poaching initiatives, habitat restoration, and human-wildlife conflict resolution.',
    },
  ];

  return (
    <div className="bg-background">
      <PageHeader
        title="Our Focus"
        subtitle="Strategic alignment of adventure, ethics, and sustainability."
      />
      <section className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-7">
            <span className="editorial-label">RESPONSIBLE TOURISM</span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-secondary tracking-tighter leading-tight">
              Tourism as a practical tool for grassroots development.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our operational philosophy is aligned with the United Nations Sustainable Development Goals. We focus especially on poverty reduction, quality education, decent work, economic growth, and protection of life on land.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We believe responsible tourism is one of East Africa's most effective tools for community-led development when it is planned with care, transparency, and respect.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {sdgs.map((sdg) => (
              <div key={sdg.label} className="rounded-[28px] border border-border bg-muted/20 p-6">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">{sdg.label}</p>
                <h3 className="mt-4 text-2xl font-serif italic text-secondary">{sdg.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/25 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center space-y-5">
            <span className="editorial-label">HOW WE OPERATE</span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-secondary tracking-tighter">
              Eight responsible tourism principles.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-border/70 bg-background p-6 shadow-sm">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-secondary">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-[32px] bg-secondary p-8 text-white shadow-lg">
              <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                <pillar.icon className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-serif italic">{pillar.title}</h3>
              <p className="mt-5 text-sm leading-relaxed text-white/75">{pillar.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-[36px] bg-primary p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="max-w-2xl space-y-4">
              <span className="editorial-label text-white/70">EXPLORE WITH US</span>
              <h2 className="text-4xl md:text-5xl font-serif italic tracking-tighter leading-tight">
                Ready to visit Africa's top destinations?
              </h2>
              <p className="text-white/80 leading-relaxed">
                Explore Tanzania with a team focused on community, culture, carbon reduction, and conservation.
              </p>
            </div>
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-primary transition-transform hover:-translate-y-1"
            >
              Explore More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
