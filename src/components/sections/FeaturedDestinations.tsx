
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-data';
import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    id: 'zanzibar',
    title: 'Zanzibar Island',
    description: 'Paradise beaches and historical Stone Town.',
    imageId: 'dest-zanzibar'
  },
  {
    id: 'serengeti',
    title: 'Serengeti National Park',
    description: 'The ultimate wildlife and migration experience.',
    imageId: 'hero-tourism'
  },
  {
    id: 'kilimanjaro',
    title: 'Mt. Kilimanjaro',
    description: 'Conquer the roof of Africa.',
    imageId: 'dest-kilimanjaro'
  }
];

export default function FeaturedDestinations() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Top Destinations</h2>
            <p className="text-muted-foreground text-lg">Hand-picked wonders for your next adventure.</p>
          </div>
          <Link href="/destinations" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:underline">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest) => {
            const img = PlaceHolderImages.find(i => i.id === dest.imageId);
            return (
              <Link href={`/destinations/${dest.id}`} key={dest.id} className="group">
                <Card className="overflow-hidden border-none shadow-lg transition-transform hover:-translate-y-2">
                  <div className="relative h-64 w-full">
                    {img && (
                      <Image 
                        src={img.imageUrl} 
                        alt={dest.title} 
                        fill 
                        className="object-cover transition-transform group-hover:scale-110"
                        data-ai-hint={img.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">{dest.title}</h3>
                      <p className="text-sm opacity-90">{dest.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
