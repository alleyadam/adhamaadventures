import Link from 'next/link';
import { ArrowUpRight, Compass, ShieldCheck, Users } from 'lucide-react';

const roles = [
  { title: 'Managing Director / General Manager', group: 'Management', description: 'Company leadership, guest experience standards, and overall direction.' },
  { title: 'Operations Manager', group: 'Safari Operations', description: 'Trip coordination, reservations, logistics, and support for guests in Tanzania.' },
  { title: 'Senior Safari Guide', group: 'Safari Guides', description: 'Wildlife interpretation, route knowledge, guest care, and safe guiding in the field.' },
];

export default function TeamGuidesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-primary px-6 pb-20 pt-36 text-primary-foreground md:pb-28 md:pt-44">
        <div className="container mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-accent">The people of Adhama</p>
          <h1 className="max-w-4xl font-serif text-5xl font-bold leading-[1.04] md:text-7xl">Local knowledge. Personal care. Real people.</h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 md:text-lg">Meet the team who plan, coordinate, and guide journeys across Tanzania. We are building this page around verified profiles and authentic team photography.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="editorial-label">Our team</p>
            <h2 className="font-serif text-4xl font-bold text-secondary md:text-5xl">People behind every journey</h2>
            <p className="mt-5 leading-7 text-muted-foreground">Profiles below define the team structure. Names, biographies, photographs, languages, and experience details should be added after Adhama confirms the correct information.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {roles.map((role, index) => (
              <article key={role.title} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                <div className="flex aspect-[4/3] items-center justify-center bg-muted text-primary">
                  {index === 0 ? <Users className="h-12 w-12" /> : index === 1 ? <Compass className="h-12 w-12" /> : <ShieldCheck className="h-12 w-12" />}
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{role.group}</p>
                  <h3 className="mt-3 font-serif text-2xl font-bold text-secondary">{role.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{role.description}</p>
                  <p className="mt-5 border-t border-border pt-4 text-xs font-medium text-muted-foreground">Profile details to be confirmed by Adhama</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/60 px-6 py-20 md:py-24">
        <div className="container mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="editorial-label">Safari guides</p>
            <h2 className="font-serif text-4xl font-bold text-secondary md:text-5xl">Your guide makes the difference.</h2>
            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">Each guide profile will include their name, title, experience, languages, guiding strengths, favourite destinations, verified training, and guest feedback where permission has been granted.</p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-7 md:p-9">
            <h3 className="font-serif text-2xl font-bold text-secondary">Guide profile checklist</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
              {['Full name and professional title', 'Authentic portrait photograph', 'Years of guiding experience', 'Languages spoken', 'Wildlife, cultural, birding, or family-travel specialties', 'Verified certifications or training', 'Favourite destinations and approved guest feedback'].map(item => <li key={item} className="flex gap-3"><span className="font-bold text-primary">✓</span>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="px-6 py-20 text-center">
        <p className="editorial-label">Start planning</p>
        <h2 className="mx-auto max-w-3xl font-serif text-4xl font-bold text-secondary md:text-5xl">Let our local team help shape your Tanzania journey.</h2>
        <Link href="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-secondary">Talk to our team <ArrowUpRight className="h-4 w-4" /></Link>
      </section>
    </main>
  );
}
