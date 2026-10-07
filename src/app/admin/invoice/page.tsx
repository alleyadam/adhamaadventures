'use client';

import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Printer, Plus, Trash2, Mail, Phone, MapPin, Receipt, Landmark, Scale } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-data';
import { format } from 'date-fns';

type InvoiceItem = {
  id: string;
  description: string;
  quantity: number;
  rate: number;
};

export default function InvoiceGeneratorPage() {
  const router = useRouter();
  const logo = PlaceHolderImages.find(img => img.id === 'app-logo');
  const brandSecondary = '#9b5929';
  const brandPrimary = '#ff9b40';

  const [clientInfo, setClientInfo] = useState({
    name: 'Guest Name',
    address: 'Guest Address',
    invoiceNumber: 'INV-0000',
    date: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    bankName: 'NMB Bank',
    accountName: 'Adhama Africa Adventures',
    accountNumber: '1234567890',
    swiftCode: 'NMBCTZTZ',
    terms: 'Payment is due within 15 days of the invoice date. Please mention the invoice number as a reference for your payment.'
  });

  const [items, setItems] = useState<InvoiceItem[]>([
    { id: '1', description: 'Safari Package Booking', quantity: 1, rate: 3500 },
  ]);

  useEffect(() => {
    // Avoid hydration mismatch by setting dynamic values on mount
    setClientInfo(prev => ({
      ...prev,
      invoiceNumber: `ADH-${Math.floor(1000 + Math.random() * 9000)}`,
      date: format(new Date(), 'yyyy-MM-dd'),
    }));
  }, []);

  const addItem = () => {
    setItems([...items, { id: Math.random().toString(), description: '', quantity: 1, rate: 0 }]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const totals = useMemo(() => {
    const subtotal = items.reduce((acc, item) => acc + (item.quantity * item.rate), 0);
    const tax = subtotal * 0.0; // Assume tax-inclusive or specific policy
    return { subtotal, tax, total: subtotal + tax };
  }, [items]);

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
          <h1 className="text-3xl font-bold">Invoicing Unit</h1>
          <p className="text-primary-foreground/80 mt-1">Create professional invoices for Adhama safari experiences.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 print:m-0 print:p-0 print:max-w-none">
        <div className="grid lg:grid-cols-3 gap-8 print:block">
          {/* Editor Panel */}
          <div className="lg:col-span-1 space-y-6 print:hidden">
            <Card className="shadow-lg border-none">
              <CardHeader>
                <CardTitle>Guest Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Guest Name</Label>
                  <Input value={clientInfo.name} onChange={(e) => setClientInfo({...clientInfo, name: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <Label>Address</Label>
                  <Input value={clientInfo.address} onChange={(e) => setClientInfo({...clientInfo, address: e.target.value})} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Invoice #</Label>
                    <Input value={clientInfo.invoiceNumber} onChange={(e) => setClientInfo({...clientInfo, invoiceNumber: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Input type="date" value={clientInfo.date} onChange={(e) => setClientInfo({...clientInfo, date: e.target.value})} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-none">
              <CardHeader>
                <CardTitle>Payment & Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Bank Name</Label>
                  <Input value={paymentInfo.bankName} onChange={(e) => setPaymentInfo({...paymentInfo, bankName: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <Label>Account Name</Label>
                  <Input value={paymentInfo.accountName} onChange={(e) => setPaymentInfo({...paymentInfo, accountName: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <Label>Account Number</Label>
                  <Input value={paymentInfo.accountNumber} onChange={(e) => setPaymentInfo({...paymentInfo, accountNumber: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <Label>Terms & Conditions</Label>
                  <Textarea value={paymentInfo.terms} rows={3} onChange={(e) => setPaymentInfo({...paymentInfo, terms: e.target.value})} />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-none">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Invoice Items</CardTitle>
                <Button variant="outline" size="sm" onClick={addItem}><Plus className="h-4 w-4 mr-1" /> Add</Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {items.map((item, idx) => (
                  <div key={item.id} className="p-4 border rounded-lg space-y-4 bg-muted/20 relative group">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="absolute top-2 right-2 text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <div className="space-y-2">
                      <Label className="text-xs uppercase font-bold text-muted-foreground">Description</Label>
                      <Input value={item.description} onChange={(e) => updateItem(item.id, 'description', e.target.value)} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-xs uppercase font-bold text-muted-foreground">Qty</Label>
                        <Input type="number" value={item.quantity} onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)} />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs uppercase font-bold text-muted-foreground">Rate (USD)</Label>
                        <Input type="number" value={item.rate} onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)} />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Button className="w-full gap-2 py-6 text-lg" onClick={() => window.print()}>
              <Printer className="h-5 w-5" /> Generate Invoice
            </Button>
          </div>

          {/* Preview Panel - Optimized for Absolute Print Alignment */}
          <div className="lg:col-span-2 print:fixed print:inset-0 print:z-[9999] print:bg-white print:m-0">
            <div className="w-full bg-white shadow-2xl p-[0.75in] flex flex-col min-h-[11in] print:shadow-none print:p-[0.5in] print:min-h-0">
              
              {/* Invoice Header */}
              <div className="flex justify-between items-start mb-16">
                <div>
                  {logo && (
                    <img src={logo.imageUrl} alt="Adhama Logo" className="h-20 w-auto mb-4" />
                  )}
                  <h2 className="text-2xl font-bold" style={{ color: brandSecondary }}>Adhama Africa Adventures</h2>
                  <p className="text-sm text-muted-foreground">Authentic Safaris & Community Experiences</p>
                </div>
                <div className="text-right">
                  <h1 className="text-5xl font-black text-muted/20 uppercase tracking-tighter mb-2">INVOICE</h1>
                  <div className="space-y-1 text-sm">
                    <p className="font-bold"># {clientInfo.invoiceNumber}</p>
                    <p>{clientInfo.date ? format(new Date(clientInfo.date), 'MMMM dd, yyyy') : '...'}</p>
                  </div>
                </div>
              </div>

              {/* Bill To / From */}
              <div className="grid grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 border-b pb-1">Billed To</h3>
                  <div className="text-sm">
                    <p className="font-bold text-lg">{clientInfo.name}</p>
                    <p className="text-muted-foreground whitespace-pre-line">{clientInfo.address}</p>
                  </div>
                </div>
                <div className="text-right">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 border-b pb-1">From</h3>
                  <div className="text-sm">
                    <p className="font-bold text-lg" style={{ color: brandSecondary }}>Adhama Africa Adventures</p>
                    <p className="text-muted-foreground">House No. 6, Njiro Ghorofa Mbili</p>
                    <p className="text-muted-foreground">Arusha, Tanzania</p>
                  </div>
                </div>
              </div>

              {/* Items Table */}
              <div className="mb-12">
                <table className="w-full text-left">
                  <thead className="text-xs uppercase font-bold text-white" style={{ backgroundColor: brandSecondary }}>
                    <tr>
                      <th className="p-4 rounded-l-md">Description</th>
                      <th className="p-4 text-center">Qty</th>
                      <th className="p-4 text-right">Rate (USD)</th>
                      <th className="p-4 text-right rounded-r-md">Amount (USD)</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {items.map((item, idx) => (
                      <tr key={item.id} className="border-b">
                        <td className="p-4 font-medium">{item.description}</td>
                        <td className="p-4 text-center">{item.quantity}</td>
                        <td className="p-4 text-right">${item.rate.toLocaleString()}</td>
                        <td className="p-4 text-right font-bold">${(item.quantity * item.rate).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Totals Section */}
              <div className="ml-auto w-1/2 space-y-3 mb-12">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span className="font-medium">${totals.subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-3 border-t-2" style={{ color: brandSecondary, borderColor: brandPrimary }}>
                  <span>TOTAL:</span>
                  <span>${totals.total.toLocaleString()}</span>
                </div>
              </div>

              {/* Payment Info & Terms */}
              <div className="grid grid-cols-2 gap-12 mt-auto pt-12 border-t border-dashed">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#9b5929]">
                    <Landmark className="h-4 w-4" />
                    <h4 className="text-xs font-bold uppercase tracking-wider">Bank Details</h4>
                  </div>
                  <div className="text-xs space-y-1">
                    <p><span className="text-muted-foreground">Bank:</span> {paymentInfo.bankName}</p>
                    <p><span className="text-muted-foreground">Account Name:</span> {paymentInfo.accountName}</p>
                    <p><span className="text-muted-foreground">Account Number:</span> {paymentInfo.accountNumber}</p>
                    <p><span className="text-muted-foreground">SWIFT:</span> {paymentInfo.swiftCode}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#9b5929]">
                    <Scale className="h-4 w-4" />
                    <h4 className="text-xs font-bold uppercase tracking-wider">Terms & Conditions</h4>
                  </div>
                  <p className="text-[10px] text-muted-foreground leading-relaxed italic">
                    {paymentInfo.terms}
                  </p>
                </div>
              </div>

              {/* Footer Info */}
              <div className="pt-8 grid grid-cols-3 gap-8 text-[10px] text-muted-foreground border-t mt-8">
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3" style={{ color: brandPrimary }} />
                  <span>+255 753 300 602</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3" style={{ color: brandPrimary }} />
                  <span>info@adhamaadventures.co.tz</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3 w-3" style={{ color: brandPrimary }} />
                  <span>Njiro, Arusha, Tanzania</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}