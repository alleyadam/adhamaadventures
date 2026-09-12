import PageHeader from '@/components/layout/PageHeader';
import { School, Home, HeartHandshake } from 'lucide-react';

export default function LocalPartnershipsPage() {
  return (
    <div className="bg-background">
      <PageHeader
        title="Local Partnerships"
        subtitle="Empowering 45+ communities across Tanzania through sustainable collaboration."
      />
      <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
        <div className="space-y-16">
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <div className="flex items-center gap-3 text-primary">
                <School className="h-6 w-6" />
                <h2 className="text-2xl font-black uppercase tracking-widest">Education Support</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We partner with 22 schools to fund classroom construction, teacher salaries, and student scholarships. By traveling with us, you are directly investing in the future of Tanzania's youth.
              </p>
            </div>
            <div className="rounded-2xl bg-muted h-[300px] order-1 md:order-2 flex items-center justify-center border-2 border-dashed">
                <span className="text-muted-foreground italic">School Partnership Photo Gallery</span>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl bg-muted h-[300px] flex items-center justify-center border-2 border-dashed">
                <span className="text-muted-foreground italic">Community Workshop Photo Gallery</span>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Home className="h-6 w-6" />
                <h2 className="text-2xl font-black uppercase tracking-widest">Village Empowerment</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our "Community First Always" ethos ensures that all revenue from cultural programs goes directly to local families. We facilitate unscripted global connections that create direct economic lifelines.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
