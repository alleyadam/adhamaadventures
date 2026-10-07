import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-data';
import { Compass } from 'lucide-react';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-safari');

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover scale-105 animate-slow-zoom"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      
      {/* Cinematic bottom vignette overlay */}
      <div className="absolute inset-0 cinematic-overlay" />
      
      {/* Centered content like destinationtanzania.tz */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center container mx-auto px-4 text-center">
        <div className="max-w-4xl space-y-6">
          <span className="inline-block text-sm md:text-base font-semibold uppercase tracking-[0.3em] text-primary">
            Karibu Tanzania
          </span>
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-white leading-[0.95] drop-shadow-2xl">
            Unforgettable Experiences
          </h1>
          <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
            From the endless plains of the Serengeti to the snow-capped peak of Kilimanjaro, discover Tanzania with local experts who design journeys that matter.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button asChild size="lg" className="bg-primary hover:bg-amber-600 text-white rounded-full text-xs uppercase tracking-[0.2em] h-14 px-10 font-black shadow-lg shadow-orange-500/25">
              <Link href="/tours">Plan Your Trip</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white hover:text-secondary rounded-full text-xs uppercase tracking-[0.2em] h-14 px-10 font-black bg-white/10 backdrop-blur-sm">
              <Link href="/tours">Explore Tanzania</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom-left tags like reference */}
      <div className="absolute bottom-8 left-6 md:left-10 z-20 flex items-center gap-3 text-white/70">
        <Compass className="h-4 w-4 text-primary" />
        <span className="text-[11px] font-semibold uppercase tracking-widest">Wildlife & Nature</span>
        <span className="text-white/30">|</span>
        <span className="text-[11px] font-semibold uppercase tracking-widest">Tanzania 360</span>
      </div>

      {/* Bottom-right scroll hint */}
      <div className="absolute bottom-8 right-6 md:right-10 z-20 hidden md:flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold rotate-90 origin-right translate-x-3">Scroll</span>
        <div className="h-12 w-px bg-white/30 mt-6" />
      </div>
    </section>
  );
}
