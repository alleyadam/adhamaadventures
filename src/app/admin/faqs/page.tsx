'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { HelpCircle, Plus, Trash2, Pencil, Save, ListOrdered } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useFirestore, useCollection } from '@/firebase';
import { collection, addDoc, serverTimestamp, query, orderBy, deleteDoc, doc, updateDoc } from 'firebase/firestore';

export default function FAQAdminPage() {
  const db = useFirestore();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<any>(null);
  const [formData, setFormData] = useState({ question: '', answer: '', order: 0 });

  const faqQuery = query(collection(db, 'faqs'), orderBy('order', 'asc'));
  const { data: faqs, loading } = useCollection<any>(faqQuery);

  const handleSubmit = async () => {
    if (!formData.question || !formData.answer) return;
    try {
      if (selectedFaq) {
        await updateDoc(doc(db, 'faqs', selectedFaq.id), { ...formData, updatedAt: serverTimestamp() });
        toast({ title: "FAQ Updated" });
      } else {
        await addDoc(collection(db, 'faqs'), { ...formData, createdAt: serverTimestamp() });
        toast({ title: "FAQ Added" });
      }
      setIsEditDialogOpen(false);
      setFormData({ question: '', answer: '', order: 0 });
    } catch (e) { toast({ variant: "destructive", title: "Error saving" }); }
  };

  const deleteFaq = async (id: string) => {
    if (confirm('Delete FAQ?')) {
      await deleteDoc(doc(db, 'faqs', id));
      toast({ title: "Deleted" });
    }
  };

  return (
    <div className="p-8 space-y-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-end">
        <div className="space-y-2">
          <h1 className="text-3xl font-black uppercase tracking-tighter italic text-secondary">FAQs Manager</h1>
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Manage traveler support content</p>
        </div>
        <Button onClick={() => { setSelectedFaq(null); setFormData({ question: '', answer: '', order: faqs?.length || 0 }); setIsEditDialogOpen(true); }} className="bg-primary hover:bg-secondary text-white rounded-none h-12 px-8 font-black uppercase tracking-widest text-[10px]">
          <Plus className="h-4 w-4 mr-2" /> Add Question
        </Button>
      </div>

      <Card className="rounded-none border-none shadow-xl">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="w-16 text-center text-[10px] font-black uppercase">Order</TableHead>
              <TableHead className="text-[10px] font-black uppercase py-4">Question & Answer</TableHead>
              <TableHead className="text-right px-8 text-[10px] font-black uppercase">Manage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow><TableCell colSpan={3} className="text-center py-20">Loading Knowledge Base...</TableCell></TableRow>
            ) : faqs?.map((faq) => (
              <TableRow key={faq.id} className="hover:bg-primary/5 border-b align-top">
                <TableCell className="text-center pt-5 font-mono text-xs text-primary font-bold">#{faq.order}</TableCell>
                <TableCell className="py-5 space-y-2 max-w-2xl">
                  <p className="font-bold text-secondary text-sm">{faq.question}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed italic">{faq.answer.substring(0, 150)}...</p>
                </TableCell>
                <TableCell className="text-right pt-5 px-8">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-primary" onClick={() => { setSelectedFaq(faq); setFormData({ ...faq }); setIsEditDialogOpen(true); }}><Pencil className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => deleteFaq(faq.id)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl rounded-none border-none shadow-2xl p-0 overflow-hidden bg-[#F8F4ED]">
          <DialogHeader className="p-6 bg-secondary text-white">
            <DialogTitle className="text-xl font-black uppercase tracking-tighter italic">FAQ Editor</DialogTitle>
          </DialogHeader>
          <div className="p-8 space-y-6">
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1 space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest">Order</Label>
                <Input type="number" value={formData.order} onChange={(e) => setFormData({...formData, order: parseInt(e.target.value) || 0})} className="rounded-none border-muted h-12" />
              </div>
              <div className="col-span-3 space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest">The Question</Label>
                <Input value={formData.question} onChange={(e) => setFormData({...formData, question: e.target.value})} className="rounded-none border-muted h-12" placeholder="e.g. Is Tanzania safe for solo travelers?" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest">Expert Answer</Label>
              <Textarea value={formData.answer} onChange={(e) => setFormData({...formData, answer: e.target.value})} className="rounded-none border-muted min-h-[200px]" placeholder="Provide a detailed, helpful response..." />
            </div>
          </div>
          <DialogFooter className="p-6 bg-muted/30">
            <Button variant="outline" className="rounded-none" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSubmit} className="bg-primary hover:bg-secondary text-white rounded-none font-black uppercase tracking-widest text-[10px] px-12">
              <Save className="h-4 w-4 mr-2" /> Save FAQ
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}