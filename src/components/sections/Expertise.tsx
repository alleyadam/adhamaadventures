import React from 'react';
import { ShieldCheck, Map, Users, Heart } from 'lucide-react';

const PILLARS = [
  {
    icon: Map,
    title: 'Local Knowledge',
    description: 'Tanzania is not just a destination for us. It is home. We know the secret routes and the best times beyond the usual paths.'
  },
  {
    icon: Users,
    title: 'Tailor-Made Journeys',
    description: 'Every traveler is unique. We build the trip around your specific interests, pace, and priorities.'
  },
  {
    icon: Heart,
    title: 'Authentic Experiences',
    description: 'Go beyond the standard tourist route to meet real families and experience true immersion in the Tanzanian way of life.'
  },
  {
    icon: ShieldCheck,
    title: 'Responsible Travel',
    description: 'Connect tourism with conservation and communities, ensuring your visit leaves a verifiable positive footprint.'
  }
];

export default function Expertise() {
  return (
    <section className="section-padding bg-[#EFE5D8]/30 border-y border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20 space-y-6">
          <span className="editorial-label">EXPERT POSITIONING</span>
          <h2 className="editorial-heading">
            Why the right safari<br />company matters.
          </h2>
          <p className="text-xl text-muted-foreground font-serif italic max-w-2xl leading-relaxed">
            Choosing the right operator changes the quality of your journey. We are locally rooted, conservation minded, and globally professional.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {PILLARS.map((pillar, idx) => (
            <div key={idx} className="space-y-6 group">
              <div className="w-12 h-[1px] bg-secondary group-hover:w-20 transition-all duration-500" />
              <h3 className="text-lg font-bold uppercase tracking-widest text-primary leading-tight">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
