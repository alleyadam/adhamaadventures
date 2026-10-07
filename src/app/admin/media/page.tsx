'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  ArrowLeft, 
  Upload, 
  ImageIcon, 
  Trash2, 
  ExternalLink, 
  Loader2, 
  Search, 
  Copy, 
  Check, 
  FileWarning,
  RefreshCcw,
  Image as LucideImage
} from 'lucide-react';
import { useStorage, useFirestore, useCollection } from '@/firebase';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { collection, addDoc, serverTimestamp, query, orderBy, deleteDoc, doc, limit } from 'firebase/firestore';
import { toast } from '@/hooks/use-toast';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { 
  generateUniqueFileName, 
  validateImageFile, 
  translateStorageError, 
  formatBytes 
} from '@/lib/storage-utils';
import Image from 'next/image';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

type UploadSession = {
  id: string;
  file: File;
  status: 'pending' | 'uploading' | 'completed' | 'error';
  errorMessage?: string;
  previewUrl: string;
};

export default function MediaManagerPage() {
  const router = useRouter();
  const storage = useStorage();
  const db = useFirestore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [uploadSessions, setUploadSessions] = useState<Record<string, UploadSession>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const mediaQuery = query(collection(db, 'media'), orderBy('uploadedAt', 'desc'), limit(100));
  const { data: mediaItems, loading: isLoadingMedia } = useCollection<any>(mediaQuery);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newSessions: Record<string, UploadSession> = {};
    
    Array.from(files).forEach((file) => {
      const validation = validateImageFile(file);
      const sessionId = `${Date.now()}-${Math.random().toString(36).substring(7)}`;
      
      const session: UploadSession = {
        id: sessionId,
        file,
        status: validation.valid ? 'pending' : 'error',
        errorMessage: validation.error,
        previewUrl: URL.createObjectURL(file)
      };
      
      newSessions[sessionId] = session;
      if (validation.valid) {
        startUpload(session);
      }
    });

    setUploadSessions(prev => ({ ...prev, ...newSessions }));
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const startUpload = async (session: UploadSession) => {
    setUploadSessions(prev => ({
      ...prev,
      [session.id]: { ...prev[session.id], status: 'uploading' }
    }));

    try {
      const fileName = generateUniqueFileName(session.file.name);
      const storagePath = `images/Adhama/upload/${fileName}`;
      const storageRef = ref(storage, storagePath);
      
      const snapshot = await uploadBytes(storageRef, session.file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      const mediaAsset = {
        title: session.file.name,
        url: downloadURL,
        storagePath: storagePath,
        uploadedAt: serverTimestamp(),
        size: session.file.size,
        type: session.file.type,
        fileName: fileName
      };

      await addDoc(collection(db, 'media'), mediaAsset);
      
      setUploadSessions(prev => {
        const next = { ...prev };
        if (next[session.id]) next[session.id].status = 'completed';
        return next;
      });
      
      setTimeout(() => {
        setUploadSessions(prev => {
          const next = { ...prev };
          delete next[session.id];
          return next;
        });
      }, 3000);

      toast({ title: 'Success', description: `${session.file.name} is now live.` });
    } catch (err: any) {
      const readableError = translateStorageError(err);
      setUploadSessions(prev => ({
        ...prev,
        [session.id]: { ...prev[session.id], status: 'error', errorMessage: readableError }
      }));
      toast({ variant: 'destructive', title: 'Upload Failed', description: readableError });
    }
  };

  const handleDelete = async (item: any) => {
    if (!confirm('Permanently delete this asset?')) return;

    try {
      const storageRef = ref(storage, item.storagePath);
      await deleteObject(storageRef).catch(() => {});
      await deleteDoc(doc(db, 'media', item.id));
      toast({ title: 'Deleted', description: 'Asset removed.' });
    } catch (e) {
      toast({ variant: 'destructive', title: 'Delete Failed' });
    }
  };

  const copyToClipboard = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    toast({ title: 'Link Copied' });
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredMedia = mediaItems?.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeSessions = Object.values(uploadSessions);
  const isCurrentlyUploading = activeSessions.some(s => s.status === 'uploading');

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
          <h1 className="text-3xl font-black uppercase tracking-tighter italic">Media Management</h1>
          <p className="text-white/60 mt-2 uppercase tracking-widest text-[10px] font-bold">Secure and fast asset library for Adhama.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="grid lg:grid-cols-4 gap-8">
          
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-lg border-none rounded-none border-t-4 border-primary bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-xs font-black uppercase tracking-widest text-secondary flex items-center gap-2">
                  <Upload className="h-4 w-4 text-primary" /> Upload Center
                </CardTitle>
                <CardDescription className="text-[10px]">JPG, PNG, WEBP, GIF (Max 10MB)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div 
                  className={cn(
                    "border-2 border-dashed border-muted rounded-none p-10 flex flex-col items-center justify-center text-center transition-all cursor-pointer group",
                    isCurrentlyUploading ? "opacity-50 pointer-events-none" : "hover:border-primary/50 hover:bg-primary/5"
                  )}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="p-4 bg-muted/50 rounded-full group-hover:bg-primary/10 transition-colors mb-4">
                    <LucideImage className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
                  </div>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                    {isCurrentlyUploading ? "Processing..." : "Select Files"}
                  </p>
                  <input 
                    type="file" 
                    className="hidden" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    multiple
                  />
                </div>

                {activeSessions.length > 0 && (
                  <div className="space-y-4 pt-6 border-t border-muted/50 max-h-[400px] overflow-y-auto">
                    {activeSessions.map((session) => (
                      <div key={session.id} className="p-3 bg-muted/20 border border-muted rounded-none space-y-2 relative overflow-hidden group">
                        <div className="flex gap-3 items-center">
                          <div className="relative h-10 w-10 shrink-0 bg-white border border-muted overflow-hidden">
                            <Image src={session.previewUrl} alt="" fill className="object-cover" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-[10px] font-bold uppercase truncate pr-4">{session.file.name}</p>
                            <p className="text-[8px] text-muted-foreground font-mono">{formatBytes(session.file.size)}</p>
                          </div>
                        </div>

                        {session.status === 'uploading' && (
                          <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-tighter text-primary animate-pulse">
                            <Loader2 className="h-3 w-3 animate-spin" />
                            <span>Processing...</span>
                          </div>
                        )}

                        {session.status === 'completed' && (
                          <div className="flex items-center gap-1 text-[8px] font-black uppercase text-green-600">
                            <Check className="h-3 w-3" /> Successfully Live
                          </div>
                        )}

                        {session.status === 'error' && (
                          <div className="space-y-2">
                            <div className="flex items-center gap-1 text-[8px] font-black uppercase text-destructive">
                              <FileWarning className="h-3 w-3" /> Failed
                            </div>
                            <p className="text-[8px] text-destructive leading-tight italic bg-red-50 p-1 border border-red-100">{session.errorMessage}</p>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full h-6 text-[8px] font-black uppercase rounded-none"
                              onClick={() => startUpload(session)}
                            >
                              <RefreshCcw className="h-2 w-2 mr-1" /> Retry Upload
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="rounded-none border-none bg-secondary text-white p-6 shadow-xl">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-primary">Storage Standards</h4>
              <ul className="space-y-3 text-[10px] text-white/70 leading-relaxed list-disc pl-4">
                <li>Unique safe paths in `Adhama/upload/`.</li>
                <li>Atomic single-request uploads for high reliability.</li>
                <li>Optimized retrieval for the dashboard.</li>
              </ul>
            </Card>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-6 shadow-xl border-b border-muted">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search in library..." 
                  className="pl-10 rounded-none border-muted focus-visible:ring-primary h-12 bg-muted/10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-secondary flex items-center gap-4">
                <span className="bg-primary/10 text-primary px-3 py-1 border border-primary/20">
                  {mediaItems?.length || 0} Assets
                </span>
                {isLoadingMedia && <Loader2 className="h-4 w-4 animate-spin text-primary" />}
              </div>
            </div>

            {isLoadingMedia ? (
              <div className="flex flex-col items-center justify-center py-32 space-y-4">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <p className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">Syncing Library...</p>
              </div>
            ) : filteredMedia?.length === 0 ? (
              <div className="text-center py-40 bg-white border-2 border-dashed rounded-none">
                <ImageIcon className="h-16 w-16 mx-auto text-muted mb-4 opacity-20" />
                <p className="text-muted-foreground italic uppercase text-xs tracking-[0.4em] font-black">No matching assets.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMedia?.map((item: any) => (
                  <Card key={item.id} className="overflow-hidden group border-none shadow-md hover:shadow-2xl transition-all h-fit rounded-none bg-white border-t-2 border-transparent hover:border-primary">
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <Image 
                        src={item.url} 
                        alt={item.title} 
                        fill 
                        className="object-cover transition-transform group-hover:scale-110" 
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button 
                          size="icon" 
                          variant="secondary" 
                          className="rounded-none h-10 w-10 hover:bg-primary hover:text-white" 
                          onClick={() => window.open(item.url, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="icon" 
                          variant="secondary" 
                          className="rounded-none h-10 w-10 hover:bg-primary hover:text-white" 
                          onClick={() => copyToClipboard(item.url, item.id)}
                        >
                          {copiedId === item.id ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                        </Button>
                        <Button 
                          size="icon" 
                          variant="destructive" 
                          className="rounded-none h-10 w-10" 
                          onClick={() => handleDelete(item)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 border-t border-muted/50 bg-white">
                      <p className="text-[10px] font-black text-secondary truncate uppercase tracking-tighter mb-1" title={item.title}>
                        {item.title}
                      </p>
                      <div className="flex justify-between items-center text-[8px] text-muted-foreground font-bold uppercase tracking-widest">
                        <span>{item.uploadedAt ? format(item.uploadedAt.toDate(), 'MMM dd, yyyy') : '...'}</span>
                        <span className="opacity-50">{formatBytes(item.size || 0)}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
