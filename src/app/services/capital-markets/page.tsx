import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';

export default function CapitalMarketsPage() {
  const serviceImage = PlaceHolderImages.find(img => img.id === 'capital-markets-image');

  return (
    <div className="bg-background">
      <PageHeader
        title="Capital Markets"
        subtitle="Unlocking growth through strategic financing."
      />
      <div className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="space-y-6 text-muted-foreground">
            <p>
              Navigate the complexities of capital markets with our expert insights and advisory for equity and debt financing. We assist businesses in raising capital through Sharia-compliant instruments, including IPOs and the issuance of Sukuk (Islamic bonds).
            </p>
            <p>
              Our end-to-end support covers everything from structuring the transaction and preparing documentation to marketing the issuance to investors. We help you access the capital needed to fund growth, expansion, and innovation while adhering to ethical financial principles.
            </p>
             <div className="mt-8">
                <Button asChild size="lg">
                    <Link href="/contact">Raise Capital</Link>
                </Button>
            </div>
          </div>
          <div>
            {serviceImage && (
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg mb-8 md:mb-0">
                <Image
                  src={serviceImage.imageUrl}
                  alt="Capital Markets"
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
