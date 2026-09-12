import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';

export default function InvestmentAdvicePage() {
  const serviceImage = PlaceHolderImages.find(img => img.id === 'investment-advice-image');

  return (
    <div className="bg-background">
      <PageHeader
        title="Investment Advice"
        subtitle="Personalized strategies for long-term growth."
      />
      <div className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="space-y-6 text-muted-foreground">
            <p>
              At Rayaan Sukuk Takaful Services, we provide expert guidance to help you make informed investment decisions and achieve your financial goals. We believe in a personalized approach, creating strategies that are aligned with your risk tolerance, time horizon, and ethical values.
            </p>
            <p>
              Our focus is on long-term growth and Sharia-compliant opportunities. We analyze market trends and identify investments that not only promise strong returns but also adhere to principles of fairness and social responsibility. Whether you are a seasoned investor or just starting, we are here to guide you every step of the way.
            </p>
             <div className="mt-8">
                <Button asChild size="lg">
                    <Link href="/book-appointment">Get Started</Link>
                </Button>
            </div>
          </div>
          <div>
            {serviceImage && (
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg mb-8 md:mb-0">
                <Image
                  src={serviceImage.imageUrl}
                  alt="Investment Advice"
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
