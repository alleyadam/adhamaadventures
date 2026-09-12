
'use client';

import PageHeader from '@/components/layout/PageHeader';
import { 
  ChevronRight, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Globe, 
  Handshake, 
  ShieldCheck, 
  History, 
  Heart,
  CheckCircle2,
  TreePine,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function StudentsTourPage() {
  const levels = [
    {
      title: "Introductory Programs",
      level: "High school or early university",
      desc: "Learn the basics of Tanzanian culture, language, and community life. Perfect for a first-time immersion experience."
    },
    {
      title: "Intermediate Programs",
      level: "Prior travel or academic experience",
      desc: "Dive deeper into community projects, conservation efforts, and structured cultural exchange."
    },
    {
      title: "Advanced Programs",
      level: "Graduate students or research groups",
      desc: "Collaborate with local organizations on sustainable tourism, development, and heritage preservation."
    }
  ];

  const cbtFeatures = [
    { 
      icon: Heart, 
      title: "Cultural Immersion", 
      desc: "Participate in daily life — cooking, farming, and traditional crafts." 
    },
    { 
      icon: Handshake, 
      title: "Service Learning", 
      desc: "Contribute to community projects such as education, conservation, or small business development." 
    },
    { 
      icon: Globe, 
      title: "Knowledge Exchange", 
      desc: "Share skills while learning from elders, guides, and artisans." 
    },
    { 
      icon: TreePine, 
      title: "Sustainable Tourism Practices", 
      desc: "Understand how tourism can empower communities while protecting culture and environment." 
    }
  ];

  const outcomes = [
    "A deeper appreciation of cultural diversity.",
    "Practical knowledge of sustainable tourism and community development.",
    "Enhanced teamwork, leadership, and cross-cultural communication skills.",
    "A sense of global responsibility and connection."
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
            <span>Students Tour</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
            Students Tour
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-16 md:py-24">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="space-y-4">
                <h2 className="text-4xl font-black text-secondary tracking-tighter leading-tight uppercase italic text-primary">Tanzania as Your Classroom</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Adhama Africa Adventures, we believe the best education happens beyond the walls of a classroom. Tanzania offers a living laboratory where students of all levels can learn through direct engagement with communities, culture, and nature.
                </p>
            </div>
            
            <div className="space-y-6">
                <h3 className="text-2xl font-black text-secondary uppercase tracking-tight">Programs Tailored to Every Student</h3>
                <p className="text-muted-foreground">We design experiences that match different levels of student knowledge and curiosity:</p>
                <div className="grid gap-4">
                    {levels.map((lvl, i) => (
                        <div key={i} className="flex gap-4 p-6 bg-muted/30 rounded-2xl border border-secondary/5 group hover:border-primary/30 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm font-black text-primary">
                                {i + 1}
                            </div>
                            <div>
                                <h4 className="font-bold text-secondary text-sm uppercase tracking-widest">{lvl.title}</h4>
                                <p className="text-[10px] font-black text-primary uppercase mt-0.5">{lvl.level}</p>
                                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{lvl.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
          <div className="relative h-[600px] organic-frame overflow-hidden shadow-2xl border-8 border-white group">
            <Image
              src="/images/adhama-old/children-visit.webp" 
              alt="Students in Tanzania" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
              data-ai-hint="tanzania classroom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2 italic">Global Citizenship</p>
                <p className="text-2xl font-black leading-tight">Learn, Serve, and Grow With Us.</p>
            </div>
          </div>
        </div>

        {/* CBT as Learning Tool */}
        <div className="mb-24 space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-black text-secondary uppercase tracking-tight">Community-Based Tourism as a Learning Tool</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto italic">
                    Our programs focus on Community-Based Tourism (CBT), where students learn by living and working alongside local communities.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {cbtFeatures.map((f, i) => (
                    <div key={i} className="p-8 bg-secondary text-white rounded-[1.5rem] space-y-4 text-center border border-white/10 hover:border-primary/50 transition-colors">
                        <f.icon className="h-8 w-8 text-primary mx-auto" />
                        <h3 className="text-lg font-black uppercase tracking-tight leading-tight">{f.title}</h3>
                        <p className="text-xs opacity-70 leading-relaxed">{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Outcomes & Why Us */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
            <Card className="border-none shadow-2xl overflow-hidden organic-frame-alt">
                <CardHeader className="bg-primary text-white p-10">
                    <CardTitle className="text-2xl font-black uppercase tracking-widest italic flex items-center gap-3">
                        <Sparkles className="h-6 w-6" /> Learning Outcomes
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-10 space-y-6">
                    {outcomes.map((item, i) => (
                        <div key={i} className="flex gap-4">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <p className="text-sm font-medium text-muted-foreground">{item}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <div className="space-y-10 p-4">
                <h3 className="text-3xl font-black text-secondary uppercase tracking-tighter">Why Choose Adhama Africa Adventures?</h3>
                <div className="space-y-8">
                    <div className="flex gap-6">
                        <div className="p-4 bg-primary/10 rounded-2xl h-fit">
                            <Handshake className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-black text-secondary uppercase tracking-widest text-sm">Trusted Local Partner</h4>
                            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">We are rooted in Tanzanian communities and act as a bridge between students and hosts, ensuring authentic and safe interactions.</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="p-4 bg-primary/10 rounded-2xl h-fit">
                            <ShieldCheck className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-black text-secondary uppercase tracking-widest text-sm">Safe & Structured Programs</h4>
                            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Tailored itineraries with clear learning objectives and a focus on safety, security, and student well-being at every step.</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="p-4 bg-primary/10 rounded-2xl h-fit">
                            <History className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-black text-secondary uppercase tracking-widest text-sm">Legacy Building</h4>
                            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Students contribute to projects that leave lasting impact, building a legacy that supports communities for years to come.</p>
                        </div>
                    </div>
                </div>
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
                Whether you are a high school group, university class, or research team, Adhama Africa Adventures will design a program that transforms Tanzania into your classroom.
            </p>
            <p className="text-primary font-black uppercase tracking-widest text-xl italic">Come learn, serve, and grow with us.</p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full h-16 px-12 font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
              <Link href="/contact">Inquire for Students Tour</Link>
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
