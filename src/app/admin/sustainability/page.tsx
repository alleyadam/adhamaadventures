'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Leaf, Save, ShieldCheck, TreePine, Recycle, Users, Zap, Loader2, GraduationCap, HeartHandshake, Globe } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useFirestore, useDoc } from '@/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

export default function SustainabilityAdminPage() {
  const db = useFirestore();
  const [isSaving, setIsSaving] = useState(false);
  const { data: config, loading } = useDoc<any>(doc(db, 'settings', 'sustainability'));

  // Metrics for the Sustainability Detailed Page
  const [metrics, setMetrics] = useState([
    { id: 'trees', label: 'Trees Planted', value: 0, icon: TreePine, color: 'text-green-600', max: 100000, step: 100 },
    { id: 'carbon', label: 'Carbon Offset %', value: 0, icon: Leaf, color: 'text-emerald-600', max: 100, step: 1 },
    { id: 'plastic', label: 'Plastic Free %', value: 0, icon: Recycle, color: 'text-blue-600', max: 100, step: 1 },
    { id: 'local', label: 'Local Employment %', value: 0, icon: Users, color: 'text-orange-600', max: 100, step: 1 },
    { id: 'energy', label: 'Renewable Energy %', value: 0, icon: Zap, color: 'text-yellow-600', max: 100, step: 1 },
  ]);

  // General Impact Stats for the Home Page
  const [generalStats, setGeneralStats] = useState({
    communities: '45+',
    schools: '22',
    travellers: '1,000+'
  });

  const [content, setContent] = useState({
    title: 'Our commitment to a living planet is unwavering.',
    body: 'We treat the environment with the utmost reverence, designing our operations to leave no negative trace while actively restoring degraded ecosystems.',
    footerQuote: '"We proudly publish an annual sustainability report detailing our exact contributions to the UN SDGs."'
  });

  useEffect(() => {
    if (config) {
      if (config.metrics) {
        setMetrics(prev => prev.map(m => ({ ...m, value: config.metrics[m.id] || 0 })));
      }
      if (config.generalStats) {
        setGeneralStats(config.generalStats);
      }
      if (config.content) {
        setContent(config.content);
      }
    }
  }, [config]);

  const updateMetric = (id: string, val: number) => {
    setMetrics(metrics.map(m => m.id === id ? { ...m, value: val } : m));
  };

  const handleSave = async () => {
    setIsSaving(true);
    const metricData = metrics.reduce((acc: any, m) => {
      acc[m.id] = m.value;
      return acc;
    }, {});

    try {
      await setDoc(doc(db, 'settings', 'sustainability'), {
        metrics: metricData,
        generalStats,
        content,
        updatedAt: serverTimestamp()
      });
      toast({ title: "Metrics Synchronized", description: "Sustainability dashboard updated site-wide." });
    } catch (e) {
      toast({ variant: "destructive", title: "Save Failed" });
    } finally { setIsSaving(false); }
  };

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end">
        <div className="space-y-2">
          <h1 className="text-3xl font-black uppercase tracking-tighter italic text-secondary">Sustainability Control</h1>
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Manage impact metrics and green initiatives site-wide</p>
        </div>
        <Button 
          onClick={handleSave} 
          disabled={isSaving}
          className="bg-primary hover:bg-secondary text-white rounded-none h-14 px-12 font-black uppercase tracking-widest text-[10px] shadow-xl shadow-primary/20"
        >
          {isSaving ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
          Update Live Dashboards
        </Button>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          {/* Detailed Performance Metrics */}
          <Card className="rounded-none border-none shadow-xl">
            <CardHeader className="bg-secondary text-white py-4">
              <CardTitle className="text-xs uppercase tracking-[0.2em] font-black">Sustainability Dashboard Metrics</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-10">
              {metrics.map((m) => (
                <div key={m.id} className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 bg-muted/50 rounded-lg ${m.color}`}><m.icon className="h-5 w-5" /></div>
                      <span className="text-sm font-bold uppercase tracking-widest text-secondary">{m.label}</span>
                    </div>
                    <span className="text-2xl font-black text-primary font-mono">{m.value}{m.id === 'trees' ? '' : '%'}</span>
                  </div>
                  <Slider 
                    value={[m.value]} 
                    max={m.max} 
                    step={m.step}
                    onValueChange={(vals) => updateMetric(m.id, vals[0])}
                    className="py-2"
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Home Page Impact Stats */}
          <Card className="rounded-none border-none shadow-xl">
            <CardHeader className="bg-white border-b py-4">
              <CardTitle className="text-xs uppercase tracking-[0.2em] font-black text-secondary">Home Page Impact Stats</CardTitle>
            </CardHeader>
            <CardContent className="p-8 grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <HeartHandshake className="h-3 w-3 text-primary" /> Communities
                </Label>
                <Input 
                  value={generalStats.communities} 
                  onChange={(e) => setGeneralStats({...generalStats, communities: e.target.value})}
                  className="rounded-none border-muted h-12"
                  placeholder="e.g. 45+"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <GraduationCap className="h-3 w-3 text-primary" /> Schools Supported
                </Label>
                <Input 
                  value={generalStats.schools} 
                  onChange={(e) => setGeneralStats({...generalStats, schools: e.target.value})}
                  className="rounded-none border-muted h-12"
                  placeholder="e.g. 22"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Globe className="h-3 w-3 text-primary" /> Travellers Hosted
                </Label>
                <Input 
                  value={generalStats.travellers} 
                  onChange={(e) => setGeneralStats({...generalStats, travellers: e.target.value})}
                  className="rounded-none border-muted h-12"
                  placeholder="e.g. 1,200+"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="rounded-none border-none shadow-xl h-fit">
            <CardHeader className="bg-white border-b py-4"><CardTitle className="text-xs uppercase tracking-[0.2em] font-black text-secondary">Editorial Messaging</CardTitle></CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Primary Heading</Label>
                <Input value={content.title} onChange={(e) => setContent({...content, title: e.target.value})} className="rounded-none border-muted h-12" />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Mission Statement</Label>
                <Textarea value={content.body} onChange={(e) => setContent({...content, body: e.target.value})} className="rounded-none border-muted min-h-[120px]" />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Verification Note / Quote</Label>
                <Textarea value={content.footerQuote} onChange={(e) => setContent({...content, footerQuote: e.target.value})} className="rounded-none border-muted min-h-[100px]" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-none border-none bg-primary/5 p-6 space-y-4 border-l-4 border-primary shadow-lg">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <h4 className="font-black uppercase tracking-widest text-xs text-secondary italic">Trust Transparency</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              These values are reflected immediately on the public site. Ensure you have the documentation ready for the annual Adhama Impact Report.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
