'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TOUR_GROUPS = [
  {
    label: '#1 Tanzania Safari',
    title: 'Tanzania Safari',
    image: '/images/adhama-old/serengeti-10-day.webp',
    intro:
      'Northern circuit classics, migration seasons, private game drives, and compact safari routes across Tanzania’s most iconic parks.',
    columns: [
      {
        title: 'Adhama Safari Itineraries',
        items: [
          '4 Days and 3 Night Safari',
          '7 Days Tanzania Camping Safari',
          '9 Days Unforgettable Tanzania Safaris',
          'Day Trip Tarangire National Park',
          '3 Days & 2 Nights Private Safari',
        ],
      },
      {
        title: 'Great Migration & Big Five',
        items: [
          'Wildbeast Migration - River Crossing',
          '8 Days The Best of Tanzania Wildlife and Cultural Safari',
          '3-Day Wildlife Safari: Tarangire, Lake Eyasi & Ngorongoro',
          '4-Day Ngorongoro-Serengeti Hadzabe & Datoga Experience',
          '10 Day Mid-Range Safari: Wildlife, Landscapes & Culture',
        ],
      },
    ],
  },
  {
    label: '#2 Tanzania Safari & Zanzibar',
    title: 'Safari & Zanzibar',
    image: '/images/adhama-old/zanzibar-rock.webp',
    intro:
      'Pair the northern circuit, Mikumi, or Serengeti with Zanzibar coast days, spice heritage, Swahili culture, and Indian Ocean rest.',
    columns: [
      {
        title: 'Safari + Coast Ideas',
        items: [
          '8-Day From Serengeti Plains to Zanzibar Shores',
          '9-Day Luxury Honeymoon Safari & Zanzibar Beach',
          '11-Day Tanzanian Safari & Culture With Zanzibar Extension',
          '12-Day Wildlife Safari, Cultural Experience & Beach Holiday',
          '2 Days From Zanzibar to Mikumi National Park',
        ],
      },
      {
        title: 'Zanzibar Beach Holidays',
        items: [
          '3 Days Zanzibar Beach Holiday',
          '7 days Zanzibar Beach Holiday',
          'Stone Town, spice farms, beaches, and marine add-ons',
          'Coastal culture and slow island evenings',
        ],
      },
    ],
  },
  {
    label: '#3 Kilimanjaro',
    title: 'Kilimanjaro',
    image: '/images/adhama-old/kilimanjaro-umbwe.webp',
    intro:
      'Mountain climbs and foothill experiences built around local crews, careful pacing, culture, waterfalls, and pre/post-climb planning.',
    columns: [
      {
        title: 'Mountain & Foothill Trips',
        items: [
          '6 Days Umbwe Route: Kilimanjaro Climbing',
          '3-Day Cultural & Kilimanjaro Experience',
          '1 Day Materuni Waterfalls, Cultural and Coffee Adventure',
          'Chagga culture and Kilimanjaro trails',
        ],
      },
      {
        title: 'Add Safari Extensions',
        items: [
          'Kilimanjaro & Tanzania Safari Extensions',
          '5 Day Northern Tanzania Classic Safari',
          '8-Day Incredible Safari + Waterfall Hike',
          'Private pre/post climb Arusha logistics',
        ],
      },
    ],
  },
  {
    label: '#4 Culture & Community',
    title: 'Cultural Based Tours',
    image: '/images/adhama-old/maasai-attire.webp',
    intro:
      'Community-first travel from the old Adhama catalog: Hadzabe, Datoga, Maasai, Chagga, cooking, schools, villages, and homestays.',
    columns: [
      {
        title: 'Community Experiences',
        items: [
          'A Day trip to Hadzabe Tribe',
          '1-Day Arusha Traditional Cooking Class',
          '2-Day Lake Eyasi and Hadzabe Cultural Experience',
          '3-Day Maasai Culture, Tarangire & Ngorongoro',
        ],
      },
      {
        title: 'Longer Cultural Safaris',
        items: [
          '4-Day Wildlife Safari and Cultural Immersion',
          '6-Day Immersing In Nature, Culture & Discovery',
          '10-Days African Culture & Nature Experience',
          'Students Tour and homestay programs',
        ],
      },
    ],
  },
];

export default function TopRatedToursPanel() {
  const [active, setActive] = useState(0);
  const group = TOUR_GROUPS[active];

  return (
    <section className="section-padding bg-[#F8F4ED] font-sans">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <span className="editorial-label">Top-rated tours</span>
          <h2 className="editorial-heading mb-5">Find the Adhama journey that matches your travel style.</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A clearer way to browse the client’s original packages: safaris, Zanzibar combinations, Kilimanjaro, and culture-led routes.
          </p>
        </div>

        <div className="overflow-hidden rounded-[1.5rem] border border-border/70 bg-white shadow-2xl">
          <div className="grid lg:grid-cols-[330px_1fr]">
            <div className="border-b border-border/60 bg-muted/40 lg:border-b-0 lg:border-r">
              {TOUR_GROUPS.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => setActive(index)}
                  className={`flex w-full items-center justify-between border-b border-border/60 px-6 py-5 text-left text-sm font-bold transition-colors last:border-b-0 ${
                    active === index ? 'bg-white text-primary' : 'text-secondary hover:bg-white/70'
                  }`}
                >
                  {item.label}
                  <ArrowRight className={`h-4 w-4 transition-transform ${active === index ? 'translate-x-1 text-primary' : 'text-muted-foreground'}`} />
                </button>
              ))}
            </div>

            <div className="relative min-h-[560px] overflow-hidden p-8 text-white md:p-10">
              <Image src={group.image} alt={group.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 70vw" />
              <div className="absolute inset-0 bg-secondary/78" />
              <div className="absolute inset-0 image-vignette" />

              <div className="relative z-10 max-w-5xl">
                <h3 className="mb-5 text-4xl font-black tracking-tight underline decoration-accent underline-offset-8">{group.title}</h3>
                <p className="mb-10 max-w-3xl text-base leading-relaxed text-white/86">{group.intro}</p>

                <div className="grid gap-10 md:grid-cols-2">
                  {group.columns.map((column) => (
                    <div key={column.title}>
                      <h4 className="mb-5 text-lg font-black tracking-tight text-white">{column.title}</h4>
                      <ul className="space-y-4">
                        {column.items.map((item) => (
                          <li key={item} className="flex gap-3 text-sm font-semibold leading-relaxed text-white/90">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button asChild className="h-[3.25rem] rounded-none border border-white/60 bg-transparent px-8 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white hover:text-secondary">
                    <Link href="/tours">See All Tours</Link>
                  </Button>
                  <Button asChild className="h-[3.25rem] rounded-none bg-accent px-8 text-[11px] font-black uppercase tracking-[0.18em] text-secondary hover:bg-white">
                    <Link href="/contact">Request a Custom Proposal</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
