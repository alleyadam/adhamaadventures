'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar';
import AdminSidebar from '@/components/layout/AdminSidebar';
import { Loader2, User } from 'lucide-react';
import { useUser } from '@/firebase';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, loading: authLoading } = useUser();

  // Protect administrative routes using real Firebase Authentication
  useEffect(() => {
    if (!authLoading && !user && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [user, authLoading, pathname, router]);

  // Handle loading and login states
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (authLoading || !user) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#F8F4ED]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground italic">Verifying credentials...</p>
        </div>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-background">
        <AdminSidebar />
        <SidebarInset className="flex flex-col flex-1 overflow-hidden">
          <header className="flex h-[4.5rem] shrink-0 items-center justify-between border-b border-border/60 bg-white/90 px-6 shadow-sm backdrop-blur-xl md:px-8">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-secondary" />
              <div className="h-4 w-[1px] bg-border mx-2" />
              <h2 className="text-[11px] font-black uppercase tracking-[0.16em] text-muted-foreground">
                Management / <span className="text-secondary">{pathname.split('/').pop() || 'Dashboard'}</span>
              </h2>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end mr-4">
                <span className="text-[11px] font-black text-secondary leading-none uppercase">{user.email?.split('@')[0]}</span>
                <span className="mt-1 text-[10px] font-bold text-primary uppercase tracking-[0.12em]">Verified Admin</span>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                <User className="h-5 w-5 text-primary" />
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto bg-background">
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
