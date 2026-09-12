
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronRight, Home, Users, Heart, ClipboardCheck, Info, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomestaysPage() {
  const steps = [
    { title: "Choose Environment", desc: "First, you choose your preferred community environment (Village, Mountain, or Coast)." },
    { title: "Vetted Matching", desc: "Second, we match you with a thoroughly vetted host family that aligns with your profile." },
    { title: "Cultural Briefing", desc: "Third, you receive a comprehensive pre-trip cultural briefing to prepare for your immersion." },
    { title: "Authentic Stay", desc: "Fourth, you enjoy your stay, participating in daily life as an honored family member." },
    { title: "Mutual Feedback", desc: "Finally, we conduct a post-visit feedback session with both you and the community." },
  ];

  const profiles = [
    { name: "Maasai Village Homestay", location: "Monduli", image: "/images/adhama-old/maasai-attire.webp" },
    { name: "Kilimanjaro Coffee Farming Family", location: "Moshi", image: "/images/adhama-old/kilimanjaro-umbwe.webp" },
    { name: "Zanzibar Fishermen's Community", location: "Stone Town", image: "/images/adhama-old/swahili-coast.webp" },
  ];

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Breadcrumb & Title Section */}
      <div className="bg-secondary text-white pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-primary mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/inspiration" className="hover:text-white transition-colors">Inspiration</Link>
            <ChevronRight className="h-3 w-3" />
            <span>Homestays Experience</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
            Tanzania Homestays
          </h1>
          <p className="text-primary font-bold italic tracking-tight mt-2 text-xl">"Live Like a Local, Leave Like Family"</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-secondary tracking-tighter leading-tight">
              An Unfiltered Perspective on African Life.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Living with vetted host families in rural Tanzanian villages provides an unfiltered, profoundly moving perspective on African life. Step away from the luxury lodges and into the heart of a community where friendships are forged over shared meals and unscripted stories.
            </p>
            <div className="flex items-start gap-4 bg-muted/30 p-6 rounded-2xl border border-secondary/5">
                <Info className="h-6 w-6 text-primary shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                    "Pricing is available for single nights, up to extended multi-week stays for those seeking deep immersion or volunteer opportunities."
                </p>
            </div>
          </div>
          <div className="relative organic-frame overflow-hidden shadow-2xl h-[400px] border-8 border-white">
            <Image 
              src="/images/adhama-old/maasai-attire.webp" 
              alt="Adhama Homestay" 
              fill 
              className="object-cover" 
              data-ai-hint="tanzania family home"
            />
          </div>
        </div>

        {/* How it Works Section */}
        <div className="mb-24">
            <div className="text-center mb-12 space-y-2">
                <h3 className="text-2xl font-black text-secondary uppercase tracking-tight">How it Works</h3>
                <div className="w-12 h-1 bg-primary mx-auto" />
            </div>
            <div className="grid md:grid-cols-5 gap-6">
                {steps.map((step, i) => (
                    <div key={i} className="space-y-4 text-center group">
                        <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-black text-xl mx-auto group-hover:bg-primary transition-colors">
                            {i + 1}
                        </div>
                        <h4 className="font-bold text-secondary text-sm uppercase tracking-wider">{step.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* What to Expect Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
            <div className="space-y-8 bg-secondary text-white p-12 organic-frame-alt">
                <h3 className="text-3xl font-black uppercase tracking-tighter text-primary italic">What to Expect</h3>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <Users className="h-6 w-6 text-primary shrink-0" />
                        <p className="text-sm leading-relaxed">You will be welcomed as an <span className="text-primary font-bold">honored member</span> of the family from the moment you arrive.</p>
                    </div>
                    <div className="flex gap-4">
                        <Home className="h-6 w-6 text-primary shrink-0" />
                        <p className="text-sm leading-relaxed">Accommodations are traditional, clean, and safe, featuring private sleeping quarters and basic amenities.</p>
                    </div>
                    <div className="flex gap-4">
                        <Heart className="h-6 w-6 text-primary shrink-0" />
                        <p className="text-sm leading-relaxed">Meals are shared communal experiences, featuring locally grown, <span className="text-primary font-bold">organic produce</span> prepared traditionally.</p>
                    </div>
                    <div className="flex gap-4">
                        <ClipboardCheck className="h-6 w-6 text-primary shrink-0" />
                        <p className="text-sm leading-relaxed">You are encouraged to participate in daily chores from milking cattle to fetching water, fostering a genuine cultural exchange.</p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="text-2xl font-black text-secondary uppercase tracking-tight">Our Host Profiles</h3>
                <div className="grid gap-4">
                    {profiles.map((profile, i) => (
                        <Card key={i} className="border-none bg-muted/20 hover:bg-primary/5 transition-colors overflow-hidden flex items-center">
                            <div className="w-24 h-24 relative shrink-0">
                                <Image src={profile.image} alt={profile.name} fill className="object-cover" />
                            </div>
                            <div className="p-6">
                                <h4 className="font-bold text-secondary leading-tight">{profile.name}</h4>
                                <div className="flex items-center gap-1 text-[10px] text-primary font-black uppercase tracking-widest mt-1">
                                    <MapPin className="h-3 w-3" /> {profile.location}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-secondary text-white p-12 md:p-20 organic-frame text-center space-y-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              Ready to <span className="text-primary italic">Connect</span> Truly?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Experience the heartbeat of Tanzania by living with the people who call it home. Ready to visit Africa's top destinations?
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full h-16 px-12 font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
              <Link href="/contact">Inquire for Homestay</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-secondary rounded-full h-16 px-12 font-black uppercase tracking-widest text-xs bg-white/5 backdrop-blur-sm transition-all hover:-translate-y-1">
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
