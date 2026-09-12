'use client';

import { useState, useRef, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Plus, Trash2, Pencil, Save, Upload, Database, Loader2, Search } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useFirestore, useCollection, useStorage } from '@/firebase';
import { collection, addDoc, serverTimestamp, query, orderBy, deleteDoc, doc, updateDoc, writeBatch, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { generateUniqueFileName, validateImageFile, translateStorageError } from '@/lib/storage-utils';
import Image from 'next/image';

const CIRCUITS = ['Northern Circuit', 'Southern Circuit', 'Western Circuit', 'Coastal & Islands', 'Major Hubs'];

export default function DestinationsAdminPage() {
  const db = useFirestore();
  const storage = useStorage();
  
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedDest, setSelectedDest] = useState<any>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const initialForm = { name: '', circuit: 'Northern Circuit', description: '', category: 'WILDLIFE', image: '', slug: '', title: '' };
  const [formData, setFormData] = useState(initialForm);

  const destQuery = useMemo(() => query(collection(db, 'destinations'), orderBy('name', 'asc')), [db]);
  const { data: destinations, loading } = useCollection<any>(destQuery);

  const handleFileUpload = async (file: File) => {
    const validation = validateImageFile(file);
    if (!validation.valid) {
      toast({ variant: "destructive", title: "Invalid File", description: validation.error });
      return;
    }

    setIsUploading(true);
    try {
      const fileName = generateUniqueFileName(file.name);
      const storagePath = `images/Adhama/upload/${fileName}`;
      const storageRef = ref(storage, storagePath);
      
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      
      setFormData(prev => ({ ...prev, image: url }));
      toast({ title: "Photo Ready" });
    } catch (err) {
      toast({ variant: "destructive", title: "Upload Failed", description: translateStorageError(err) });
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = () => {
    if (!formData.name) return;
    const slug = formData.slug || formData.name.toLowerCase().replace(/ /g, '-').replace(/[()]/g, '').replace(/&/g, 'and');
    const data = { ...formData, slug };
    
    if (selectedDest) {
      updateDoc(doc(db, 'destinations', selectedDest.id), { ...data, updatedAt: serverTimestamp() });
      toast({ title: "Destination Updated" });
    } else {
      addDoc(collection(db, 'destinations'), { ...data, createdAt: serverTimestamp() });
      toast({ title: "Destination Created" });
    }
    setIsEditDialogOpen(false);
    setFormData(initialForm);
  };

  const deleteDest = (id: string) => {
    if (!confirm('Remove this destination?')) return;
    deleteDoc(doc(db, 'destinations', id));
    toast({ title: "Removed" });
  };

  const filteredDestinations = destinations?.filter(d => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    d.circuit.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end">
        <div className="space-y-2">
          <h1 className="text-3xl font-black uppercase tracking-tighter italic text-secondary">Destinations Center</h1>
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Manage all regional circuit profiles</p>
        </div>
        <div className="flex gap-4">
            <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 rounded-none h-12"
                />
            </div>
            <Button onClick={() => { setSelectedDest(null); setFormData(initialForm); setIsEditDialogOpen(true); }} className="bg-primary hover:bg-secondary text-white rounded-none h-12 px-8 font-black uppercase tracking-widest text-[10px]">
              <Plus className="h-4 w-4 mr-2" /> Add Hub
            </Button>
        </div>
      </div>

      <Card className="rounded-none border-none shadow-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="text-[10px] font-black uppercase py-4">Location</TableHead>
              <TableHead className="text-[10px] font-black uppercase">Circuit</TableHead>
              <TableHead className="text-right px-8 text-[10px] font-black uppercase">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow><TableCell colSpan={3} className="text-center py-40 animate-pulse italic">Syncing...</TableCell></TableRow>
            ) : filteredDestinations?.map((dest) => (
              <TableRow key={dest.id} className="hover:bg-primary/5 border-b">
                <TableCell className="py-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-10 w-10 overflow-hidden bg-muted rounded-full">
                      {dest.image && <Image src={dest.image} alt="" fill className="object-cover" />}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-secondary text-sm">{dest.name}</span>
                      <span className="text-[8px] uppercase font-black text-muted-foreground">{dest.title}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-xs font-bold text-muted-foreground uppercase">{dest.circuit}</TableCell>
                <TableCell className="text-right px-8">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-primary" onClick={() => { setSelectedDest(dest); setFormData({ ...dest }); setIsEditDialogOpen(true); }}><Pencil className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => deleteDest(dest.id)}><Trash2 className="h-4 w-4" /></Button>
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
            <DialogTitle className="text-xl font-black uppercase tracking-tighter italic">{selectedDest ? 'Update Hub' : 'Register Hub'}</DialogTitle>
          </DialogHeader>
          <div className="p-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest">Landscape Photo</Label>
                <div 
                  className="border-2 border-dashed border-secondary/20 h-40 relative flex flex-col items-center justify-center cursor-pointer hover:bg-white transition-colors overflow-hidden"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {formData.image ? <Image src={formData.image} alt="" fill className="object-cover" /> : <div className="text-center"><Upload className="h-6 w-6 mx-auto mb-2 text-muted-foreground" /><span className="text-[8px] font-black uppercase">Upload Photo</span></div>}
                  {isUploading && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-black text-xs space-x-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Processing...</span>
                    </div>
                  )}
                  <input type="file" className="hidden" ref={fileInputRef} onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])} accept="image/*" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest">Hub Name</Label>
                <Input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="rounded-none h-12" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest">Regional Circuit</Label>
                <Select value={formData.circuit} onValueChange={(v) => setFormData({...formData, circuit: v})}>
                  <SelectTrigger className="rounded-none h-12"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {CIRCUITS.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest">Description</Label>
                <Textarea value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="rounded-none min-h-[120px]" />
              </div>
            </div>
          </div>
          <DialogFooter className="p-6 bg-muted/30">
            <Button variant="outline" className="rounded-none" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSubmit} disabled={isUploading} className="bg-primary hover:bg-secondary text-white rounded-none font-black uppercase tracking-widest text-[10px] px-12 h-12">
              <Save className="h-4 w-4 mr-2" /> Save Hub
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
