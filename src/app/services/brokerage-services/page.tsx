import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';

export default function BrokerageServicesPage() {
  const serviceImage = PlaceHolderImages.find(img => img.id === 'brokerage-services-image');

  return (
    <div className="bg-background">
      <PageHeader
        title="Brokerage Services"
        subtitle="Seamless and ethical trading and investment execution."
      />
      <div className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="space-y-6 text-muted-foreground">
            <p>
              Rayaan Sukuk Takaful Services offers seamless and efficient brokerage services for all your trading and investment needs. Our platform provides access to a wide range of markets, including equities and Sukuk, ensuring you can execute your investment strategy with confidence and ease.
            </p>
            <p>
              We are committed to ethical principles, ensuring that your investments are not only profitable but also compliant with your values. Our team provides dedicated support, market insights, and robust tools to help you navigate the financial markets effectively.
            </p>
             <div className="mt-8">
                <Button asChild size="lg">
                    <Link href="/book-appointment">Start Trading</Link>
                </Button>
            </div>
          </div>
          <div>
            {serviceImage && (
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg mb-8 md:mb-0">
                <Image
                  src={serviceImage.imageUrl}
                  alt="Brokerage Services"
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
