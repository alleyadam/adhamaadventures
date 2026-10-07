'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Printer, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-data';
import { format } from 'date-fns';

export default function LetterheadGeneratorPage() {
  const router = useRouter();
  const logo = PlaceHolderImages.find(img => img.id === 'app-logo');
  const brandBlue = '#262261';

  const [formData, setFormData] = useState({
    recipientName: 'Recipient Name',
    recipientAddress: '123 Business Street, City, Country',
    date: '',
    subject: 'Subject of the Letter',
    content: `Dear [Recipient Name],

We are writing to you regarding Rayaan Sukuk Takaful Services. This is a placeholder for your official communication content. Our services are designed to align with your ethical and financial values.

Please feel free to update this text to suit your needs.

Sincerely,

The Rayaan Team`,
    senderName: 'Managing Director',
  });

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      date: format(new Date(), 'MMMM dd, yyyy')
    }));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-muted/40 pb-20 print:bg-white print:p-0">
      <div className="bg-primary text-primary-foreground py-12 print:hidden">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="text-primary-foreground hover:bg-white/10 mb-4"
            onClick={() => router.push('/admin')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold">Official Letterhead</h1>
          <p className="text-primary-foreground/80 mt-1">Generate branded official documents and letters.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 print:m-0 print:p-0 print:max-w-none">
        <div className="grid lg:grid-cols-3 gap-8 print:block">
          {/* Editor Panel */}
          <Card className="lg:col-span-1 shadow-lg border-none print:hidden h-fit">
            <CardHeader>
              <CardTitle>Letter Details</CardTitle>
              <CardDescription>Compose your official letter here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="recipientName">Recipient Name</Label>
                <Input id="recipientName" name="recipientName" value={formData.recipientName} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="recipientAddress">Recipient Address</Label>
                <Input id="recipientAddress" name="recipientAddress" value={formData.recipientAddress} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" name="date" value={formData.date} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" value={formData.subject} className="font-bold" onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Letter Content</Label>
                <Textarea id="content" name="content" value={formData.content} rows={10} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="senderName">Sender Name/Title</Label>
                <Input id="senderName" name="senderName" value={formData.senderName} onChange={handleInputChange} />
              </div>
              <Button className="w-full gap-2 mt-4" onClick={() => window.print()}>
                <Printer className="h-4 w-4" /> Print / Export PDF
              </Button>
            </CardContent>
          </Card>

          {/* Preview Panel - Letterhead Design Optimized for Absolute Print Alignment */}
          <div className="lg:col-span-2 print:fixed print:inset-0 print:z-[9999] print:bg-white print:m-0">
            <div className="w-full aspect-[1/1.414] bg-white shadow-2xl overflow-hidden relative flex flex-col p-[1.5in] print:shadow-none print:p-[0.5in] print:aspect-auto print:min-h-screen">
              
              {/* Header Branding */}
              <div className="flex justify-between items-start border-b-2 pb-8 mb-12" style={{ borderColor: brandBlue }}>
                {logo && (
                  <img src={logo.imageUrl} alt="Rayaan Logo" className="h-20 w-auto object-contain" />
                )}
                <div className="text-right">
                  <h2 className="text-xl font-bold" style={{ color: brandBlue }}>Rayaan Sukuk Takaful Services</h2>
                  <p className="text-xs text-muted-foreground">Expert Ethical Financial Advisory</p>
                </div>
              </div>

              {/* Letter Content */}
              <div className="flex-grow space-y-6 text-sm text-foreground">
                <div className="flex justify-between">
                  <div className="space-y-1">
                    <p className="font-bold">{formData.recipientName}</p>
                    <p className="text-muted-foreground whitespace-pre-line">{formData.recipientAddress}</p>
                  </div>
                  <div className="text-right font-medium">
                    {formData.date}
                  </div>
                </div>

                <div className="pt-8 pb-4">
                  <p className="font-bold border-b border-muted pb-1 uppercase tracking-tight">RE: {formData.subject}</p>
                </div>

                <div className="whitespace-pre-line leading-relaxed min-h-[300px]">
                  {formData.content}
                </div>

                <div className="pt-12">
                  <p className="font-bold" style={{ color: brandBlue }}>{formData.senderName}</p>
                  <p className="text-xs text-muted-foreground">Rayaan Sukuk Takaful Services</p>
                </div>
              </div>

              {/* Footer Branding */}
              <div className="mt-auto pt-8 border-t border-muted grid grid-cols-4 gap-4 text-[10px] text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3" style={{ color: brandBlue }} />
                  <span>+255 752 400 444</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3" style={{ color: brandBlue }} />
                  <span>info@rayaan.co.tz</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-3 w-3" style={{ color: brandBlue }} />
                  <span>www.rayaan.co.tz</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-3 w-3 mt-0.5 shrink-0" style={{ color: brandBlue }} />
                  <span>NSSF Mafao House, Arusha</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}