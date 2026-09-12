'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Newspaper, Plus, Trash2, Pencil, Save, Upload, Loader2, Search } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useFirestore, useCollection, useStorage } from '@/firebase';
import { collection, addDoc, serverTimestamp, query, orderBy, deleteDoc, doc, updateDoc, limit } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { generateUniqueFileName, validateImageFile, translateStorageError } from '@/lib/storage-utils';
import Image from 'next/image';
import { format } from 'date-fns';

export default function BlogAdminPage() {
  const router = useRouter();
  const db = useFirestore();
  const storage = useStorage();
  
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const blogQuery = query(collection(db, 'blog_posts'), orderBy('createdAt', 'desc'), limit(50));
  const { data: posts, loading } = useCollection<any>(blogQuery);

  const initialForm = { title: '', category: 'Cultural Immersion', author: 'Adhama Team', excerpt: '', content: '', image: '' };
  const [formData, setFormData] = useState(initialForm);

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
      toast({ title: "Banner Uploaded" });
    } catch (error: any) {
      toast({ variant: "destructive", title: "Upload Failed", description: translateStorageError(error) });
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.content) return;

    if (selectedPost) {
      const updateData = { ...formData, updatedAt: serverTimestamp() };
      updateDoc(doc(db, 'blog_posts', selectedPost.id), updateData);
      toast({ title: "Post Updated" });
    } else {
      const newData = { ...formData, createdAt: serverTimestamp(), comments: 0 };
      addDoc(collection(db, 'blog_posts'), newData);
      toast({ title: "Post Published" });
    }
    setIsEditDialogOpen(false);
    setSelectedPost(null);
    setFormData(initialForm);
  };

  const startEdit = (post: any) => {
    setSelectedPost(post);
    setFormData({ ...post });
    setIsEditDialogOpen(true);
  };

  const deletePost = (id: string) => {
    if (!confirm('Delete this article?')) return;
    deleteDoc(doc(db, 'blog_posts', id));
    toast({ title: "Article Removed" });
  };

  const filteredPosts = posts?.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end">
        <div className="space-y-2">
          <h1 className="text-3xl font-black uppercase tracking-tighter italic text-secondary">Blog Center</h1>
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Manage your editorial stories</p>
        </div>
        <Button 
          onClick={() => { setSelectedPost(null); setFormData(initialForm); setIsEditDialogOpen(true); }}
          className="bg-primary hover:bg-secondary text-white rounded-none h-12 px-8 font-black uppercase tracking-widest text-[10px]"
        >
          <Plus className="h-4 w-4 mr-2" /> New Article
        </Button>
      </div>

      <Card className="rounded-none border-none shadow-xl overflow-hidden">
        <CardHeader className="bg-white border-b py-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search articles..." 
              className="pl-10 rounded-none border-muted h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardHeader>
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="text-[10px] font-black uppercase py-4">Article</TableHead>
              <TableHead className="text-[10px] font-black uppercase">Category</TableHead>
              <TableHead className="text-[10px] font-black uppercase text-center">Date</TableHead>
              <TableHead className="text-[10px] font-black uppercase text-right px-8">Manage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow><TableCell colSpan={4} className="text-center py-20 animate-pulse">Syncing...</TableCell></TableRow>
            ) : filteredPosts?.map((post) => (
              <TableRow key={post.id} className="hover:bg-primary/5 border-b">
                <TableCell className="py-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-20 overflow-hidden bg-muted">
                      {post.image && <Image src={post.image} alt="" fill className="object-cover" />}
                    </div>
                    <div>
                      <p className="font-bold text-secondary text-sm">{post.title}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest">by {post.author}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell><span className="text-[10px] font-black uppercase tracking-tighter">{post.category}</span></TableCell>
                <TableCell className="text-center text-xs text-muted-foreground">
                  {post.createdAt ? format(post.createdAt.toDate(), 'MMM dd, yyyy') : '...'}
                </TableCell>
                <TableCell className="text-right px-8">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-primary" onClick={() => startEdit(post)}><Pencil className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => deletePost(post.id)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-4xl rounded-none border-none shadow-2xl p-0 overflow-hidden bg-[#F8F4ED]">
          <DialogHeader className="p-6 bg-secondary text-white">
            <DialogTitle className="text-xl font-black uppercase tracking-tighter italic">
              {selectedPost ? 'Edit Article' : 'Draft New Article'}
            </DialogTitle>
          </DialogHeader>
          <div className="p-8 grid md:grid-cols-2 gap-8 overflow-y-auto max-h-[70vh]">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest">Main Banner</Label>
                <div 
                  className="border-2 border-dashed border-secondary/20 h-48 relative flex flex-col items-center justify-center cursor-pointer hover:bg-white transition-colors overflow-hidden"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {formData.image ? <Image src={formData.image} alt="" fill className="object-cover" /> : <div className="text-center"><Upload className="h-8 w-8 mx-auto text-muted-foreground" /><span className="text-[10px] font-bold uppercase block">Upload Banner</span></div>}
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
                <Label className="text-[10px] font-black uppercase tracking-widest">Article Title</Label>
                <Input value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="rounded-none h-12" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest">SEO Excerpt</Label>
                <Textarea value={formData.excerpt} onChange={(e) => setFormData({...formData, excerpt: e.target.value})} className="rounded-none min-h-[100px]" />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest">Full Content</Label>
                <Textarea value={formData.content} onChange={(e) => setFormData({...formData, content: e.target.value})} className="rounded-none min-h-[250px]" />
              </div>
            </div>
          </div>
          <DialogFooter className="p-6 bg-muted/30">
            <Button variant="outline" className="rounded-none" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSubmit} disabled={isUploading} className="bg-primary hover:bg-secondary text-white rounded-none font-black uppercase tracking-widest text-[10px] px-12">
              <Save className="h-4 w-4 mr-2" /> Save Story
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
