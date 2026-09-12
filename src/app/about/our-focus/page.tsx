import PageHeader from '@/components/layout/PageHeader';
import { Target, Leaf, Users, ShieldCheck } from 'lucide-react';

export default function OurFocusPage() {
  const focuses = [
    { icon: Users, title: "Authentic Connections", desc: "Introducing travelers to real families, real stories, and real impact." },
    { icon: Leaf, title: "Sustainable Travel", desc: "Minimizing environmental footprints while maximizing local benefits." },
    { icon: ShieldCheck, title: "Ethical Operations", desc: "Transparent financial practices where revenue supports local growth." },
    { icon: Target, title: "Transformational Journeys", desc: "Curating experiences that leave both the traveler and the host forever changed." },
  ];

  return (
    <div className="bg-background">
      <PageHeader
        title="Our Focus"
        subtitle="Strategic alignment of adventure, ethics, and sustainability."
      />
      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focuses.map((f, i) => (
            <div key={i} className="p-8 border-none bg-muted/20 rounded-2xl space-y-4 hover:bg-primary/5 transition-colors group text-center">
              <div className="inline-flex p-4 rounded-full bg-white text-primary shadow-sm group-hover:scale-110 transition-transform">
                <f.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-black text-secondary uppercase tracking-tight">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-12 bg-secondary text-white rounded-3xl text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-black tracking-tighter">Beyond the "Big Five"</h2>
          <p className="text-lg opacity-80 leading-relaxed">
            While we love the majesty of our wildlife, our primary focus remains the human connection. We believe that true travel happens in the traditional homesteads of the Maasai and the kitchens of Arusha city.
          </p>
        </div>
      </div>
    </div>
  );
}
