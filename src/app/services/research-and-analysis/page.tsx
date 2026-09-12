import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';

export default function ResearchAndAnalysisPage() {
  const serviceImage = PlaceHolderImages.find(img => img.id === 'research-analysis-image');

  return (
    <div className="bg-background">
      <PageHeader
        title="Research and Analysis"
        subtitle="Empowering decisions with data-driven insights."
      />
      <div className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="space-y-6 text-muted-foreground">
            <p>
              Our in-depth market research and analysis empower your financial decisions. We provide timely reports, financial modeling, economic forecasting, and industry analysis to help you stay ahead of market trends and identify new opportunities.
            </p>
            <p>
              Whether you need to assess a potential investment, understand competitive landscapes, or track economic indicators, our research team delivers the critical intelligence you need. We combine rigorous analysis with a focus on ethical and Sharia-compliant considerations.
            </p>
             <div className="mt-8">
                <Button asChild size="lg">
                    <Link href="/contact">Get Market Insights</Link>
                </Button>
            </div>
          </div>
          <div>
            {serviceImage && (
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg mb-8 md:mb-0">
                <Image
                  src={serviceImage.imageUrl}
                  alt="Research and Analysis"
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
