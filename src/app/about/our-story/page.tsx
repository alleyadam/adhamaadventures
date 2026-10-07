import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Compass, Handshake, Leaf, MapPin, ShieldCheck, UsersRound } from 'lucide-react';
import { USARI_IMAGES } from '@/lib/usari-images';

const milestones = [
  {
    year: 'Arusha roots',
    title: 'Built by people who know the land',
    text: 'Adhama grew from local guiding knowledge, community relationships, and a belief that Tanzania should be experienced with honesty and care.',
  },
  {
    year: 'Community first',
    title: 'Travel that includes local families',
    text: 'Our routes connect wildlife, culture, schools, homestays, and conservation so tourism supports the people who protect these landscapes.',
  },
  {
    year: 'Today',
    title: 'Private journeys with real accountability',
    text: 'Every safari, climb, coast escape, and cultural route is shaped from Arusha around timing, purpose, comfort, and positive impact.',
  },
];

const principles = [
  {
    icon: UsersRound,
    title: 'Local people',
    text: 'Guides, hosts, artisans, cooks, and community partners are treated as the heart of the journey, not an add-on.',
  },
  {
    icon: Leaf,
    title: 'Living landscapes',
    text: 'Routes are planned with respect for wildlife corridors, protected areas, seasons, and lower-impact choices.',
  },
  {
    icon: ShieldCheck,
    title: 'Clear planning',
    text: 'Guests get practical advice, thoughtful pacing, and honest expectations before they step into the vehicle.',
  },
];

export default function OurStoryPage() {
  return (
    <main className="overflow-hidden bg-background">
      <section className="relative min-h-[86vh] overflow-hidden bg-primary pt-28 text-white md:pt-36">
        <Image
          src={USARI_IMAGES.giraffeHerd}
          alt="Giraffes in Tanzania woodland"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,58,39,0.92),rgba(13,58,39,0.58)_48%,rgba(13,58,39,0.18)),linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.42))]" />
        <div className="kente-border absolute inset-x-0 top-0 h-2" />

        <div className="container relative mx-auto grid min-h-[74vh] items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.75fr]">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-accent backdrop-blur-md">
              <MapPin className="h-4 w-4" />
              Arusha born
            </div>
            <h1 className="font-serif text-6xl font-bold leading-[0.9] md:text-8xl lg:text-9xl">
              Our Story
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-semibold leading-relaxed text-white/82 md:text-2xl">
              Adhama Africa Adventures bridges global explorers with vibrant Tanzanian communities through safaris that feel personal, useful, and real.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-accent px-7 text-[10px] font-black uppercase tracking-[0.22em] text-secondary shadow-xl shadow-accent/20 transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                Plan With Us <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about/our-focus"
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 text-[10px] font-black uppercase tracking-[0.22em] text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white hover:text-secondary"
              >
                See Our Focus
              </Link>
            </div>
          </div>

          <div className="hidden rounded-[2rem] border border-white/15 bg-black/28 p-6 shadow-2xl backdrop-blur-md lg:block">
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-accent">Karibu sana</p>
            <p className="mt-5 font-serif text-3xl leading-tight text-white">
              We do not just book routes. We help guests meet the Tanzania that lives behind the postcard.
            </p>
            <div className="mt-8 grid gap-3">
              {['Community-first routes', 'Private local guides', 'Wildlife with purpose'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white/82">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto grid gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="editorial-label">Why we began</span>
            <h2 className="font-serif text-5xl font-bold leading-[0.95] text-secondary md:text-7xl">
              Real places. Real hosts. Real responsibility.
            </h2>
          </div>
          <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
            <p>
              Adhama Africa Adventures was born from a simple frustration: too many safari experiences felt staged, rushed, and disconnected from the people who make Tanzania extraordinary.
            </p>
            <p>
              We wanted something more grounded. A safari could still be polished and comfortable, but it should also be human: a quiet exchange with a host family, a guide who explains the season honestly, a route that supports schools, conservation, and local enterprise.
            </p>
            <p>
              That is why our story begins in Arusha and keeps returning there. The office, the guides, the communities, the roads, the parks, and the families we work with are not background details. They are the journey.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/45 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-3xl">
            <span className="editorial-label">The Adhama path</span>
            <h2 className="editorial-heading mb-0">How the story keeps moving.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {milestones.map((item) => (
              <article key={item.year} className="rounded-[1.5rem] border border-border/70 bg-white p-7 shadow-lg">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-primary">{item.year}</p>
                <h3 className="mt-6 font-serif text-3xl font-bold leading-tight text-secondary">{item.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] shadow-2xl">
            <Image
              src={USARI_IMAGES.lionCub}
              alt="Young lion in Tanzania"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-secondary/18" />
          </div>
          <div className="space-y-5">
            <span className="editorial-label">What we protect</span>
            <h2 className="font-serif text-5xl font-bold leading-[0.98] text-secondary md:text-7xl">
              The journey should leave something good behind.
            </h2>
            <div className="grid gap-4 pt-5">
              {principles.map((principle) => (
                <div key={principle.title} className="flex gap-5 rounded-[1.25rem] border border-border/70 bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <principle.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-[0.16em] text-secondary">{principle.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{principle.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary px-6 py-20 text-white md:py-28">
        <div className="african-weave absolute inset-0 opacity-10" />
        <div className="container relative mx-auto flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.24em] text-accent">
              <Compass className="h-4 w-4" />
              Start your chapter
            </div>
            <h2 className="font-serif text-4xl font-bold leading-tight md:text-6xl">
              Come as a guest. Leave connected to a place.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-accent px-8 text-[10px] font-black uppercase tracking-[0.22em] text-secondary transition-all hover:-translate-y-0.5 hover:bg-white"
          >
            Start Planning <Handshake className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
