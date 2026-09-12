
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ChevronRight, Leaf, Users, ShieldCheck, Heart, GraduationCap, Landmark } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const ecoPackages = [
  { title: "Community & Wildlife Bush Safari", duration: "7 Days", icon: Users },
  { title: "Deep Cultural Immersion Tour", duration: "5 Days", icon: Heart },
  { title: "Conservation Safari Experience", duration: "8 Days", icon: Leaf },
  { title: "Church & Faith Mission Tour", duration: "10 Days", icon: ShieldCheck },
  { title: "School Discovery Expedition", duration: "7 Days", icon: GraduationCap },
  { title: "Elders' Safari & Heritage Journey", duration: "6 Days", icon: Landmark },
];

export default function EcoTourismPage() {
  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Breadcrumb & Title Section */}
      <div className="bg-secondary text-white pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-primary mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span>Eco-Tourism Safaris</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
            Eco-Tourism Safaris
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-16 md:py-24">
        <div className="max-w-4xl mb-16 space-y-6">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our ecotourism safaris blend the thrill of world-class wildlife viewing with meaningful community engagement, ensuring your adventure actively supports the ecosystems and people you visit. Every package includes park fees, eco-lodge accommodations, professional guiding, and community donations.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {ecoPackages.map((pkg, i) => (
            <Card key={i} className="group border-none shadow-xl rounded-[1.5rem] overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
              <CardHeader className="bg-muted/30 p-8 flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-white text-primary shadow-sm group-hover:scale-110 transition-transform">
                  <pkg.icon className="h-8 w-8" />
                </div>
                <div>
                    <CardTitle className="text-xl font-black text-secondary leading-tight uppercase tracking-tight">{pkg.title}</CardTitle>
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mt-2">{pkg.duration}</p>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-sm text-muted-foreground leading-relaxed text-center italic">
                   Experience a transformative journey designed to connect you deeply with {pkg.title.toLowerCase()} in Tanzania.
                </p>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button asChild className="w-full bg-secondary hover:bg-primary text-white rounded-full h-12 text-xs font-black uppercase tracking-widest transition-colors shadow-lg shadow-secondary/10">
                    <Link href="/contact">Inquire Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Regional Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
            <div className="relative organic-frame overflow-hidden h-[400px] group shadow-2xl">
                <Image 
                  src="/images/adhama-old/tanzania-camping-safari-1.webp" 
                  alt="Ruaha & Southern Highlands" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  data-ai-hint="tanzania wilderness"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">Ruaha & Southern Highlands</h3>
                    <p className="text-white/80 mt-2 text-sm leading-relaxed">Untamed wilderness and off-the-beaten-path conservation adventures.</p>
                </div>
            </div>
            <div className="relative organic-frame-alt overflow-hidden h-[400px] group shadow-2xl">
                <Image 
                  src="/images/adhama-old/swahili-coast.webp" 
                  alt="Dar es Salaam & Coast" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  data-ai-hint="tanzania coast"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">Dar es Salaam & Coast</h3>
                    <p className="text-white/80 mt-2 text-sm leading-relaxed">Coastal heritage, marine conservation, and vibrant urban culture.</p>
                </div>
            </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-secondary text-white p-12 md:p-20 organic-frame text-center space-y-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              Ready for a <span className="text-primary italic">Responsible</span> Adventure?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Ready to Visit Africa's Top Destinations? Join us for an adventure that actively supports the ecosystems and people you visit.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full h-16 px-12 font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
              <Link href="/tours">EXPLORE WITH US</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-secondary rounded-full h-16 px-12 font-black uppercase tracking-widest text-xs bg-white/5 backdrop-blur-sm transition-all hover:-translate-y-1">
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
