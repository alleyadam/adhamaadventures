import React from 'react';

const STEPS = [
  { id: '01', title: "Tell us what you're dreaming about.", desc: 'Share your interests, preferred dates, and travel style with us.' },
  { id: '02', title: "Talk to a Tanzania travel expert.", desc: 'We’ll discuss your ideas and offer professional local insights.' },
  { id: '03', title: "We design your journey.", desc: 'A custom, day-by-day itinerary built exclusively for you.' },
  { id: '04', title: "Travel Tanzania with confidence.", desc: 'Enjoy seamless logistics and expert guidance every step of the way.' },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-[#F2EDE4]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
          <span className="editorial-label mx-auto">PLANNING PROCESS</span>
          <h2 className="editorial-heading">Start your story in 4 simple steps.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {STEPS.map((step, i) => (
            <div key={i} className="space-y-6 relative group">
              <div className="text-7xl font-serif text-accent/20 group-hover:text-accent/40 transition-colors duration-500">{step.id}</div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold uppercase tracking-widest text-primary leading-tight">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-8 w-16 h-[1px] bg-border/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
