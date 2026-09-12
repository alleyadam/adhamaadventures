import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-data';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-safari');

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover scale-105 animate-pulse-slow"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/50 to-transparent" />
      <div className="relative z-10 flex h-full items-center container mx-auto px-4">
        <div className="max-w-3xl space-y-8 text-left">
          <div className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-primary font-bold text-xs uppercase tracking-widest mb-4">
            Authentic Tanzania Experiences
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.0] tracking-tighter">
            Experience the <span className="text-primary italic">Grandeur</span> of Africa
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
            From the endless plains of the Serengeti to the traditional homesteads of the Maasai, we curate journeys that bridge the gap between global explorers and vibrant local communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none text-sm uppercase tracking-widest h-16 px-12 font-black">
              <Link href="/tours">EXPLORE WITH US</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary rounded-none text-sm uppercase tracking-widest h-16 px-12 font-black bg-transparent">
              <Link href="/contact">INQUIRE NOW</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-10 flex items-center gap-4 text-white/50">
        <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest font-bold rotate-90 origin-left translate-x-2 mb-12">Discover More</span>
            <div className="w-[1px] h-24 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}
