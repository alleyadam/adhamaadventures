import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';

export default function TransactionAdvisoryPage() {
  const serviceImage = PlaceHolderImages.find(img => img.id === 'transaction-advisory-image');

  return (
    <div className="bg-background">
      <PageHeader
        title="Transaction Advisory"
        subtitle="Maximizing value in every deal."
      />
      <div className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="space-y-6 text-muted-foreground">
            <p>
              Rayaan Sukuk Takaful Services offers comprehensive support for all your transaction needs. Our services cover mergers, acquisitions, divestitures, and financial restructuring. We provide thorough due diligence, accurate valuation, and strategic negotiation support to ensure you achieve the best possible outcomes.
            </p>
            <p>
              Our experienced team guides you through the entire transaction lifecycle, from initial analysis to post-deal integration. We focus on maximizing value and minimizing risk, ensuring that every deal aligns with your long-term strategic objectives and ethical standards.
            </p>
             <div className="mt-8">
                <Button asChild size="lg">
                    <Link href="/contact">Plan Your Transaction</Link>
                </Button>
            </div>
          </div>
          <div>
            {serviceImage && (
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg mb-8 md:mb-0">
                <Image
                  src={serviceImage.imageUrl}
                  alt="Transaction Advisory"
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
