'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (isAdmin) return null;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-24 right-4 z-[100] p-3 bg-white text-primary rounded-full shadow-2xl transition-all duration-500 hover:bg-primary hover:text-white border border-primary/10 group sm:right-6 sm:p-4",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" />
      <span className="absolute right-full mr-6 top-1/2 -translate-y-1/2 bg-secondary text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-none shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap pointer-events-none">
        Back to top
      </span>
    </button>
  );
}
