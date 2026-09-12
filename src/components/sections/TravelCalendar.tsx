'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CloudRain, Map, MapPin, Sparkles, Thermometer, UsersRound } from 'lucide-react';

const seasonMonths = [
  {
    code: 'JAN',
    name: 'January',
    image: '/images/Wilderbeast4.jpeg',
    highlight: 'The calving season begins',
    summary: 'The southern plains turn emerald as the migration settles around Ndutu and the Serengeti short-grass plains.',
    location: 'Southern Serengeti & Ndutu',
    temperature: '28°C',
    rain: 'Short rains',
    crowd: 'Low to medium',
    bestParks: ['Serengeti', 'Ngorongoro', 'Tarangire'],
    intelligence: ['Wildebeest calving begins', 'Exceptional cheetah sightings', 'Fresh green landscapes', 'Excellent photography light'],
    tags: ['Big cats', 'Calving', 'Photography', 'Birding'],
  },
  {
    code: 'FEB',
    name: 'February',
    image: '/images/adhama-old/lion-african.webp',
    highlight: 'Predator action peaks',
    summary: 'Calving season is at its strongest, creating intense predator-prey movement across Ndutu and southern Serengeti.',
    location: 'Ndutu, Serengeti & Ngorongoro',
    temperature: '29°C',
    rain: 'Short showers',
    crowd: 'Medium',
    bestParks: ['Serengeti', 'Ngorongoro', 'Lake Manyara'],
    intelligence: ['Big cat activity is strong', 'Young wildebeest on the plains', 'Green-season rates can be attractive', 'Birdlife remains excellent'],
    tags: ['Predators', 'Calving', 'Green season', 'Families'],
  },
  {
    code: 'MAR',
    name: 'March',
    image: '/images/Flamengo.jpeg',
    highlight: 'Green season beauty',
    summary: 'The landscape is lush, skies are dramatic, and northern routes reward travellers who enjoy quieter safari days.',
    location: 'Northern circuit parks',
    temperature: '28°C',
    rain: 'Long rains begin',
    crowd: 'Low',
    bestParks: ['Manyara', 'Tarangire', 'Ngorongoro'],
    intelligence: ['Rich birding conditions', 'Soft dramatic skies', 'Lower visitor pressure', 'Beautiful crater photography'],
    tags: ['Birding', 'Value', 'Photography', 'Quiet routes'],
  },
  {
    code: 'APR',
    name: 'April',
    image: '/images/adhama-old/tanzania-camping-safari-1.webp',
    highlight: 'Quiet, wild, and cinematic',
    summary: 'April is for patient travellers: fewer vehicles, lush wilderness, and private-feeling safari moments.',
    location: 'Ngorongoro, Manyara & Arusha',
    temperature: '27°C',
    rain: 'Long rains',
    crowd: 'Very low',
    bestParks: ['Ngorongoro', 'Arusha NP', 'Lake Manyara'],
    intelligence: ['Best for flexible travellers', 'Lush scenery and flowers', 'Great lodge value', 'Road planning matters'],
    tags: ['Quiet', 'Value', 'Landscape', 'Flexible'],
  },
  {
    code: 'MAY',
    name: 'May',
    image: '/images/Girrafe.jpeg',
    highlight: 'The plains begin to move',
    summary: 'As rains fade, wildlife starts shifting north and the countryside still carries deep green colour.',
    location: 'Central Serengeti & Karatu',
    temperature: '27°C',
    rain: 'Rains easing',
    crowd: 'Low',
    bestParks: ['Serengeti', 'Karatu', 'Tarangire'],
    intelligence: ['Migration movement builds', 'Great value before peak season', 'Excellent guiding flexibility', 'Green landscapes remain'],
    tags: ['Migration', 'Value', 'Green season', 'Guided'],
  },
  {
    code: 'JUN',
    name: 'June',
    image: '/images/Elephant3.jpeg',
    highlight: 'Dry-season safari begins',
    summary: 'Roads improve, wildlife visibility increases, and the classic northern circuit starts moving into peak form.',
    location: 'Serengeti, Tarangire & Ngorongoro',
    temperature: '26°C',
    rain: 'Mostly dry',
    crowd: 'Medium',
    bestParks: ['Tarangire', 'Serengeti', 'Ngorongoro'],
    intelligence: ['Excellent all-round safari month', 'Elephants gather gradually', 'Clearer road conditions', 'Good for Kilimanjaro add-ons'],
    tags: ['Dry season', 'Elephants', 'Kilimanjaro', 'Classic safari'],
  },
  {
    code: 'JUL',
    name: 'July',
    image: '/images/adhama-old/wildebeest-river-crossing.webp',
    highlight: 'Migration drama rises',
    summary: 'The migration pushes toward the north and river-crossing anticipation becomes the heartbeat of the Serengeti.',
    location: 'Northern Serengeti & Mara River',
    temperature: '25°C',
    rain: 'Dry',
    crowd: 'High',
    bestParks: ['Serengeti', 'Tarangire', 'Ngorongoro'],
    intelligence: ['River crossing season begins', 'Book early for top camps', 'Big wildlife concentrations', 'Prime private guiding month'],
    tags: ['Migration', 'River crossings', 'Peak season', 'Big Five'],
  },
  {
    code: 'AUG',
    name: 'August',
    image: '/images/adhama-old/serengeti-10-day.webp',
    highlight: 'Peak safari conditions',
    summary: 'Clear skies, strong wildlife sightings, and migration movement make August one of Tanzania’s most requested months.',
    location: 'Northern Serengeti & Tarangire',
    temperature: '26°C',
    rain: 'Dry',
    crowd: 'High',
    bestParks: ['Serengeti', 'Tarangire', 'Lake Manyara'],
    intelligence: ['Superb wildlife visibility', 'Peak elephant season in Tarangire', 'Ideal family travel month', 'Advance planning essential'],
    tags: ['Peak safari', 'Families', 'Elephants', 'Migration'],
  },
  {
    code: 'SEP',
    name: 'September',
    image: '/images/Wilderbeast3.jpeg',
    highlight: 'River crossings and golden light',
    summary: 'The north remains powerful while dry-season visibility stays excellent across Tanzania’s classic safari routes.',
    location: 'Northern Serengeti & Tarangire',
    temperature: '27°C',
    rain: 'Dry',
    crowd: 'High',
    bestParks: ['Serengeti', 'Tarangire', 'Ngorongoro'],
    intelligence: ['Strong river-crossing chances', 'Golden dry-season landscapes', 'Excellent predator tracking', 'Comfortable travel weather'],
    tags: ['Migration', 'Photography', 'Predators', 'Dry season'],
  },
  {
    code: 'OCT',
    name: 'October',
    image: '/images/adhama-old/giraffe-wild-scaled.jpg',
    highlight: 'Dry-season finale',
    summary: 'Wildlife gathers around remaining water, creating reliable game viewing before the short rains arrive.',
    location: 'Tarangire, Serengeti & Mikumi',
    temperature: '29°C',
    rain: 'Mostly dry',
    crowd: 'Medium',
    bestParks: ['Tarangire', 'Serengeti', 'Mikumi'],
    intelligence: ['Excellent elephant sightings', 'Good value after peak months', 'Warm clear conditions', 'Strong short-safari routes'],
    tags: ['Elephants', 'Private safari', 'Warm weather', 'Value'],
  },
  {
    code: 'NOV',
    name: 'November',
    image: '/images/adhama-old/maasai-attire.webp',
    highlight: 'Fresh rains, culture, and colour',
    summary: 'Short rains revive the land, birdlife becomes exciting, and culture-forward routes pair beautifully with shorter safaris.',
    location: 'Arusha, Manyara & Lake Eyasi',
    temperature: '28°C',
    rain: 'Short rains',
    crowd: 'Low',
    bestParks: ['Lake Eyasi', 'Manyara', 'Arusha NP'],
    intelligence: ['Excellent cultural add-ons', 'Migratory birds arrive', 'Lower crowds', 'Great for flexible itineraries'],
    tags: ['Culture', 'Birding', 'Low crowds', 'Community'],
  },
  {
    code: 'DEC',
    name: 'December',
    image: '/images/adhama-old/zanzibar-rock.webp',
    highlight: 'Safari plus coast season',
    summary: 'Festive travel pairs northern safari routes with Zanzibar, spice culture, and warm Indian Ocean days.',
    location: 'Northern circuit & Zanzibar',
    temperature: '30°C',
    rain: 'Short showers',
    crowd: 'High late month',
    bestParks: ['Serengeti', 'Ngorongoro', 'Zanzibar'],
    intelligence: ['Great bush-to-beach planning', 'Book festive dates early', 'Warm coastal weather', 'Strong family travel month'],
    tags: ['Zanzibar', 'Families', 'Festive', 'Bush to beach'],
  },
];

export default function TravelCalendar() {
  const [activeCode, setActiveCode] = useState('JAN');
  const active = seasonMonths.find((month) => month.code === activeCode) || seasonMonths[0];

  return (
    <section id="season-explorer" className="section-padding overflow-hidden border-y border-border/30 bg-[#F8F1E8]">
      <div className="container mx-auto px-6">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <span className="editorial-label rounded-full bg-white/60 px-4 py-2 text-primary">Intelligent planning</span>
            <h2 className="editorial-heading mb-0 text-secondary">
              Safari <span className="italic text-primary">Season Explorer.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-end">
            {seasonMonths.map((month) => (
              <button
                key={month.code}
                onClick={() => setActiveCode(month.code)}
                className={cn(
                  'h-11 rounded-full px-5 text-[10px] font-black uppercase tracking-[0.16em] transition-all',
                  activeCode === month.code
                    ? 'bg-secondary text-white shadow-xl shadow-secondary/15'
                    : 'bg-white/65 text-muted-foreground hover:bg-white hover:text-primary'
                )}
              >
                {month.code}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[420px] overflow-hidden rounded-[1.75rem] shadow-2xl">
            <Image
              src={active.image}
              alt={`${active.name} safari season in Tanzania`}
              fill
              className="object-cover transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3A2011]/85 via-[#3A2011]/22 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 max-w-2xl text-white">
              <p className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                <Sparkles className="h-4 w-4" /> Highlight
              </p>
              <h3 className="font-serif text-4xl italic leading-tight">{active.highlight}</h3>
              <p className="mt-3 text-base font-medium italic leading-relaxed text-white/82">{active.summary}</p>
            </div>
          </div>

          <div className="grid gap-7">
            <div className="rounded-[1.75rem] bg-secondary p-8 text-white shadow-2xl">
              <p className="mb-7 text-[10px] font-black uppercase tracking-[0.3em] text-accent">Best parks in {active.name}</p>
              <div className="space-y-5">
                {active.bestParks.map((park) => (
                  <p key={park} className="border-b border-white/10 pb-5 font-serif text-2xl italic last:border-b-0 last:pb-0">
                    {park}
                  </p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {active.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[8px] font-black uppercase tracking-[0.12em] text-white/78">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-border/60 bg-white/75 p-8 shadow-xl backdrop-blur-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-primary">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mb-5 font-serif text-2xl italic text-secondary">{active.name} ready to experience</h3>
              <Button asChild className="h-[3.25rem] w-full rounded-full bg-secondary text-[10px] font-black uppercase tracking-[0.2em] text-white hover:bg-primary">
                <Link href={`/contact?month=${active.code.toLowerCase()}`}>Inquire for {active.name}</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-7 grid gap-7 lg:grid-cols-[0.95fr_1fr_0.75fr]">
          <div className="rounded-[1.5rem] border border-border/60 bg-white/75 p-7 shadow-lg">
            <p className="mb-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-primary">
              <MapPin className="h-4 w-4" /> Migration intelligence
            </p>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.08em] text-secondary">Current location</p>
            <p className="font-serif text-2xl italic text-secondary">{active.location}</p>
            <ul className="mt-6 space-y-3 border-t border-border/60 pt-6">
              {active.intelligence.map((item) => (
                <li key={item} className="text-sm font-medium italic leading-relaxed text-muted-foreground">• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.5rem] border border-border/60 bg-white/75 p-7 shadow-lg">
            <p className="mb-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-primary">
              <CloudRain className="h-4 w-4" /> Environmental metadata
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <Thermometer className="h-4 w-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.14em]">Temp</span>
                </div>
                <p className="font-serif text-2xl text-secondary">{active.temperature}</p>
              </div>
              <div>
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <CloudRain className="h-4 w-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.14em]">Rain</span>
                </div>
                <p className="font-serif text-2xl text-secondary">{active.rain}</p>
              </div>
              <div>
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <UsersRound className="h-4 w-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.14em]">Crowds</span>
                </div>
                <p className="font-serif text-2xl text-secondary">{active.crowd}</p>
              </div>
            </div>
            <p className="mt-7 border-t border-border/60 pt-5 text-xs font-medium italic leading-relaxed text-muted-foreground">
              Elite planning note: routes, accommodation, and park focus shift by month. Use this explorer as a starting point, then let Adhama shape the exact timing.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-border/60 bg-white/75 p-7 shadow-lg">
            <p className="mb-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-primary">
              <Map className="h-4 w-4" /> Route idea
            </p>
            <p className="font-serif text-3xl italic leading-tight text-secondary">{active.name} safari planning</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Pair {active.bestParks.slice(0, 2).join(' and ')} with culture, Kilimanjaro foothills, or Zanzibar depending on your pace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
