'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Printer, Globe, MapPin, Mail, Phone, Info } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-data';

export default function BusinessCardGeneratorPage() {
  const router = useRouter();
  const logo = PlaceHolderImages.find(img => img.id === 'app-logo');
  const brandPrimary = '#9B5929'; // Updated to Adhama Primary Brown

  const [formData, setFormData] = useState({
    name: 'Full Name',
    title: 'Safari Specialist',
    email: 'info@adhamaadventures.co.tz',
    phone: '+255 753 300 602',
    website: 'www.adhamaadventures.co.tz',
    address: 'House No. 6, Njiro, Arusha, Tanzania'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-muted/40 pb-20 print:bg-white print:p-0">
      <div className="bg-secondary text-white py-12 border-b-4 border-primary print:hidden">
        <div className="container mx-auto px-6">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10 mb-4 rounded-none font-bold uppercase tracking-widest text-[10px]"
            onClick={() => router.push('/admin')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Button>
          <h1 className="text-3xl font-black uppercase tracking-tighter italic">Identity Production</h1>
          <p className="text-white/80 mt-1 uppercase tracking-widest text-[10px] font-bold">Generate official Adhama business cards.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 print:m-0 print:p-0 print:max-w-none">
        <div className="grid lg:grid-cols-2 gap-12 print:block">
          <Card className="shadow-2xl border-none rounded-none print:hidden h-fit">
            <CardHeader className="bg-white border-b">
              <CardTitle className="text-xs font-black uppercase tracking-widest text-secondary">Card Customization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Full Name</Label>
                  <Input name="name" value={formData.name} onChange={handleInputChange} className="rounded-none h-12 border-muted" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Professional Title</Label>
                  <Input name="title" value={formData.title} onChange={handleInputChange} className="rounded-none h-12 border-muted" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Verified Email</Label>
                  <Input name="email" value={formData.email} onChange={handleInputChange} className="rounded-none h-12 border-muted" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">WhatsApp/Hotline</Label>
                  <Input name="phone" value={formData.phone} onChange={handleInputChange} className="rounded-none h-12 border-muted" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Company Address</Label>
                <Input name="address" value={formData.address} onChange={handleInputChange} className="rounded-none h-12 border-muted" />
              </div>
              <Button className="w-full h-14 bg-primary hover:bg-secondary text-white rounded-none font-black uppercase tracking-[0.2em] text-[10px] mt-4 shadow-xl" onClick={() => window.print()}>
                <Printer className="h-4 w-4 mr-3" /> Export Print Layout
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-12 print:fixed print:inset-0 print:z-[9999] print:bg-white print:p-20">
            <div className="space-y-4 print:space-y-0">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground print:hidden">Front - Brand Identity</h3>
              <div 
                className="w-full aspect-[3.5/2] bg-[#F8F4ED] shadow-2xl overflow-hidden border border-border relative flex items-center justify-center p-12 print:shadow-none print:border-black print:rounded-none"
              >
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                   <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
                </div>
                {logo && (
                  <img 
                    src={logo.imageUrl} 
                    alt="Adhama Logo" 
                    className="w-[60%] h-auto relative z-10" 
                    style={{ 
                      filter: 'drop-shadow(1px 1px 0 white) drop-shadow(-1px -1px 0 white)' 
                    }}
                  />
                )}
              </div>
            </div>

            <div className="space-y-4 print:space-y-0">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground print:hidden">Back - Expert Contact</h3>
              <div className="w-full aspect-[3.5/2] bg-white shadow-2xl overflow-hidden border border-border relative flex print:shadow-none print:border-black print:rounded-none">
                <div className="w-4 bg-primary h-full"></div>
                
                <div className="flex-1 p-10 flex flex-col justify-between relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h2 className="text-3xl font-serif italic text-secondary leading-tight tracking-tighter">{formData.name}</h2>
                      <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] opacity-80">{formData.title}</p>
                    </div>
                    {logo && (
                      <img src={logo.imageUrl} alt="Adhama" className="h-10 w-auto object-contain brightness-0 opacity-40" />
                    )}
                  </div>

                  <div className="space-y-3 pt-6 border-t border-muted">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 text-[10px] font-bold text-muted-foreground uppercase">
                        <Phone className="h-3 w-3 text-accent" />
                        <span>{formData.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[10px] font-bold text-muted-foreground uppercase">
                        <Mail className="h-3 w-3 text-accent" />
                        <span>{formData.email}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-[10px] font-bold text-muted-foreground uppercase">
                      <Globe className="h-3 w-3 text-accent" />
                      <span>{formData.website}</span>
                    </div>
                    <div className="flex items-start gap-3 text-[9px] font-medium text-muted-foreground leading-relaxed italic pr-12">
                      <MapPin className="h-3 w-3 text-accent mt-0.5 shrink-0" />
                      <span>{formData.address}</span>
                    </div>
                  </div>
                </div>
                
                {/* Branding watermark */}
                <div className="absolute bottom-[-10%] right-[-5%] text-[10rem] font-serif italic text-muted/5 pointer-events-none select-none">A</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}