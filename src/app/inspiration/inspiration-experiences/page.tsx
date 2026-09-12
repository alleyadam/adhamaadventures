'use client';

import PageHeader from '@/components/layout/PageHeader';
import { ChevronRight, Users, Heart, TreePine, School, Music, Coffee, Anchor, Ship, UtensilsCrossed, Trophy, Tent } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    title: "Sleep Under the Swahili Sea",
    desc: "Experience the absolute stillness of Pemba Island in the Manta Resort's Underwater Room. Surrounded by 360-degree glass windows, watch reef fish, squid, and octopus drift by your bed as you sleep in a submerged suite on a floating island.",
    icon: Ship,
    imageId: 'insp-lake-fishing' // Reusing a water-themed seed
  },
  {
    title: "Singeli Dance & Street Culture",
    desc: "Join a high-tempo Singeli dance circle in Dar es Salaam. Experience the raw energy of Bongo Flava and the vibrant 'Mama Lishe' street food culture where community life happens around charcoal stoves and heavy beats.",
    icon: Music,
    imageId: 'insp-drum-music'
  },
  {
    title: "AFCON 2027: The Pamoja Journey",
    desc: "Be part of history as Tanzania co-hosts Africa's biggest football tournament. From the Benjamin Mkapa Stadium to Zanzibar's fan zones, experience the electrifying energy of continental football blended with Swahili hospitality.",
    icon: Trophy,
    imageId: 'hero-safari'
  },
  {
    title: "Forage with Hadzabe Hunters",
    desc: "Step back 10,000 years around Lake Eyasi. Join the world's last true hunter-gatherers on an early morning hunt, learn to make fire with sticks, and forage for honey and tubers using ancient bushcraft skills.",
    icon: Users,
    imageId: 'insp-maasai-walk'
  },
  {
    title: "Seaweed Farming with Mama Jambiani",
    desc: "Join the women's cooperatives in Zanzibar's shallow lagoons. Learn to plant, harvest, and process seaweed into organic soaps, experiencing the delicate balance of Swahili coastal economy and marine conservation.",
    icon: Anchor,
    imageId: 'dar-coast'
  },
  {
    title: "The Kanga Proverb Tour",
    desc: "Navigate the vibrant markets of Kariakoo or Arusha to find the perfect Kanga. Learn the hidden meanings behind the Swahili proverbs printed on each cloth and work with local tailors to create custom street fashion.",
    icon: Heart,
    imageId: 'insp-classroom'
  }
];

export default function InspirationExperiencesPage() {
  return (
    <div className="bg-background min-h-screen pb-20">
      <PageHeader
        title="Inspiration Experiences"
        subtitle="Highly curated, transformational journeys designed to create a lasting impact on both traveler and host."
      />

      <div className="container mx-auto px-4 max-w-6xl py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {experiences.map((exp, i) => {
            const img = PlaceHolderImages.find(p => p.id === exp.imageId);
            return (
              <Card key={i} className="group border-none shadow-xl rounded-[1.5rem] overflow-hidden hover:shadow-2xl transition-all flex flex-col h-full bg-white">
                <div className={`relative h-72 w-full overflow-hidden ${i % 2 === 0 ? 'organic-frame' : 'organic-frame-alt'}`}>
                  <Image 
                    src={img?.imageUrl || '/images/adhama-old/giraffe-wild-scaled.jpg'} 
                    alt={exp.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 image-vignette" />
                  <div className="absolute bottom-6 left-6">
                    <div className="p-3 bg-primary text-white rounded-xl shadow-lg">
                      <exp.icon className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-black text-secondary uppercase tracking-tight leading-tight">
                    {exp.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8 pt-0 flex-grow">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {exp.desc}
                  </p>
                </CardContent>
                <div className="p-8 pt-0 mt-auto">
                    <Button asChild className="w-full bg-secondary hover:bg-primary text-white rounded-full h-12 text-xs font-black uppercase tracking-widest transition-colors shadow-lg shadow-secondary/10">
                        <Link href="/contact">Inquire Now</Link>
                    </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="bg-secondary text-white p-12 md:p-20 rounded-[3rem] text-center space-y-10 shadow-2xl relative overflow-hidden border-4 border-primary/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              Create a <span className="text-primary italic">Living</span> Legacy
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Every detail is intentionally designed to awaken your senses and broaden your perspective. Choose a journey that leaves a breathing, growing footprint in Africa.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full h-16 px-12 font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
              <Link href="/contact">PLAN AN INSPIRATION TOUR</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
