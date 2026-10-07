import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';

export default function TrainingAndEducationPage() {
  const serviceImage = PlaceHolderImages.find(img => img.id === 'training-and-education-image');

  return (
    <div className="bg-background">
      <PageHeader
        title="Training and Education"
        subtitle="Enhancing financial literacy for a brighter future."
      />
      <div className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="space-y-6 text-muted-foreground">
            <p>
              Enhance your financial literacy with our specialized training and educational programs. We offer workshops, seminars, and courses on Islamic finance, ethical investing, and wealth management, tailored for both individuals and organizations.
            </p>
            <p>
              Our goal is to empower our community with the knowledge and skills needed to make sound financial decisions. Our expert instructors provide practical, engaging, and insightful content to help you deepen your understanding of the financial world from an ethical perspective.
            </p>
             <div className="mt-8">
                <Button asChild size="lg">
                    <Link href="/contact">Inquire About Training</Link>
                </Button>
            </div>
          </div>
          <div>
            {serviceImage && (
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg mb-8 md:mb-0">
                <Image
                  src={serviceImage.imageUrl}
                  alt="Training and Education"
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
