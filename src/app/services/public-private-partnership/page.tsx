import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';

export default function PublicPrivatePartnershipPage() {
  const serviceImage = PlaceHolderImages.find(img => img.id === 'ppp-image');

  return (
    <div className="bg-background">
      <PageHeader
        title="Public Private Partnership"
        subtitle="Building a better future through collaboration."
      />
      <div className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="space-y-6 text-muted-foreground">
            <p>
              Rayaan Sukuk Takaful Services provides expert advisory services to facilitate successful and sustainable Public Private Partnerships (PPPs). We specialize in structuring and managing projects that deliver both social value and financial returns, bridging the gap between government objectives and private enterprise.
            </p>
            <p>
              Our team has extensive experience in project finance, risk management, and contract negotiation for PPPs across various sectors. We work closely with public agencies and private investors to create partnerships that drive innovation and foster long-term community development.
            </p>
             <div className="mt-8">
                <Button asChild size="lg">
                    <Link href="/contact">Discuss a Project</Link>
                </Button>
            </div>
          </div>
          <div>
            {serviceImage && (
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg mb-8 md:mb-0">
                <Image
                  src={serviceImage.imageUrl}
                  alt="Public Private Partnership"
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
