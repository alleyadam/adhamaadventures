'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Copy, Check, Globe, Info } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { PlaceHolderImages } from '@/lib/placeholder-data';

export default function SignatureGeneratorPage() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const signatureRef = useRef<HTMLDivElement>(null);
  const logo = PlaceHolderImages.find(img => img.id === 'app-logo');

  const [formData, setFormData] = useState({
    name: 'Full Name',
    title: 'Safari Guide / Specialist',
    email: 'info@adhamaadventures.co.tz',
    phone: '+255 753 300 602',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const copyToClipboard = async () => {
    if (!signatureRef.current) return;

    try {
      const range = document.createRange();
      range.selectNode(signatureRef.current);
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges();
        
        setCopied(true);
        toast({ title: "Copied!", description: "Signature copied to clipboard as rich text." });
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Copy Failed", description: "Please select and copy manually." });
    }
  };

  // Brand Colors
  const brandPrimary = '#ff9b40';
  const brandSecondary = '#9b5929';

  return (
    <div className="min-h-screen bg-muted/40 pb-20">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="text-primary-foreground hover:bg-white/10 mb-4"
            onClick={() => router.push('/admin')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold">Email Signature Generator</h1>
          <p className="text-primary-foreground/80 mt-1">Create professional, brand-aligned signatures for your team.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <Card className="shadow-lg border-none">
            <CardHeader>
              <CardTitle>Signature Details</CardTitle>
              <CardDescription>Customize the information for the team member.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="e.g. John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Job Title</Label>
                <Input id="title" name="title" value={formData.title} onChange={handleInputChange} placeholder="e.g. Lead Guide" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="e.g. info@adhamaadventures.co.tz" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="e.g. +255 753 300 602" />
              </div>
            </CardContent>
          </Card>

          {/* Preview Tabs */}
          <Card className="shadow-lg border-none flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Preview</CardTitle>
                <CardDescription>Copy the version you need.</CardDescription>
              </div>
              <Button onClick={copyToClipboard} className="gap-2">
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied!" : "Copy Signature"}
              </Button>
            </CardHeader>
            <CardContent className="flex-grow bg-white rounded-b-lg p-0">
              <Tabs defaultValue="individual" className="w-full">
                <div className="px-6 border-b">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="individual">Individual</TabsTrigger>
                    <TabsTrigger value="corporate">Corporate</TabsTrigger>
                  </TabsList>
                </div>
                
                <div className="p-8 flex items-center justify-center min-h-[300px]" ref={signatureRef}>
                  <TabsContent value="individual" className="mt-0 w-full flex justify-center">
                    {/* Individual Signature */}
                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: 'collapse', fontFamily: 'Arial, sans-serif', minWidth: '350px' }}>
                      <tbody>
                        <tr>
                          <td style={{ verticalAlign: 'top', paddingRight: '20px', borderRight: `3px solid ${brandPrimary}` }}>
                            {logo && (
                              <img 
                                src={logo.imageUrl} 
                                alt="Adhama Logo" 
                                width="140" 
                                style={{ display: 'block', maxWidth: '140px' }} 
                              />
                            )}
                          </td>
                          <td style={{ verticalAlign: 'top', paddingLeft: '20px' }}>
                            <div style={{ fontSize: '18px', fontWeight: 'bold', color: brandSecondary, marginBottom: '2px' }}>
                              {formData.name}
                            </div>
                            <div style={{ fontSize: '14px', color: brandPrimary, fontWeight: '600', marginBottom: '12px' }}>
                              {formData.title}
                            </div>
                            
                            <table cellPadding="0" cellSpacing="0" style={{ fontSize: '13px', color: '#666666' }}>
                              <tbody>
                                <tr>
                                  <td style={{ paddingBottom: '6px' }}>
                                    <span style={{ color: brandPrimary, marginRight: '10px', fontSize: '14px' }}>📞</span> 
                                    {formData.phone}
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{ paddingBottom: '6px' }}>
                                    <span style={{ color: brandPrimary, marginRight: '10px', fontSize: '14px' }}>✉</span> 
                                    <a href={`mailto:${formData.email}`} style={{ color: brandSecondary, textDecoration: 'none', fontWeight: '500' }}>{formData.email}</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{ paddingBottom: '6px' }}>
                                    <span style={{ color: brandPrimary, marginRight: '10px', fontSize: '14px' }}>🌐</span> 
                                    <a href="https://www.adhamaadventures.co.tz" style={{ color: brandSecondary, textDecoration: 'none', fontWeight: '500' }}>www.adhamaadventures.co.tz</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{ paddingTop: '2px' }}>
                                    <span style={{ color: brandPrimary, marginRight: '10px', fontSize: '14px' }}>📍</span> 
                                    House No. 6, Njiro Ghorofa Mbili, Arusha
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2} style={{ paddingTop: '15px' }}>
                            <div style={{ borderTop: '1px solid #eeeeee', paddingTop: '10px', fontSize: '10px', color: '#999999', fontStyle: 'italic' }}>
                              Adhama Africa Adventures - Authentic Safaris & Community First Ethos.
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </TabsContent>

                  <TabsContent value="corporate" className="mt-0 w-full flex justify-center">
                    {/* Corporate Signature */}
                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: 'collapse', fontFamily: 'Arial, sans-serif', minWidth: '350px' }}>
                      <tbody>
                        <tr>
                          <td style={{ verticalAlign: 'top', paddingRight: '20px', borderRight: `3px solid ${brandPrimary}` }}>
                            {logo && (
                              <img 
                                src={logo.imageUrl} 
                                alt="Adhama Logo" 
                                width="140" 
                                style={{ display: 'block', maxWidth: '140px' }} 
                              />
                            )}
                          </td>
                          <td style={{ verticalAlign: 'top', paddingLeft: '20px' }}>
                            <div style={{ fontSize: '18px', fontWeight: 'bold', color: brandSecondary, marginBottom: '12px' }}>
                              Adhama Africa Adventures
                            </div>
                            
                            <table cellPadding="0" cellSpacing="0" style={{ fontSize: '13px', color: '#666666' }}>
                              <tbody>
                                <tr>
                                  <td style={{ paddingBottom: '6px' }}>
                                    <span style={{ color: brandPrimary, marginRight: '10px', fontSize: '14px' }}>📞</span> 
                                    +255 753 300 602
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{ paddingBottom: '6px' }}>
                                    <span style={{ color: brandPrimary, marginRight: '10px', fontSize: '14px' }}>✉</span> 
                                    <a href="mailto:info@adhamaadventures.co.tz" style={{ color: brandSecondary, textDecoration: 'none', fontWeight: '500' }}>info@adhamaadventures.co.tz</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{ paddingBottom: '6px' }}>
                                    <span style={{ color: brandPrimary, marginRight: '10px', fontSize: '14px' }}>🌐</span> 
                                    <a href="https://www.adhamaadventures.co.tz" style={{ color: brandSecondary, textDecoration: 'none', fontWeight: '500' }}>www.adhamaadventures.co.tz</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{ paddingTop: '2px' }}>
                                    <span style={{ color: brandPrimary, marginRight: '10px', fontSize: '14px' }}>📍</span> 
                                    Njiro Ghorofa Mbili, Arusha, Tanzania
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2} style={{ paddingTop: '15px' }}>
                            <div style={{ borderTop: '1px solid #eeeeee', paddingTop: '10px', fontSize: '10px', color: '#999999', fontStyle: 'italic' }}>
                              Karibu Sana - Experience the Grandeur of Africa with Heart.
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </TabsContent>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8">
          <Card className="bg-orange-50 border-orange-100">
            <CardContent className="p-4 flex gap-4 items-start">
              <div className="bg-orange-100 p-2 rounded-full text-orange-600">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-orange-900">How to use this signature:</h4>
                <ul className="text-sm text-orange-800 list-disc ml-4 mt-2 space-y-1">
                  <li>Fill in the individual details or select the <strong>Corporate</strong> tab.</li>
                  <li>Click the <strong>"Copy Signature"</strong> button.</li>
                  <li>Paste (Ctrl+V or Cmd+V) directly into your email settings signature box.</li>
                  <li>The icons and brand earthy tones will be preserved automatically.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}