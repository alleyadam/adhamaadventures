'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { 
  CheckCircle2, 
  XCircle, 
  Trash2, 
  Star, 
  User, 
  MapPin, 
  Clock,
  MessageSquareQuote,
  Eye,
  EyeOff,
  Loader2
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, orderBy, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { format } from 'date-fns';

export default function TestimonialsAdminPage() {
  const db = useFirestore();
  const testimonialQuery = query(collection(db, 'testimonials'), orderBy('createdAt', 'desc'));
  const { data: testimonials, loading } = useCollection<any>(testimonialQuery);

  const toggleApproval = async (testimonial: any) => {
    const newStatus = testimonial.status === 'approved' ? 'pending' : 'approved';
    try {
      await updateDoc(doc(db, 'testimonials', testimonial.id), { status: newStatus });
      toast({ 
        title: newStatus === 'approved' ? "Published to Site" : "Removed from Site",
        description: newStatus === 'approved' ? "This story is now visible to all visitors." : "This story has been hidden from the public gallery."
      });
    } catch (e) {
      toast({ variant: "destructive", title: "Update Failed" });
    }
  };

  const deleteTestimonial = async (id: string) => {
    if (!confirm('Permanently remove this review? This action is irreversible.')) return;
    try {
      await deleteDoc(doc(db, 'testimonials', id));
      toast({ title: "Review Deleted" });
    } catch (e) {
      toast({ variant: "destructive", title: "Delete Failed" });
    }
  };

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end">
        <div className="space-y-2">
          <h1 className="text-3xl font-black uppercase tracking-tighter italic text-secondary flex items-center gap-4">
            <MessageSquareQuote className="h-8 w-8 text-primary" /> Testimonials Verification
          </h1>
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Moderate client stories before they go live</p>
        </div>
        <div className="bg-white px-4 py-2 border shadow-sm flex items-center gap-2">
           <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
           <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Syncing with Live Site</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-primary/5 border-primary/20 rounded-none p-6 group hover:bg-primary/10 transition-colors">
          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Pending Review</p>
          <h4 className="text-3xl font-black text-secondary">{testimonials?.filter(t => t.status === 'pending').length || 0}</h4>
        </Card>
        <Card className="bg-secondary/5 border-secondary/20 rounded-none p-6 group hover:bg-secondary/10 transition-colors">
          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Publicly Visible</p>
          <h4 className="text-3xl font-black text-secondary">{testimonials?.filter(t => t.status === 'approved').length || 0}</h4>
        </Card>
      </div>

      <Card className="rounded-none border-none shadow-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="text-[10px] font-black uppercase py-4">Traveller</TableHead>
              <TableHead className="text-[10px] font-black uppercase">Story</TableHead>
              <TableHead className="text-[10px] font-black uppercase text-center">Live on Site</TableHead>
              <TableHead className="text-right px-8 text-[10px] font-black uppercase">Manage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-32 animate-pulse">
                  <div className="flex flex-col items-center gap-4">
                    <Loader2 className="h-10 w-10 animate-spin text-primary" />
                    <span className="font-serif italic text-xl text-muted-foreground">Loading verified stories...</span>
                  </div>
                </TableCell>
              </TableRow>
            ) : testimonials?.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-20 text-muted-foreground italic">
                  No submissions have been received yet.
                </TableCell>
              </TableRow>
            ) : testimonials?.map((item) => (
              <TableRow key={item.id} className="hover:bg-primary/5 border-b align-top transition-colors">
                <TableCell className="py-6">
                  <div className="space-y-1">
                    <p className="font-bold text-secondary text-sm flex items-center gap-2">
                      <User className="h-3 w-3 text-primary" /> {item.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground uppercase flex items-center gap-1">
                      <MapPin className="h-2 w-2" /> {item.country}
                    </p>
                    <p className="text-[10px] text-primary font-bold italic">{item.trip}</p>
                  </div>
                </TableCell>
                <TableCell className="py-6 max-w-md">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-2 w-2 ${i < (item.rating || 5) ? 'fill-accent text-accent' : 'text-muted'}`} />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed italic">"{item.text}"</p>
                  <p className="text-[8px] text-muted-foreground mt-2 flex items-center gap-1">
                    <Clock className="h-2 w-2" /> Submitted {item.createdAt ? format(item.createdAt.toDate(), 'MMM dd, yyyy') : '...'}
                  </p>
                </TableCell>
                <TableCell className="text-center py-6">
                  {item.status === 'approved' ? (
                    <div className="flex flex-col items-center gap-1">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-none text-[8px] font-black uppercase tracking-widest flex items-center gap-1">
                        <Eye className="h-2 w-2" /> Visible
                      </span>
                      <span className="text-[8px] text-muted-foreground italic">Live on Site</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-1">
                      <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-none text-[8px] font-black uppercase tracking-widest flex items-center gap-1">
                        <EyeOff className="h-2 w-2" /> Hidden
                      </span>
                      <span className="text-[8px] text-muted-foreground italic">Private</span>
                    </div>
                  )}
                </TableCell>
                <TableCell className="text-right py-6 px-8">
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className={`h-10 w-10 rounded-none transition-all ${item.status === 'approved' ? 'text-orange-500 hover:bg-orange-50' : 'text-green-500 hover:bg-green-50'}`}
                      onClick={() => toggleApproval(item)}
                      title={item.status === 'approved' ? "Unpublish from Site" : "Publish to Site"}
                    >
                      {item.status === 'approved' ? <XCircle className="h-5 w-5" /> : <CheckCircle2 className="h-5 w-5" />}
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-10 w-10 text-destructive hover:bg-destructive/5 rounded-none" 
                      onClick={() => deleteTestimonial(item.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}