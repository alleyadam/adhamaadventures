import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { TOUR_CATEGORIES } from '@/lib/safari-content';

export default function TourCategoryShowcase() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-secondary/5 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <span className="editorial-label">Explore Tanzania with Adhama</span>
            <h2 className="editorial-heading mb-0">Top-rated journeys, grouped by travel style.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Adhama’s old site had the right inventory: safaris, Kilimanjaro, Zanzibar, cultural immersion, homestays, student travel, and CSR-led journeys. This section brings that catalog forward in a clearer, more bookable way.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {TOUR_CATEGORIES.map((category, index) => (
            <Link
              key={category.title}
              href={category.href}
              className="group premium-card overflow-hidden bg-white"
            >
              <div className={`relative h-72 overflow-hidden ${index % 2 === 0 ? 'organic-frame' : 'organic-frame-alt'}`}>
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
                <div className="absolute inset-0 image-vignette" />
                <div className="absolute left-5 top-5 rounded-full bg-accent px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-secondary">
                  {category.rank}
                </div>
                <h3 className="absolute bottom-5 left-5 right-5 font-serif text-3xl italic leading-none text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-5 p-7">
                <p className="text-sm leading-relaxed text-muted-foreground">{category.description}</p>
                <div className="space-y-3">
                  {category.itineraries.map((itinerary) => (
                    <div key={itinerary} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-xs font-bold uppercase leading-relaxed tracking-[0.08em] text-secondary">
                        {itinerary}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary group-hover:text-accent">
                  See options <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
