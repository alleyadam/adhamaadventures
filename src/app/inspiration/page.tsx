import PageHeader from '@/components/layout/PageHeader';
import { Leaf, Home, GraduationCap, Compass, Lightbulb, Heart } from 'lucide-react';

const categories = [
  { icon: Leaf, title: "Eco-Tourism Safaris", desc: "Low-impact adventures focused on conservation and sustainability." },
  { icon: Home, title: "Homestays Experience", desc: "Live with local families and experience the authentic Tanzanian way of life." },
  { icon: GraduationCap, title: "Students Tour", desc: "Educational journeys designed for schools and learning institutions." },
  { icon: Compass, title: "Core Activities", desc: "The heartbeat of our tours, from game drives to cultural workshops." },
  { icon: Lightbulb, title: "Inspiration Experiences", desc: "Moments that spark wonder and transform your worldview." },
  { icon: Heart, title: "Come and Live in Tanzania", desc: "Long-term immersion for those looking to call Tanzania home." },
];

export default function InspirationPage() {
  return (
    <div className="bg-background">
      <PageHeader
        title="Travel Inspiration"
        subtitle="Unscripted global connections and transformational journeys."
      />
      <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="group p-8 bg-muted/20 rounded-2xl border border-secondary/5 hover:border-primary/30 transition-all flex flex-col items-center text-center space-y-4 shadow-sm hover:shadow-md">
              <div className="p-4 rounded-full bg-white text-primary group-hover:scale-110 transition-transform shadow-sm">
                <cat.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-black text-secondary uppercase tracking-tight">{cat.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-secondary text-white rounded-3xl text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-black tracking-tighter">Beyond a Simple Visit</h2>
          <p className="text-lg opacity-80 leading-relaxed italic">
            "Experience inspiration that goes beyond the classroom and the safari vehicle. We bridge the gap between global explorers and vibrant local communities."
          </p>
        </div>
      </div>
    </div>
  );
}
