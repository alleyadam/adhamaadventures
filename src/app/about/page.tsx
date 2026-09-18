import { Clock, Compass, HeartHandshake, Leaf, Mail, Map, MapPin, Phone, Sparkles, Trees, Users } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-data';
import PageHeader from '@/components/layout/PageHeader';

/**
 * @fileOverview Adhama Africa Adventures About Page.
 * Corrected from leftover template content to authentic Adhama mission/vision.
 */

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-image');

  const pillars = [
    {
      icon: Map,
      title: "Deep Local Roots",
      desc: "Founded and operated by Tanzanian safari experts who have spent decades exploring every corner of the Serengeti and Kilimanjaro."
    },
    {
      icon: HeartHandshake,
      title: "Community First Ethos",
      desc: "We prioritize local impact, ensuring that the revenue from your journey directly supports the families and educators in our partner communities."
    },
    {
      icon: Sparkles,
      title: "Authentic Immersion",
      desc: "We move beyond staged tourist traps to offer unscripted global connections—true moments that transform both the traveler and the host."
    }
  ];
  const timeline = [
    { year: '2018', text: 'Founded by local guides and community elders in Arusha.' },
    { year: '2019', text: "Launched the Women's Weaving Cooperative program, empowering female artisans." },
    { year: '2020', text: 'Initiated a pandemic-response green project and planted the first 100,000 trees.' },
    { year: '2022', text: "Launched partnerships with NGOs and local communities." },
    { year: '2024', text: 'Expanded operations to six major regions across Tanzania.' },
  ];
  const focus = [
    {
      icon: Leaf,
      title: 'Responsible Tourism',
      desc: 'Eco-friendly safaris, low-impact travel, and conservation fees that directly support protected areas.',
    },
    {
      icon: Users,
      title: 'Community Empowerment',
      desc: "Tourism revenue supports scholarships, women's cooperatives, and village development projects.",
    },
    {
      icon: HeartHandshake,
      title: 'Global Partnerships',
      desc: 'Partnerships with schools, churches, NGOs, and environmental organizations to create meaningful programs.',
    },
  ];
  const contacts = [
    {
      icon: Phone,
      label: 'Call expert',
      value: '+255 753 300 602',
    },
    {
      icon: Mail,
      label: 'Write email',
      value: 'info@adhamaadventures.co.tz',
    },
    {
      icon: MapPin,
      label: 'Visit office',
      value: 'House No. 6, Njiro Ghorofa Mbili, Arusha Tanzania',
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        title="Our Story"
        subtitle="Bridging the gap between global explorers and vibrant local communities since our inception."
      />
      
      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="editorial-label">WHO WE ARE</span>
              <h2 className="text-4xl md:text-5xl font-serif italic text-secondary tracking-tighter leading-tight">
                Tanzania's premier community-based tour operator.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                "Adhama Africa Adventures was born from a simple desire: to redefine the Tanzanian safari experience by returning to the unscripted grandeur of our land."
              </p>
            </div>

            <div className="grid gap-10">
              {pillars.map((p, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                    <p.icon className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-black uppercase tracking-widest text-secondary">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden shadow-2xl border-[12px] border-white organic-frame">
              <Image 
                src={aboutImage?.imageUrl || '/images/adhama-old/giraffe-wild-scaled.jpg'}
                alt="Adhama Team"
                fill
                className="object-cover"
                data-ai-hint="tanzania safari people"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-secondary text-white p-12 max-w-sm shadow-2xl hidden xl:block organic-frame-alt">
               <Compass className="h-10 w-10 text-primary mb-6" />
               <p className="text-2xl font-serif italic leading-tight">Your visit leaves a positive, verifiable footprint.</p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-muted/25 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="space-y-5">
              <span className="editorial-label">OUR JOURNEY</span>
              <h2 className="max-w-xl text-4xl md:text-6xl font-serif italic text-secondary tracking-tighter leading-tight">
                Built in Arusha, shaped by communities.
              </h2>
              <p className="max-w-xl text-muted-foreground leading-relaxed">
                From local guide roots to regional operations, Adhama has grown around responsible tourism, conservation, and community partnerships.
              </p>
            </div>
            <div className="grid gap-4">
              {timeline.map((item) => (
                <div key={item.year} className="grid grid-cols-[88px_1fr] gap-5 rounded-[28px] border border-border/70 bg-background/80 p-5 shadow-sm">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white font-black">
                    {item.year}
                  </div>
                  <p className="self-center text-base leading-relaxed text-secondary/85">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center space-y-5">
            <span className="editorial-label">WHAT GUIDES US</span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-secondary tracking-tighter">
              Travel that protects, empowers, and connects.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {focus.map((item) => (
              <div key={item.title} className="rounded-[32px] border border-border bg-background p-8 shadow-sm">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-[0.22em] text-secondary">{item.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Mission Section */}
      <section className="bg-secondary text-white py-24 md:py-32">
        <div className="container mx-auto px-6 text-center max-w-4xl space-y-8">
           <span className="editorial-label text-primary mx-auto">OUR COMMITMENT</span>
           <h3 className="text-4xl md:text-6xl font-serif italic tracking-tight leading-tight">
             Beyond the Big Five.
           </h3>
           <p className="text-xl text-white/70 leading-relaxed italic">
             While the majesty of our wildlife is legendary, our primary focus remains the human connection. We believe that true travel happens in the kitchens of Arusha and the traditional homesteads of the Maasai.
           </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
            <div className="rounded-[36px] bg-primary p-8 md:p-12 text-white shadow-xl">
              <div className="max-w-2xl space-y-6">
                <span className="editorial-label text-white/70">TRUSTED GLOBAL PARTNERS</span>
                <h2 className="text-4xl md:text-6xl font-serif italic tracking-tighter leading-tight">
                  Book our experiences through trusted global partners.
                </h2>
                <p className="text-lg leading-relaxed text-white/85">
                  Adhama Africa Adventures creates unforgettable safari journeys, bringing guests closer to Africa's wild beauty and authentic local experiences.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.22em] text-white/80">
                <span className="rounded-full border border-white/25 px-5 py-3">Safaris</span>
                <span className="rounded-full border border-white/25 px-5 py-3">Kilimanjaro</span>
                <span className="rounded-full border border-white/25 px-5 py-3">Zanzibar</span>
                <span className="rounded-full border border-white/25 px-5 py-3">Community Travel</span>
              </div>
            </div>
            <div className="rounded-[36px] border border-border bg-background p-8 md:p-10 shadow-sm">
              <span className="editorial-label">CONTACT & OFFICE</span>
              <div className="mt-8 grid gap-5">
                {contacts.map((contact) => (
                  <div key={contact.label} className="flex gap-4 border-b border-border pb-5 last:border-b-0 last:pb-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <contact.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">{contact.label}</p>
                      <p className="mt-1 text-lg font-semibold text-secondary">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-[28px] bg-muted/40 p-6">
                <div className="mb-4 flex items-center gap-3 text-primary">
                  <Clock className="h-5 w-5" />
                  <p className="text-xs font-black uppercase tracking-[0.22em]">Office hours</p>
                </div>
                <p className="text-secondary/85">Monday - Friday: 8:00 AM - 6:00 PM (EAT)</p>
                <p className="text-secondary/85">Saturday: 9:00 AM - 4:00 PM (EAT)</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  A 24/7 emergency line is available for in-country guests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
