
'use client';

import PageHeader from '@/components/layout/PageHeader';
import { 
  ChevronRight, 
  Heart, 
  Users, 
  Home, 
  Briefcase, 
  ShieldCheck, 
  Sparkles, 
  Globe, 
  Mountain, 
  Bird,
  Handshake,
  Landmark
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function LiveInTanzaniaPage() {
  const familyFeatures = [
    {
      icon: Users,
      title: "Community Integration",
      desc: "Join vibrant local and international communities who have chosen Tanzania as their new home."
    },
    {
      icon: Heart,
      title: "Cultural Connection",
      desc: "Learn our traditions, language, and way of life, so you feel truly at home from day one."
    },
    {
      icon: Home,
      title: "Lifestyle Support",
      desc: "From housing to daily living logistics, we help you adapt smoothly and joyfully to your new environment."
    }
  ];

  const growthOpportunities = [
    {
      icon: Landmark,
      title: "Investment Guidance",
      desc: "Explore opportunities in tourism, real estate, agriculture, and thriving local businesses."
    },
    {
      icon: ShieldCheck,
      title: "Citizenship Pathways",
      desc: "We provide support and information for those who wish to become full citizens of Tanzania."
    },
    {
      icon: Sparkles,
      title: "Legacy Building",
      desc: "Create a lasting impact by contributing to the growth of our communities and economy."
    }
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
            <span>Tanzania is waiting</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
            Tanzania is waiting
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-16 md:py-24">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-secondary tracking-tighter leading-tight uppercase italic text-primary">Welcome Home to Tanzania</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Adhama Africa Adventures, we open our arms to all who dream of living in Africa—especially here in Tanzania, the heart of East Africa. We believe that moving to Tanzania is more than a relocation; it is the beginning of a new bond, a new family, and a new way of life.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-secondary uppercase tracking-tight border-b-2 border-primary/20 pb-2 flex items-center gap-3">
                <Handshake className="h-6 w-6 text-primary" /> A New Family, A New Life
              </h3>
              <p className="text-muted-foreground">When you arrive, you are not alone. We welcome you as part of our extended family, guiding you through every step of settling in:</p>
              <div className="grid gap-6">
                {familyFeatures.map((f, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <f.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary text-sm uppercase tracking-widest">{f.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative h-[600px] organic-frame overflow-hidden shadow-2xl border-8 border-white group">
            <Image 
              src="/images/adhama-old/giraffe-wild-scaled.jpg" 
              alt="Welcome to Tanzania" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
              data-ai-hint="tanzania mountains"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2 italic">Karibu Nyumbani</p>
              <p className="text-2xl font-black leading-tight italic">"Where you're not just a resident, you're family."</p>
            </div>
          </div>
        </div>

        {/* Opportunities Section */}
        <div className="mb-24 bg-muted/20 p-12 rounded-[2rem] border border-secondary/5">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-black text-secondary uppercase tracking-tight">Opportunities to Grow</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Living in Tanzania is not just about enjoying the beauty of the land—it’s about building a future and contributing to a growing nation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {growthOpportunities.map((o, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all rounded-[1.5rem] overflow-hidden bg-white">
                <CardHeader className="p-8 pb-0">
                  <div className="w-12 h-12 bg-secondary text-white rounded-lg flex items-center justify-center mb-4">
                    <o.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-black uppercase tracking-tight">{o.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Life in Tanzania Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1 relative h-[450px] organic-frame-alt overflow-hidden shadow-2xl">
            <Image 
              src="/images/Mount Meru.jpeg" 
              alt="Life in Tanzania" 
              fill
              className="object-cover"
              data-ai-hint="tanzania lifestyle"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h3 className="text-3xl font-black text-secondary uppercase tracking-tight">Life in Tanzania</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Imagine waking up to the sound of birds, the sight of Mountains, and the warmth of a welcoming community. Here, you will:
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Mountain className="h-6 w-6 text-primary shrink-0" />
                <p className="text-muted-foreground font-medium italic">Enjoy breathtaking landscapes and natural wonders every single day.</p>
              </li>
              <li className="flex gap-4">
                <Users className="h-6 w-6 text-primary shrink-0" />
                <p className="text-muted-foreground font-medium italic">Experience the deep-rooted joy of Tanzanian hospitality and communal living.</p>
              </li>
              <li className="flex gap-4">
                <Bird className="h-6 w-6 text-primary shrink-0" />
                <p className="text-muted-foreground font-medium italic">Live a balanced life surrounded by culture, nature, and boundless opportunity.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-secondary text-white p-12 md:p-20 organic-frame text-center space-y-10 shadow-2xl relative overflow-hidden border-4 border-primary/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -ml-48 -mb-48" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              Your <span className="text-primary italic">Journey</span> Starts Here
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you come alone, with family, or with dreams of investing, Adhama Africa Adventures is here to walk beside you. Together, we will help you find your place, build connections, and celebrate life in Africa.
            </p>
            <p className="text-primary font-black uppercase tracking-widest text-xl italic">Tanzania is waiting to welcome you home.</p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full h-16 px-12 font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
              <Link href="/contact">Inquire for Relocation</Link>
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
