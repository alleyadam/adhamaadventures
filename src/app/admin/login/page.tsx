'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Lock, Mail, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();
  const auth = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);

    try {
      // Use Firebase Authentication for production security.
      // Administrators should be created via the Firebase Console.
      await signInWithEmailAndPassword(auth, email, password);
      
      toast({ 
        title: "Access Granted", 
        description: "Welcome to the Adhama Management Portal." 
      });
      
      router.push('/admin');
    } catch (error: any) {
      toast({ 
        variant: "destructive", 
        title: "Authentication Failed", 
        description: "Invalid credentials or unauthorized access." 
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md overflow-hidden rounded-[2rem] border border-white/70 bg-white/95 shadow-2xl">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <div className="relative h-20 w-24 rounded-[1.5rem] bg-background p-3 shadow-sm">
              <Image src="/assets/logo.png" alt="Adhama Africa Adventures" fill className="object-contain p-2" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight text-secondary">Adhama Portal</CardTitle>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Administrator Authentication</p>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[11px] font-black uppercase tracking-[0.14em] text-muted-foreground">Admin Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="admin@adhamaadventures.co.tz" 
                  className="h-12 rounded-full border-secondary/20 pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  disabled={isPending}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[11px] font-black uppercase tracking-[0.14em] text-muted-foreground">Security Phrase</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  className="h-12 rounded-full border-secondary/20 pl-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                  disabled={isPending}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isPending} className="h-14 w-full rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] hover:bg-primary">
              {isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
              {isPending ? "VERIFYING..." : "ENTER PORTAL"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
