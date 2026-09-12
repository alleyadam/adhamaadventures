import { ShieldCheck, Map, Clock, Heart, Users, Compass, Sprout, Building2 } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Exclusive Private Safaris',
    description: 'Bespoke itineraries tailored for individual explorers, institutions, and groups.'
  },
  {
    icon: Users,
    title: 'Connecting With People',
    description: 'Moving beyond staged tourist traps to introduce you to real families and stories.'
  },
  {
    icon: Compass,
    title: 'Responsible Tanzania Safaris',
    description: 'Every trip contributes directly to conservation and community empowerment.'
  },
  {
    icon: Sprout,
    title: 'Active Travelers Safaris',
    description: 'Engaging, low-impact adventures designed for transformational experiences.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white border-y">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h3 className="text-primary font-black uppercase tracking-widest text-xs italic">Authentic Connections</h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-secondary">Why Choose Adhama?</h2>
          <p className="text-muted-foreground text-lg">We operate on a “Community First Always” ethos; ensuring your visit leaves a lasting, positive impact.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 bg-muted/10 rounded-2xl shadow-sm border border-secondary/5 space-y-4 text-center hover:bg-primary/5 transition-colors group">
              <div className="inline-flex p-4 rounded-full bg-white text-primary shadow-sm group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-black text-secondary leading-tight">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
