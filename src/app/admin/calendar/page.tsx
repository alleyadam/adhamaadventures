'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Save, CalendarDays, Loader2 } from 'lucide-react';
import { useFirestore, useCollection } from '@/firebase';
import { collection, doc, setDoc, query, orderBy } from 'firebase/firestore';
import { toast } from '@/hooks/use-toast';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export default function CalendarManagerPage() {
  const router = useRouter();
  const db = useFirestore();
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [isSaving, setIsSaving] = useState(false);

  const calendarQuery = query(collection(db, 'travel_calendar'));
  const { data: calendarData, loading } = useCollection<any>(calendarQuery);

  const [formData, setFormData] = useState({
    month: 'January',
    title: '',
    highlights: '',
    weather: '',
    bestPlaces: ''
  });

  // Sync form when selected month or data changes
  useEffect(() => {
    if (calendarData) {
      const activeData = calendarData.find(m => m.month === selectedMonth);
      setFormData(activeData || {
        month: selectedMonth,
        title: '',
        highlights: '',
        weather: '',
        bestPlaces: ''
      });
    }
  }, [calendarData, selectedMonth]);

  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    const docId = selectedMonth.toLowerCase();
    const docRef = doc(db, 'travel_calendar', docId);

    setDoc(docRef, formData)
      .then(() => {
        toast({ title: 'Saved', description: `${selectedMonth} seasonal data updated.` });
      })
      .catch(async (error) => {
        const permissionError = new FirestorePermissionError({
          path: `travel_calendar/${docId}`,
          operation: 'write',
          requestResourceData: formData,
        });
        errorEmitter.emit('permission-error', permissionError);
      })
      .finally(() => setIsSaving(false));
  };

  return (
    <div className="min-h-screen bg-[#fdfaf5] pb-20">
      <div className="bg-secondary text-white py-12 border-b-4 border-primary">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10 mb-4 rounded-none font-bold uppercase tracking-widest text-[10px]"
            onClick={() => router.push('/admin')}
          >
            <ArrowLeft className="mr-2 h-4 w-4 text-primary" /> Back to Dashboard
          </Button>
          <h1 className="text-3xl font-black uppercase tracking-tighter italic">Travel Calendar CMS</h1>
          <p className="text-white/80 mt-1 uppercase tracking-widest text-[10px] font-bold">Manage seasonal highlights and expert advice.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Month Selector */}
          <div className="lg:col-span-1 space-y-2">
            {months.map(month => (
              <button
                key={month}
                onClick={() => handleMonthChange(month)}
                className={`w-full text-left p-4 font-bold uppercase tracking-widest text-[10px] border-l-4 transition-all ${
                  selectedMonth === month 
                    ? 'bg-white border-primary text-secondary shadow-md' 
                    : 'bg-muted/30 border-transparent text-muted-foreground hover:bg-muted/50'
                }`}
              >
                {month}
              </button>
            ))}
          </div>

          {/* Editor Form */}
          <div className="lg:col-span-3">
            <Card className="rounded-none border-none shadow-xl">
              <CardHeader className="bg-white border-b">
                <CardTitle className="text-sm font-black uppercase tracking-widest text-secondary flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-primary" /> Editing {selectedMonth}
                </CardTitle>
                <CardDescription className="text-[10px]">What is happening in Tanzania during this time?</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSave} className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Catchy Seasonal Title</Label>
                    <Input 
                      value={formData.title} 
                      onChange={(e) => setFormData({...formData, title: e.target.value})} 
                      placeholder="e.g. The Calving Season & Green Landscapes"
                      className="rounded-none border-muted h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Seasonal Highlights</Label>
                    <Textarea 
                      value={formData.highlights} 
                      onChange={(e) => setFormData({...formData, highlights: e.target.value})} 
                      placeholder="Describe the wildlife movement, events, or specific feelings of this month..."
                      className="min-h-[150px] rounded-none border-muted"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Weather Expert Advice</Label>
                      <Input 
                        value={formData.weather} 
                        onChange={(e) => setFormData({...formData, weather: e.target.value})} 
                        placeholder="e.g. Warm days, clear skies, short afternoon rains."
                        className="rounded-none border-muted h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Best Regions to Visit</Label>
                      <Input 
                        value={formData.bestPlaces} 
                        onChange={(e) => setFormData({...formData, bestPlaces: e.target.value})} 
                        placeholder="e.g. Southern Serengeti, Ndutu, Arusha."
                        className="rounded-none border-muted h-12"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-6 border-t">
                    <Button 
                      type="submit" 
                      disabled={isSaving}
                      className="bg-primary hover:bg-secondary text-white rounded-none px-12 h-14 font-black uppercase tracking-widest text-[10px]"
                    >
                      {isSaving ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
                      Save {selectedMonth} Data
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}