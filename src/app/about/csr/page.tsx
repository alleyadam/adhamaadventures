import PageHeader from '@/components/layout/PageHeader';
import { TreePine, GraduationCap, Heart, Sprout } from 'lucide-react';

export default function CSRPage() {
  const impacts = [
    { icon: TreePine, label: "Trees Planted", value: "50,000+", desc: "Restoring deforested landscapes and wildlife corridors." },
    { icon: GraduationCap, label: "Schools Funded", value: "22", desc: "Supporting infrastructure and scholarship programs." },
    { icon: Heart, label: "Local Income", value: "100%", desc: "Of cultural revenue stays within the host community." },
    { icon: Sprout, label: "Eco-Focus", value: "Low Impact", desc: "Operating safaris with the smallest possible footprint." },
  ];

  return (
    <div className="bg-background">
      <PageHeader
        title="Corporate Social Responsibility"
        subtitle="Our commitment to people, planet, and prosperity."
      />
      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
            <h2 className="text-4xl font-black text-secondary tracking-tighter italic text-primary">A Responsibility, Not an Option.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Adhama Adventures, CSR is baked into our business model. We don't just donate a percentage; we build our entire operational structure around the well-being of the land and its stewards.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((stat, i) => (
            <div key={i} className="p-8 bg-secondary text-white rounded-2xl space-y-4 border border-white/10 hover:border-primary/50 transition-colors">
              <stat.icon className="h-8 w-8 text-primary" />
              <div>
                <p className="text-3xl font-black">{stat.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary italic mb-2">{stat.label}</p>
                <p className="text-sm opacity-70">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-muted/30 rounded-3xl border text-center">
            <p className="text-muted-foreground italic max-w-2xl mx-auto">
              "We operate on a Community First Always ethos, ensuring your visit leaves a lasting, positive impact from the United Kingdom to Australia and everywhere in between."
            </p>
        </div>
      </div>
    </div>
  );
}
