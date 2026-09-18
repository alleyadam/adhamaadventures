
'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight, Leaf, Recycle, Users, HandCoins, TreePine, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useFirestore, useDoc } from '@/firebase';
import { doc } from 'firebase/firestore';

export default function SustainabilityPage() {
  const db = useFirestore();
  const { data: config, loading } = useDoc<any>(doc(db, 'settings', 'sustainability'));

  const staticMetrics = [
    { id: 'carbon', label: "Carbon Offset Rate", icon: Leaf, fallback: 78 },
    { id: 'plastic', label: "Plastic-Free Operations", icon: Recycle, fallback: 92 },
    { id: 'local', label: "Local Employment Rate", icon: Users, fallback: 96 },
    { id: 'trees', label: "Trees Planted", icon: TreePine, fallback: 50000 },
    { id: 'energy', label: "Community Revenue Share", icon: HandCoins, fallback: 89 },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Breadcrumb / Title Section */}
      <div className="bg-secondary text-white pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-primary mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span>Sustainability</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
            Sustainability
          </h1>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* Intro & metrics grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-secondary tracking-tighter leading-tight italic">
                {config?.content?.title || 'Our commitment to a living planet is unwavering.'}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {config?.content?.body || 'We treat the environment with the utmost reverence, designing our operations to leave no negative trace while actively restoring degraded ecosystems.'}
              </p>
            </div>

            <div className="bg-primary/5 p-8 rounded-none border border-primary/10 space-y-6">
              <h3 className="text-xl font-bold text-secondary flex items-center gap-3 italic">
                <div className="p-2 bg-primary text-white rounded-none">
                  <TreePine className="h-5 w-5" />
                </div>
                Flagship Conservation Projects
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-bold text-secondary uppercase text-xs tracking-widest">"Green Tanzania" Initiative</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A portion of every single booking funds the planting of indigenous trees to restore vital wildlife corridors and fight local deforestation.
                  </p>
                </div>
                <div className="space-y-2 pt-2">
                  <h4 className="font-bold text-secondary uppercase text-xs tracking-widest">Zero-Plastic Safari Program</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We operate a strict single-use plastic ban across all operations. All guests are provided with high-grade reusable stainless-steel water bottles.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground italic text-sm border-l-4 border-primary pl-4">
              {config?.content?.footerQuote || '"We proudly publish an annual sustainability report detailing our exact contributions to the UN SDGs."'}
            </p>
          </div>

          <div className="space-y-10">
            <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-primary italic">Live Performance Dashboard</h3>
              <p className="text-2xl font-black text-secondary tracking-tight">Real-time Impact Metrics</p>
            </div>
            
            {loading ? (
               <div className="flex justify-center py-10"><Loader2 className="h-10 w-10 animate-spin text-primary" /></div>
            ) : (
              <div className="space-y-8">
                {staticMetrics.map((m, i) => {
                  const val = config?.metrics?.[m.id] ?? m.fallback;
                  return (
                    <div key={i} className="space-y-3 group">
                      <div className="flex justify-between items-end">
                        <div className="flex items-center gap-3">
                          <m.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                          <span className="text-sm font-bold uppercase tracking-tight text-secondary">{m.label}</span>
                        </div>
                        <span className="text-2xl font-black text-primary leading-none">{val}{m.id === 'trees' ? '' : '%'}</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-none overflow-hidden shadow-inner border border-muted-foreground/10">
                        <div 
                          className="h-full bg-primary transition-all duration-1000 ease-out group-hover:brightness-110" 
                          style={{ width: `${m.id === 'trees' ? (val / 100000) * 100 : val}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-secondary text-white p-12 md:p-20 rounded-none text-center space-y-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              Ready for a <span className="text-primary italic">Responsible</span> Adventure?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Choose a journey that honors the land and its people. Your visit leaves a positive, verifiable footprint on the heart of Tanzania.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none h-16 px-12 font-black uppercase tracking-widest text-xs">
              <Link href="/tours">EXPLORE WITH US</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-secondary rounded-none h-16 px-12 font-black uppercase tracking-widest text-xs bg-white/5 backdrop-blur-sm">
              <Link href="/contact">Inquire Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
