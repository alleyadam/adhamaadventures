'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { 
  Compass, 
  BarChart, 
  Mail, 
  CalendarDays, 
  ImageIcon, 
  FileText, 
  CreditCard, 
  LogOut,
  LayoutDashboard,
  PenTool,
  MapPin,
  Newspaper,
  HelpCircle,
  Leaf,
  Sparkles,
  MessageSquareQuote
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from '@/components/ui/sidebar';

const menuItems = [
  { title: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
  { title: 'Analytics', icon: BarChart, href: '/admin/analytics' },
  { title: 'Email Center', icon: Mail, href: '/admin/emails' },
];

const cmsItems = [
  { title: 'Safari Inventory', icon: Compass, href: '/admin' },
  { title: 'Destinations Center', icon: MapPin, href: '/admin/destinations' },
  { title: 'Blog Center', icon: Newspaper, href: '/admin/blog' },
  { title: 'Testimonials', icon: MessageSquareQuote, href: '/admin/testimonials' },
  { title: 'FAQs Manager', icon: HelpCircle, href: '/admin/faqs' },
  { title: 'Sustainability', icon: Leaf, href: '/admin/sustainability' },
  { title: 'Inspiration Hub', icon: Sparkles, href: '/admin/inspiration' },
  { title: 'Travel Calendar', icon: CalendarDays, href: '/admin/calendar' },
  { title: 'Media Library', icon: ImageIcon, href: '/admin/media' },
];

const toolItems = [
  { title: 'Invoicing', icon: FileText, href: '/admin/invoice' },
  { title: 'Business Cards', icon: CreditCard, href: '/admin/business-card' },
  { title: 'Signatures', icon: PenTool, href: '/admin/signature-generator' },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('adhama_admin_auth');
    router.push('/admin/login');
  };

  const NavItem = ({ item }: { item: any }) => (
    <SidebarMenuItem>
      <SidebarMenuButton 
        asChild 
        isActive={pathname === item.href}
        className={cn(
          "h-11 rounded-full px-4 transition-all duration-300",
          pathname === item.href ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-secondary hover:bg-muted"
        )}
      >
        <Link href={item.href}>
          <item.icon className={cn("h-4 w-4", pathname === item.href ? "text-white" : "text-primary")} />
          <span className="text-[11px] font-bold uppercase tracking-[0.08em]">{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );

  return (
    <Sidebar className="border-r border-border/60 bg-white/[0.92]">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-4 rounded-[1.5rem] bg-background p-3 shadow-sm">
          <div className="relative h-14 w-16 shrink-0">
            <Image src="/assets/logo.png" alt="Adhama Africa Adventures" fill className="object-contain" />
          </div>
          <div>
            <h1 className="text-sm font-black uppercase tracking-[0.02em] text-secondary">Adhama CMS</h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">Content Suite</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-2 px-6 text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {menuItems.map((item) => (
                <NavItem key={item.title} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="mb-2 mt-4 px-6 text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">Editorial CMS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {cmsItems.map((item) => (
                <NavItem key={item.title} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="pb-10">
          <SidebarGroupLabel className="mb-2 mt-4 px-6 text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">Production Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {toolItems.map((item) => (
                <NavItem key={item.title} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/50 bg-muted/40 p-4">
        <button 
          onClick={handleLogout}
          className="group flex w-full items-center gap-3 rounded-full px-4 py-3 text-destructive transition-colors hover:bg-destructive/10"
        >
          <LogOut className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          <span className="text-[11px] font-bold uppercase tracking-[0.1em]">Logout Portal</span>
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
