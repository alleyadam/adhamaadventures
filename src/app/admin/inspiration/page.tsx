'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Sparkles, Plus, Trash2, Pencil, Save, Star, Music, Ship, Anchor, Heart, Tent } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useFirestore, useCollection } from '@/firebase';
import { collection, addDoc, serverTimestamp, query, orderBy, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { cn } from '@/lib/utils';

const ICON_OPTIONS = [
  { name: 'Ship', icon: Ship },
  { name: 'Music', icon: Music },
  { name: 'Anchor', icon: Anchor },
  { name: 'Heart', icon: Heart },
  { name: 'Tent', icon: Tent },
  { name: 'Star', icon: Star },
];

export default function InspirationAdminPage() {
  const db = useFirestore();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedExp, setSelectedExp] = useState<any>(null);
  const [formData, setFormData] = useState({ title: '', desc: '', icon: 'Star', imageId: 'hero-safari' });

  const expQuery = query(collection(db, 'inspiration_items'), orderBy('createdAt', 'desc'));
  const { data: experiences, loading } = useCollection<any>(expQuery);

  const handleSubmit = async () => {
    if (!formData.title || !formData.desc) return;
    try {
      if (selectedExp) {
        await updateDoc(doc(db, 'inspiration_items', selectedExp.id), { ...formData, updatedAt: serverTimestamp() });
        toast({ title: "Experience Updated" });
      } else {
        await addDoc(collection(db, 'inspiration_items'), { ...formData, createdAt: serverTimestamp() });
        toast({ title: "Experience Added" });
      }
      setIsEditDialogOpen(false);
      setFormData({ title: '', desc: '', icon: 'Star', imageId: 'hero-safari' });
    } catch (e) { toast({ variant: "destructive", title: "Error saving" }); }
  };

  const deleteExp = async (id: string) => {
    if (confirm('Remove this inspiration card?')) {
      await deleteDoc(doc(db, 'inspiration_items', id));
      toast({ title: "Card Removed" });
    }
  };

  return (
    <div className="p-8 space-y-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-end">
        <div className="space-y-2">
          <h1 className="text-3xl font-black uppercase tracking-tighter italic text-secondary">Inspiration Hub</h1>
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Manage curated transformational experiences</p>
        </div>
        <Button onClick={() => { setSelectedExp(null); setFormData({ title: '', desc: '', icon: 'Star', imageId: 'hero-safari' }); setIsEditDialogOpen(true); }} className="bg-primary hover:bg-secondary text-white rounded-none h-12 px-8 font-black uppercase tracking-widest text-[10px]">
          <Plus className="h-4 w-4 mr-2" /> Add Experience
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <div className="col-span-full py-20 text-center animate-pulse italic">Loading Experiences...</div>
        ) : experiences?.length === 0 ? (
          <div className="col-span-full py-20 text-center border-2 border-dashed rounded-none italic text-muted-foreground">Your inspiration catalog is empty. Start adding experiences.</div>
        ) : experiences?.map((exp) => {
          const IconComp = ICON_OPTIONS.find(i => i.name === exp.icon)?.icon || Star;
          return (
            <Card key={exp.id} className="rounded-none border-none shadow-xl overflow-hidden group">
              <div className="p-6 bg-secondary text-white flex justify-between items-start">
                <div className="p-3 bg-white/10 rounded-xl"><IconComp className="h-6 w-6 text-primary" /></div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/10" onClick={() => { setSelectedExp(exp); setFormData({ ...exp }); setIsEditDialogOpen(true); }}><Pencil className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-destructive" onClick={() => deleteExp(exp.id)}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <h3 className="font-black text-secondary uppercase tracking-tight leading-tight">{exp.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 italic">{exp.desc}</p>
                <div className="pt-4 border-t border-muted">
                  <span className="text-[8px] font-black uppercase tracking-widest text-primary">Card Mapping: {exp.imageId}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl rounded-none border-none shadow-2xl p-0 overflow-hidden bg-[#F8F4ED]">
          <DialogHeader className="p-6 bg-secondary text-white">
            <DialogTitle className="text-xl font-black uppercase tracking-tighter italic">Experience Editor</DialogTitle>
          </DialogHeader>
          <div className="p-8 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest">Icon Symbol</Label>
                <div className="grid grid-cols-6 gap-2">
                  {ICON_OPTIONS.map(opt => (
                    <button 
                      key={opt.name} 
                      onClick={() => setFormData({...formData, icon: opt.name})}
                      className={cn("p-2 border transition-all", formData.icon === opt.name ? "bg-primary text-white border-primary" : "bg-white hover:bg-muted")}
                    >
                      <opt.icon className="h-4 w-4 mx-auto" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest">Image Reference ID</Label>
                <input value={formData.imageId} onChange={(e) => setFormData({...formData, imageId: e.target.value})} className="flex h-12 w-full rounded-none border border-muted bg-background px-3 py-2 text-sm" placeholder="e.g. insp-cooking" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest">Headline</Label>
              <input value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="flex h-12 w-full rounded-none border border-muted bg-background px-3 py-2 text-sm" placeholder="e.g. Sleep Under the Swahili Sea" />
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest">Description</Label>
              <Textarea value={formData.desc} onChange={(e) => setFormData({...formData, desc: e.target.value})} className="rounded-none border-muted min-h-[150px]" placeholder="Explain the magic of this experience..." />
            </div>
          </div>
          <DialogFooter className="p-6 bg-muted/30">
            <Button variant="outline" className="rounded-none" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSubmit} className="bg-primary hover:bg-secondary text-white rounded-none font-black uppercase tracking-widest text-[10px] px-12">
              <Save className="h-4 w-4 mr-2" /> Publish Card
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}