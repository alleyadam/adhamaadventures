'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const STEPS = [
  {
    id: 'month',
    title: 'WHEN ARE YOU TRAVELLING?',
    options: ['Jan-Mar', 'Apr-Jun', 'Jul-Sep', 'Oct-Dec']
  },
  {
    id: 'duration',
    title: 'HOW LONG?',
    options: ['2–4 days', '5–7 days', '8–14 days', '15+ days']
  },
  {
    id: 'travellers',
    title: 'WHO ARE YOU TRAVELLING WITH?',
    options: ['Couple', 'Family', 'Friends', 'Solo', 'Group']
  },
  {
    id: 'experience',
    title: 'WHAT DO YOU WANT TO EXPERIENCE?',
    options: ['Wildlife', 'Migration', 'Kilimanjaro', 'Culture', 'Beach', 'Luxury']
  }
];

export default function SafariFinder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});

  const handleSelect = (option: string) => {
    setSelections({ ...selections, [STEPS[currentStep].id]: option });
    if (currentStep < STEPS.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setCurrentStep(STEPS.length);
    }
  };

  return (
    <section className="py-32 bg-[#FAF9F5] border-y border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="editorial-label">SAFARI FINDER</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">Let's design your Tanzania.</h2>
          </div>

          <div className="bg-white border border-border/50 p-8 md:p-20 relative overflow-hidden">
            {currentStep < STEPS.length ? (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex justify-between items-center text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">
                  <span>Step {currentStep + 1} of {STEPS.length}</span>
                  <span>{STEPS[currentStep].id}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif italic text-foreground text-center">
                  {STEPS[currentStep].title}
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {STEPS[currentStep].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      className={cn(
                        "h-16 border transition-all duration-300 text-[11px] font-bold tracking-widest uppercase",
                        selections[STEPS[currentStep].id] === option
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-white text-foreground border-border hover:border-primary hover:text-primary"
                      )}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {currentStep > 0 && (
                  <button 
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    ← BACK
                  </button>
                )}
              </div>
            ) : (
              <div className="text-center space-y-8 animate-in zoom-in-95 duration-700">
                <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-serif italic text-foreground">Your journey is taking shape.</h3>
                <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                  Based on your preferences, our specialists are ready to craft a tailor-made proposal for your dream Tanzanian experience.
                </p>
                <div className="pt-6">
                  <Button asChild className="rounded-none h-16 px-12 bg-primary text-primary-foreground text-[10px] tracking-[0.2em] font-bold hover:bg-secondary">
                    <a href="/contact">START PLANNING</a>
                  </Button>
                </div>
                <button 
                  onClick={() => {
                    setSelections({});
                    setCurrentStep(0);
                  }}
                  className="block mx-auto text-[10px] font-bold tracking-widest uppercase text-muted-foreground hover:text-primary pt-4"
                >
                  START AGAIN
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}