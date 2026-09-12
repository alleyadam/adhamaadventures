'use client';

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { usePathname } from 'next/navigation';

export default function WhatsAppButton() {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');
  
  if (isAdmin) return null;

  return (
    <a
      href="https://api.whatsapp.com/send/?phone=255753300602&text=Hello%20Adhama,%20I'm%20interested%20in%20planning%20a%20Tanzania%20safari."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-4 z-[80] flex items-center justify-center rounded-full border border-white/10 bg-[#25D366] p-3 text-white shadow-2xl transition-all duration-500 hover:scale-110 hover:bg-white hover:text-[#25D366] group sm:bottom-6 sm:right-6 sm:p-4"
      aria-label="Start planning on WhatsApp"
    >
      <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
      <span className="absolute right-full mr-6 top-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-3 rounded-none shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap border-b-2 border-accent translate-x-4 group-hover:translate-x-0 pointer-events-none font-sans hidden sm:block">
        Start planning on WhatsApp
      </span>
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10" />
    </a>
  );
}
