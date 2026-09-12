import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';

export default function TakafulPage() {
  const serviceImage = PlaceHolderImages.find(img => img.id === 'takaful-image');

  return (
    <div className="bg-background">
      <PageHeader
        title="Takaful (Islamic Insurance)"
        subtitle="Protecting your future with shared responsibility."
      />
      <div className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="space-y-6 text-muted-foreground">
            <p>
              Discover Sharia-compliant insurance solutions designed to protect you and your assets. Takaful is based on the principles of mutual cooperation, shared responsibility, and community well-being, offering an ethical alternative to conventional insurance.
            </p>
            <p>
              We help you find Takaful products that cover your health, property, and business needs, providing peace of mind without compromising your faith. Our advisors will guide you through the options to ensure you have the right protection for your unique circumstances.
            </p>
             <div className="mt-8">
                <Button asChild size="lg">
                    <Link href="/book-appointment">Find a Plan</Link>
                </Button>
            </div>
          </div>
          <div>
            {serviceImage && (
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg mb-8 md:mb-0">
                <Image
                  src={serviceImage.imageUrl}
                  alt="Takaful"
                  fill
                  className="object-cover"
                  data-ai-hint={serviceImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
