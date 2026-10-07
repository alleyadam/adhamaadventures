
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">Ready for an Adventure?</h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Join thousands of happy travelers and start planning your bespoke African experience today.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" variant="secondary" className="px-10 text-lg">
            <Link href="/contact">Inquire Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
