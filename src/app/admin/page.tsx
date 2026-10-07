'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Compass, Plus, Trash2, Mail, BarChart, Pencil, Save, Upload, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useFirestore, useCollection, useStorage } from '@/firebase';
import { collection, addDoc, serverTimestamp, query, orderBy, limit, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { generateUniqueFileName, validateImageFile, translateStorageError } from '@/lib/storage-utils';
import Image from 'next/image';
import { format } from 'date-fns';

export default function SafariInventoryPage() {
  const db = useFirestore();
  const storage = useStorage();

  const [isPackageDialogOpen, setIsPackageDialogOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const initialForm = { title: '', category: 'Safari', price: 0, duration: '7 Days', image: '', destination: 'Northern Circuit', featured: false };
  const [formData, setFormData] = useState(initialForm);

  // Queries are memoized by the useCollection hook automatically now
  const toursQuery = query(collection(db, 'tours'), orderBy('createdAt', 'desc'));
  const { data: tours, loading: toursLoading } = useCollection<any>(toursQuery);

  const enquiriesQuery = query(collection(db, 'enquiries'), orderBy('createdAt', 'desc'), limit(5));
  const { data: recentEnquiries } = useCollection(enquiriesQuery);

  const visitsQuery = query(collection(db, 'visitor_logs'), orderBy('timestamp', 'desc'), limit(10));
  const { data: recentVisits } = useCollection(visitsQuery);

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
      toast({ title: "Image Uploaded" });
    } catch (error) {
      toast({ variant: "destructive", title: "Upload Failed", description: translateStorageError(error) });
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async () => {
    if (!formData.title) return;
    try {
      if (selectedPackage) {
        await updateDoc(doc(db, 'tours', selectedPackage.id), { ...formData, updatedAt: serverTimestamp() });
        toast({ title: "Package Updated" });
      } else {
        await addDoc(collection(db, 'tours'), { ...formData, createdAt: serverTimestamp() });
        toast({ title: "Package Published" });
      }
      setIsPackageDialogOpen(false);
      setFormData(initialForm);
    } catch (e) { toast({ variant: "destructive", title: "Error Saving" }); }
  };

  const deletePackage = async (id: string) => {
    if (!confirm('Permanently remove this package?')) return;
    await deleteDoc(doc(db, 'tours', id));
    toast({ title: "Package Removed" });
  };

  return (
    <div className="p-8 space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-primary text-white p-6 rounded-none shadow-xl border-none">
          <div className="flex items-center justify-between">
            <div><p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Active Leads</p><h4 className="text-3xl font-black">{recentEnquiries?.length || 0}</h4></div>
            <Mail className="h-10 w-10 opacity-20" />
          </div>
        </Card>
        <Card className="bg-secondary text-white p-6 rounded-none shadow-xl border-none">
          <div className="flex items-center justify-between">
            <div><p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Site Traffic</p><h4 className="text-3xl font-black">{recentVisits?.length || 0}</h4></div>
            <BarChart className="h-10 w-10 opacity-20" />
          </div>
        </Card>
        <Card className="bg-white p-6 rounded-none border border-secondary/10 shadow-xl">
          <div className="flex items-center justify-between">
            <div><p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Tour Inventory</p><h4 className="text-3xl font-black text-secondary">{tours?.length || 0}</h4></div>
            <Compass className="h-10 w-10 text-primary opacity-20" />
          </div>
        </Card>
      </div>

      <div className="flex justify-between items-end">
        <div className="space-y-2">
          <h1 className="text-3xl font-black uppercase tracking-tighter italic text-secondary leading-none">Safari Inventory</h1>
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Live CMS synchronization</p>
        </div>
        <Button 
          onClick={() => { setSelectedPackage(null); setFormData(initialForm); setIsPackageDialogOpen(true); }}
          className="bg-primary hover:bg-secondary text-white rounded-none h-12 px-8 font-black uppercase tracking-widest text-[10px] shadow-xl"
        >
          <Plus className="h-4 w-4 mr-2" /> Publish New Package
        </Button>
      </div>

      <Card className="rounded-none border-none shadow-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30 border-none">
              <TableHead className="text-[10px] font-black uppercase py-4">Experience</TableHead>
              <TableHead className="text-[10px] font-black uppercase">Region</TableHead>
              <TableHead className="text-[10px] font-black uppercase text-center">Status</TableHead>
              <TableHead className="text-[10px] font-black uppercase text-right">Price (USD)</TableHead>
              <TableHead className="text-[10px] font-black uppercase text-right px-8">Manage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {toursLoading ? (
              <TableRow><TableCell colSpan={5} className="text-center py-40 animate-pulse italic text-muted-foreground uppercase text-xs tracking-widest">Updating Inventory...</TableCell></TableRow>
            ) : tours?.length === 0 ? (
              <TableRow><TableCell colSpan={5} className="text-center py-20 text-muted-foreground italic">No tours published. Begin your inventory.</TableCell></TableRow>
            ) : tours?.map((tour) => (
              <TableRow key={tour.id} className="hover:bg-primary/5 border-b transition-colors">
                <TableCell className="py-5">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-20 bg-muted overflow-hidden border">
                      {tour.image && <Image src={tour.image} alt="" fill className="object-cover" />}
                    </div>
                    <span className="font-bold text-secondary text-sm">{tour.title}</span>
                  </div>
                </TableCell>
                <TableCell><span className="text-[10px] font-black uppercase tracking-tighter text-primary">{tour.destination}</span></TableCell>
                <TableCell className="text-center">
                   {tour.featured ? (
                     <span className="bg-accent/10 text-accent px-2 py-1 text-[8px] font-black uppercase">Home Featured</span>
                   ) : (
                     <span className="bg-muted text-muted-foreground px-2 py-1 text-[8px] font-black uppercase">Standard</span>
                   )}
                </TableCell>
                <TableCell className="text-right font-black text-secondary">${tour.price.toLocaleString()}</TableCell>
                <TableCell className="text-right px-8">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-primary hover:bg-primary/10" onClick={() => { setSelectedPackage(tour); setFormData({ ...tour }); setIsPackageDialogOpen(true); }}><Pencil className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-destructive hover:bg-destructive/10" onClick={() => deletePackage(tour.id)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Dialog open={isPackageDialogOpen} onOpenChange={setIsPackageDialogOpen}>
        <DialogContent className="max-w-2xl rounded-none border-none shadow-2xl p-0 overflow-hidden bg-[#F8F4ED]">
          <DialogHeader className="p-6 bg-secondary text-white">
            <DialogTitle className="text-xl font-black uppercase tracking-tighter italic">{selectedPackage ? 'Update Experience' : 'Publish Experience'}</DialogTitle>
          </DialogHeader>
          <div className="p-8 grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Adventure Banner</Label>
                <div 
                  className="border-2 border-dashed border-secondary/20 h-44 relative flex flex-col items-center justify-center cursor-pointer hover:bg-white transition-colors overflow-hidden"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {formData.image ? <Image src={formData.image} alt="" fill className="object-cover" /> : <div className="text-center"><Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" /><span className="text-[10px] font-black uppercase tracking-widest">Upload Photo</span></div>}
                  {isUploading && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-black text-xs space-x-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Syncing...</span>
                    </div>
                  )}
                  <input type="file" className="hidden" ref={fileInputRef} onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])} accept="image/*" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Package Headline</Label>
                <Input value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="rounded-none h-12 border-muted" placeholder="e.g. 7-Day Serengeti Migration" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Base Rate (USD)</Label>
                  <Input type="number" value={formData.price} onChange={(e) => setFormData({...formData, price: parseInt(e.target.value) || 0})} className="rounded-none h-12 border-muted" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Length</Label>
                  <Input value={formData.duration} onChange={(e) => setFormData({...formData, duration: e.target.value})} className="rounded-none h-12 border-muted" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Adventure Category</Label>
                <Select value={formData.category} onValueChange={(v) => setFormData({...formData, category: v})}>
                  <SelectTrigger className="rounded-none h-12 border-muted"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Safari">Wildlife Safari</SelectItem>
                    <SelectItem value="Beach">Zanzibar Island</SelectItem>
                    <SelectItem value="Cultural">Local Immersion</SelectItem>
                    <SelectItem value="Trekking">Mountain Trekking</SelectItem>
                    <SelectItem value="Honeymoon">Wilderness Romance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-3 pt-4">
                 <input 
                   type="checkbox" 
                   id="featured"
                   checked={formData.featured}
                   onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                   className="h-4 w-4 accent-primary"
                 />
                 <Label htmlFor="featured" className="text-[10px] font-black uppercase tracking-widest text-secondary cursor-pointer">Feature on Home Page</Label>
              </div>
            </div>
          </div>
          <DialogFooter className="p-6 bg-muted/30 border-t">
            <Button variant="outline" className="rounded-none" onClick={() => setIsPackageDialogOpen(false)}>Discard</Button>
            <Button onClick={handleSubmit} disabled={isUploading} className="bg-primary hover:bg-secondary text-white rounded-none font-black uppercase tracking-[0.2em] text-[10px] px-12 h-14 shadow-lg shadow-primary/20">
              {isPackageDialogOpen && selectedPackage ? <Save className="h-4 w-4 mr-3" /> : <Compass className="h-4 w-4 mr-3" />}
              {selectedPackage ? 'Update Live' : 'Publish Live'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}