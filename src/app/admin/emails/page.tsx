'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Mail, Send, Inbox, Search, Clock, User, MessageSquare } from 'lucide-react';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, orderBy, limit } from 'firebase/firestore';
import { format } from 'date-fns';
import { sendEmail } from '@/app/actions/mail';
import { toast } from '@/hooks/use-toast';

export default function EmailCenterPage() {
  const router = useRouter();
  const db = useFirestore();
  const [selectedEnquiry, setSelectedEnquiry] = useState<any>(null);
  const [replyText, setReplyText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Unified Inbox: Fetch both enquiries and contact messages
  const enquiriesQuery = query(collection(db, 'enquiries'), orderBy('createdAt', 'desc'), limit(100));
  const contactsQuery = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'), limit(100));
  
  const { data: enquiries, loading: enqLoading } = useCollection<any>(enquiriesQuery);
  const { data: contacts, loading: conLoading } = useCollection<any>(contactsQuery);

  // Consolidate and filter message sources
  const inbox = useMemo(() => {
    const combined = [...(enquiries || []), ...(contacts || [])].map(msg => ({
      ...msg,
      sourceType: msg.type === 'safari_enquiry' ? 'Enquiry' : 'Contact'
    }));
    
    return combined.sort((a, b) => {
      const timeA = a.createdAt?.seconds || 0;
      const timeB = b.createdAt?.seconds || 0;
      return timeB - timeA;
    }).filter(msg => 
      msg.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
      msg.message?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [enquiries, contacts, searchQuery]);

  const handleSendReply = async () => {
    if (!replyText || !selectedEnquiry) return;
    
    setIsSending(true);
    const res = await sendEmail({
      to: selectedEnquiry.email,
      subject: `Re: Your Adhama Safari Inquiry`,
      text: replyText,
      html: `<div style="font-family: serif; padding: 20px; color: #241A14;">${replyText.replace(/\n/g, '<br/>')}</div>`
    });

    if (res.success) {
      toast({ title: "Response Dispatched", description: `Message sent to ${selectedEnquiry.name}.` });
      setReplyText('');
    } else {
      toast({ variant: "destructive", title: "Dispatch Failed", description: "SMTP relay is currently unavailable." });
    }
    setIsSending(false);
  };

  return (
    <div className="min-h-screen bg-[#fdfaf5] flex flex-col">
      <div className="bg-secondary text-white py-8 border-b-4 border-primary shrink-0">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => router.push('/admin')}
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <div>
              <h1 className="text-xl font-black uppercase tracking-tighter italic">Adhama Inbox</h1>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Unified Lead Management</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow container mx-auto px-4 py-8 overflow-hidden">
        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-220px)]">
          
          <Card className="lg:col-span-1 rounded-none border-none shadow-xl flex flex-col overflow-hidden bg-white">
            <CardHeader className="border-b py-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground" />
                <Input 
                  placeholder="Search leads..." 
                  className="pl-9 h-10 rounded-none text-xs bg-muted/20 border-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <div className="flex-grow overflow-y-auto">
              {enqLoading || conLoading ? (
                <div className="p-8 text-center text-[10px] font-black uppercase animate-pulse">Syncing...</div>
              ) : inbox.length === 0 ? (
                <div className="p-20 text-center text-xs text-muted-foreground italic">No messages found.</div>
              ) : inbox.map((mail) => (
                <div 
                  key={mail.id} 
                  onClick={() => setSelectedEnquiry(mail)}
                  className={`p-5 border-b cursor-pointer transition-colors relative ${selectedEnquiry?.id === mail.id ? 'bg-primary/5 border-l-4 border-l-primary' : 'bg-white hover:bg-muted/10'}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xs font-black text-secondary truncate uppercase pr-4">{mail.name}</h4>
                    <span className="text-[8px] font-bold text-muted-foreground">{mail.createdAt ? format(mail.createdAt.toDate(), 'MMM dd') : '...'}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary/10 text-primary px-2 py-0.5 text-[8px] font-black uppercase tracking-tighter">{mail.sourceType}</span>
                    {mail.country && <span className="text-[8px] font-bold text-muted-foreground">🌍 {mail.country}</span>}
                  </div>
                  <p className="text-[10px] text-muted-foreground line-clamp-2 leading-relaxed italic">"{mail.message || 'No details'}"</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="lg:col-span-2 rounded-none border-none shadow-xl flex flex-col overflow-hidden bg-white">
            {selectedEnquiry ? (
              <>
                <div className="p-8 border-b bg-muted/5 flex justify-between items-start">
                  <div className="flex items-center gap-5">
                    <div className="h-14 w-14 bg-secondary text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg border-2 border-white">
                      {selectedEnquiry.name?.[0]}
                    </div>
                    <div>
                      <h2 className="text-2xl font-serif italic text-secondary leading-tight">{selectedEnquiry.name}</h2>
                      <p className="text-xs text-muted-foreground font-medium mt-1">{selectedEnquiry.email} • {selectedEnquiry.phone || 'No Phone'}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-1">Incoming Lead</p>
                    <div className="bg-primary text-white px-3 py-1 text-[10px] font-black uppercase">{selectedEnquiry.sourceType}</div>
                  </div>
                </div>

                <div className="flex-grow p-10 overflow-y-auto space-y-10">
                  <div className="bg-[#F8F4ED] p-8 rounded-none border-l-4 border-primary italic text-sm text-foreground leading-relaxed shadow-sm">
                    "{selectedEnquiry.message || 'No additional details provided.'}"
                  </div>
                  
                  <div className="space-y-6 pt-10 border-t">
                    <div className="flex items-center gap-2">
                       <MessageSquare className="h-4 w-4 text-primary" />
                       <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Compose Response</Label>
                    </div>
                    <Textarea 
                      placeholder="Address the traveler's specific safari interests here..." 
                      className="min-h-[200px] rounded-none focus-visible:ring-primary border-muted text-sm leading-relaxed"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                    />
                    <div className="flex justify-end">
                      <Button 
                        disabled={!replyText || isSending}
                        onClick={handleSendReply}
                        className="bg-primary hover:bg-secondary text-white rounded-none px-16 h-14 font-black text-[10px] uppercase tracking-[0.3em] shadow-xl shadow-primary/20"
                      >
                        {isSending ? 'Sending...' : 'Dispatch Reply'} <Send className="ml-3 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-grow flex flex-col items-center justify-center text-center p-20 space-y-6 opacity-20">
                <Inbox className="h-20 w-20 text-primary" strokeWidth={1} />
                <p className="text-sm font-black uppercase tracking-[0.4em]">Select a lead to review</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}