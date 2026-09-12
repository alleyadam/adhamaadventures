
'use client';

import PageHeader from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { format } from 'date-fns';
import Image from 'next/image';

export default function BlogPage() {
  const db = useFirestore();
  const blogQuery = query(collection(db, 'blog_posts'), orderBy('createdAt', 'desc'));
  const { data: posts, loading } = useCollection<any>(blogQuery);

  return (
    <div className="bg-background">
      <PageHeader
        title="Adhama Africa Journal"
        subtitle="Insights, stories, and unscripted moments from our community-based travel programs."
      />
      <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <h2 className="text-3xl font-black text-secondary tracking-tighter uppercase mb-8 border-b-2 border-primary/20 pb-4 italic">
              Latest Stories
            </h2>
            
            {loading ? (
              <div className="flex justify-center py-20"><Loader2 className="h-10 w-10 animate-spin text-primary" /></div>
            ) : posts?.length === 0 ? (
              <div className="py-20 text-center italic text-muted-foreground">The journal is currently quiet. Check back soon for new stories.</div>
            ) : (
              <div className="grid gap-12">
                {posts?.map((post, idx) => (
                  <Card key={idx} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group flex flex-col md:flex-row bg-white rounded-none">
                    <div className="bg-secondary text-white p-6 flex flex-col items-center justify-center min-w-[120px] text-center shrink-0">
                      <span className="text-2xl font-black leading-none">{post.createdAt ? format(post.createdAt.toDate(), 'dd') : '...'}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest">{post.createdAt ? format(post.createdAt.toDate(), 'MMM') : '...'}</span>
                    </div>
                    <div className="p-8 space-y-4 flex-grow">
                      <div className="flex flex-wrap items-center gap-4 text-[10px] font-black uppercase tracking-widest text-primary italic">
                        <span>{post.category}</span>
                        <span className="text-muted-foreground/30 font-normal">|</span>
                        <span className="text-muted-foreground">{post.author}</span>
                      </div>
                      <h3 className="text-2xl font-serif text-secondary leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Button variant="link" asChild className="p-0 h-auto text-primary font-bold uppercase tracking-widest text-[10px]">
                        <Link href={`/blog/${post.id}`}>READ FULL ARTICLE →</Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-12">
            <div className="space-y-6">
              <h3 className="text-xl font-black text-secondary tracking-tight uppercase border-b-2 border-primary/20 pb-3 italic">
                Search
              </h3>
              <div className="relative">
                <Input placeholder="Search the journal..." className="rounded-none border-secondary/20 pr-10 h-12" />
                <Button size="icon" variant="ghost" className="absolute right-0 top-0 h-full text-muted-foreground hover:text-primary">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-black text-secondary tracking-tight uppercase border-b-2 border-primary/20 pb-3 italic">
                Recent Entries
              </h3>
              <ul className="space-y-6">
                {posts?.slice(0, 5).map((post, idx) => (
                  <li key={idx} className="group">
                    <Link href={`/blog/${post.id}`} className="flex flex-col gap-2">
                      <span className="text-sm font-bold text-secondary group-hover:text-primary transition-colors leading-tight uppercase tracking-tight">
                        {post.title}
                      </span>
                      <span className="text-[9px] text-muted-foreground uppercase font-black tracking-widest">
                        {post.createdAt ? format(post.createdAt.toDate(), 'MMMM dd, yyyy') : '...'}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
