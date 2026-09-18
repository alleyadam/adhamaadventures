
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Menu, X, ChevronDown, Globe, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-data';
import PlanSafariDialog from './PlanSafariDialog';
import { useTranslation } from '@/context/LanguageContext';
import { Language } from '@/lib/translations';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import WhatsAppIcon from '../icons/WhatsAppIcon';

export default function Header() {
  const { language, setLanguage, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlanOpen, setIsPlanOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  
  const logo = PlaceHolderImages.find(img => img.id === 'app-logo');

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isAdmin = pathname?.startsWith('/admin');
  if (isAdmin) return null;

  const navText: Record<Language, Record<string, string>> = {
    EN: {
      home: 'Home',
      aboutUs: 'About Us',
      ourStory: 'Our Story',
      ourFocus: 'Our Focus',
      localPartnerships: 'Local Partnerships',
      csr: 'Corporate Social Responsibility',
      companyLicensing: 'Company & Licensing',
      teamGuides: 'Team & Guides',
      vehicles: 'Safari Vehicles',
      safety: 'Safety & Guest Care',
      howOperate: 'How We Operate',
      travelTrade: 'Travel Trade',
      toursSafaris: 'Tours & Safaris',
      packages: 'Tanzania Tours Packages 2026-2027',
      privateSafaris: 'Exclusive Private Safaris',
      mobileSafaris: 'Mobile Explorer Safaris',
      smallGroup: 'Small Group Safaris',
      culturalTours: 'Explore Cultural Based Tours',
      kilimanjaro: 'Kilimanjaro Climbing',
      zanzibar: 'Zanzibar Beach Holiday',
      inspiration: 'Inspiration',
      ecoTourism: 'Eco-Tourism Safaris',
      homestays: 'Homestays Experience',
      experiences: 'Inspiration Experiences',
      coreActivities: 'Core Activities',
      students: 'Students Tour',
      liveTanzania: 'Come and Live in Tanzania',
      sustainability: 'Sustainability',
      gallery: 'Gallery',
      blog: 'Blog',
      faqs: 'FAQs',
      contact: 'Contact',
    },
    JA: {
      home: 'ホーム',
      aboutUs: '私たちについて',
      ourStory: '私たちの物語',
      ourFocus: '私たちの重点',
      localPartnerships: '地域パートナー',
      csr: '社会的責任',
      companyLicensing: '会社・ライセンス',
      teamGuides: 'チームとガイド',
      vehicles: 'サファリ車両',
      safety: '安全とゲストケア',
      howOperate: '運営方法',
      travelTrade: '旅行業界向け',
      toursSafaris: 'ツアー＆サファリ',
      packages: 'タンザニアツアー 2026-2027',
      privateSafaris: 'プライベートサファリ',
      mobileSafaris: 'モバイルサファリ',
      smallGroup: '少人数サファリ',
      culturalTours: '文化体験ツアー',
      kilimanjaro: 'キリマンジャロ登山',
      zanzibar: 'ザンジバル滞在',
      inspiration: '旅のヒント',
      ecoTourism: 'エコツーリズム',
      homestays: 'ホームステイ',
      experiences: '体験',
      coreActivities: '主な活動',
      students: '学生ツアー',
      liveTanzania: 'タンザニアで暮らす',
      sustainability: '持続可能性',
      gallery: 'ギャラリー',
      blog: 'ブログ',
      faqs: 'FAQ',
      contact: 'お問い合わせ',
    },
    FR: {
      home: 'Accueil',
      aboutUs: 'À propos',
      ourStory: 'Notre histoire',
      ourFocus: 'Notre approche',
      localPartnerships: 'Partenariats locaux',
      csr: 'Responsabilité sociale',
      companyLicensing: 'Entreprise & licences',
      teamGuides: 'Équipe & guides',
      vehicles: 'Véhicules safari',
      safety: 'Sécurité & assistance',
      howOperate: 'Notre fonctionnement',
      travelTrade: 'Professionnels du voyage',
      toursSafaris: 'Tours & Safaris',
      packages: 'Circuits Tanzanie 2026-2027',
      privateSafaris: 'Safaris privés',
      mobileSafaris: 'Safaris mobiles',
      smallGroup: 'Safaris en petit groupe',
      culturalTours: 'Circuits culturels',
      kilimanjaro: 'Ascension du Kilimandjaro',
      zanzibar: 'Séjour plage à Zanzibar',
      inspiration: 'Inspiration',
      ecoTourism: 'Écotourisme',
      homestays: 'Séjours chez l’habitant',
      experiences: 'Expériences',
      coreActivities: 'Activités clés',
      students: 'Voyage étudiant',
      liveTanzania: 'Vivre en Tanzanie',
      sustainability: 'Durabilité',
      gallery: 'Galerie',
      blog: 'Blog',
      faqs: 'FAQs',
      contact: 'Contact',
    },
    DE: {
      home: 'Startseite',
      aboutUs: 'Über uns',
      ourStory: 'Unsere Geschichte',
      ourFocus: 'Unser Fokus',
      localPartnerships: 'Lokale Partner',
      csr: 'Soziale Verantwortung',
      companyLicensing: 'Unternehmen & Lizenzen',
      teamGuides: 'Team & Guides',
      vehicles: 'Safari-Fahrzeuge',
      safety: 'Sicherheit & Gästebetreuung',
      howOperate: 'So arbeiten wir',
      travelTrade: 'Reisepartner',
      toursSafaris: 'Touren & Safaris',
      packages: 'Tansania Reisen 2026-2027',
      privateSafaris: 'Private Safaris',
      mobileSafaris: 'Mobile Safaris',
      smallGroup: 'Kleingruppen-Safaris',
      culturalTours: 'Kulturreisen',
      kilimanjaro: 'Kilimandscharo Besteigung',
      zanzibar: 'Sansibar Strandurlaub',
      inspiration: 'Inspiration',
      ecoTourism: 'Ökotourismus',
      homestays: 'Homestays',
      experiences: 'Erlebnisse',
      coreActivities: 'Kernaktivitäten',
      students: 'Schülerreise',
      liveTanzania: 'In Tansania leben',
      sustainability: 'Nachhaltigkeit',
      gallery: 'Galerie',
      blog: 'Blog',
      faqs: 'FAQs',
      contact: 'Kontakt',
    },
  };
  const label = (key: string) => navText[language]?.[key] || navText.EN[key] || key;

  const navLinks = [
    { name: label('home'), href: '/' },
    { 
      name: label('aboutUs'), 
      links: [
        { name: label('ourStory'), href: '/about/our-story' },
        { name: label('ourFocus'), href: '/about/our-focus' },
        { name: label('companyLicensing'), href: '/company-licensing' },
        { name: label('teamGuides'), href: '/team-guides' },
        { name: label('vehicles'), href: '/vehicles' },
        { name: label('safety'), href: '/safety' },
        { name: label('howOperate'), href: '/how-we-operate' },
        { name: label('localPartnerships'), href: '/about/local-partnerships' },
        { name: label('csr'), href: '/about/csr' },
      ]
    },
    { 
      name: label('toursSafaris'), 
      links: [
        { name: label('packages'), href: '/tours' },
        { name: label('privateSafaris'), href: '/tours?style=private' },
        { name: label('mobileSafaris'), href: '/tours?style=mobile' },
        { name: label('smallGroup'), href: '/tours?style=small-group' },
        { name: label('culturalTours'), href: '/tours?style=cultural' },
        { name: label('kilimanjaro'), href: '/tours?type=trekking' },
        { name: label('zanzibar'), href: '/destinations/zanzibar' },
      ]
    },
    { 
      name: label('inspiration'), 
      links: [
        { name: label('ecoTourism'), href: '/inspiration/eco-tourism' },
        { name: label('homestays'), href: '/inspiration/homestays' },
        { name: label('experiences'), href: '/inspiration/inspiration-experiences' },
        { name: label('coreActivities'), href: '/inspiration/core-activities' },
        { name: label('students'), href: '/inspiration/students-tour' },
        { name: label('liveTanzania'), href: '/inspiration/live-in-tanzania' },
      ]
    },
    { name: label('sustainability'), href: '/sustainability' },
    { name: label('gallery'), href: '/gallery' },
    { name: label('blog'), href: '/blog' },
    { name: label('faqs'), href: '/faqs' },
    { name: label('travelTrade'), href: '/travel-trade' },
    { name: label('contact'), href: '/contact' },
  ];

  const languages: { code: Language; name: string }[] = [
    { code: 'EN', name: 'English' },
    { code: 'JA', name: 'Japanese' },
    { code: 'FR', name: 'French' },
    { code: 'DE', name: 'German' },
  ];

  const isHomePage = pathname === '/';
  const shouldBeWhite = !isHomePage || isScrolled;

  if (!mounted) return null;

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-500">
      {/* 1. TOP UTILITY BAR */}
      <div className={cn(
        "hidden lg:block w-full border-b transition-all duration-500",
        isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-10 bg-white border-border/10 opacity-100"
      )}>
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/contact" className="flex items-center gap-2 group">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                 <MapPin className="h-3 w-3 text-primary" />
              </div>
              <span className="text-[10px] font-bold text-secondary tracking-tight group-hover:text-primary transition-colors">House No. 6, Njiro Ghorofa Mbili, Arusha Tanzania</span>
            </Link>
            <a href="mailto:info@adhamaadventures.co.tz" className="flex items-center gap-2 group">
              <div className="h-5 w-5 rounded-full bg-accent/15 flex items-center justify-center">
                 <Mail className="h-3 w-3 text-accent" />
              </div>
              <span className="text-[10px] font-bold text-secondary tracking-tight group-hover:text-primary transition-colors">info@adhamaadventures.co.tz</span>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden 2xl:inline text-[10px] font-black uppercase tracking-[0.18em] text-secondary/70">
              Tanzania&apos;s premier community-based tour operator
            </span>
            <a href="https://wa.me/255753300602" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
              <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
              <span className="text-[10px] font-black tracking-widest">+255 753 300 602</span>
            </a>
            <div className="h-4 w-[1px] bg-border/50" />
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1.5 text-[10px] font-black tracking-widest text-secondary hover:text-primary transition-colors outline-none uppercase">
                <Globe className="h-3 w-3" /> <span suppressHydrationWarning>{language}</span> <ChevronDown className="h-2 w-2 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-lg border-none shadow-2xl p-1 bg-white min-w-[80px]">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code} 
                    onSelect={() => setLanguage(lang.code)}
                    className="text-[9px] font-black uppercase p-2 focus:bg-primary focus:text-white cursor-pointer rounded-md"
                  >
                    {lang.code}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className={cn(
        "w-full transition-all duration-700 ease-in-out border-b",
        shouldBeWhite 
          ? "bg-white/95 backdrop-blur-xl h-16 md:h-20 border-border/30 shadow-sm" 
          : "bg-secondary/78 backdrop-blur-xl h-[4.5rem] md:h-24 border-white/15 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
      )}>
        <div className="container mx-auto h-full flex items-center justify-between px-4 md:px-6">
          <Link href="/" className="relative z-10 flex items-center h-full">
            {logo && (
              <div className={cn(
                "relative transition-all duration-500",
                shouldBeWhite ? "h-11 w-28 md:h-12" : "h-12 w-28 md:h-16 md:w-32"
              )}>
                <Image 
                  src={logo.imageUrl} 
                  alt="" 
                  fill
                  className="object-contain transition-all duration-500"
                  priority
                />
              </div>
            )}
          </Link>

          <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-2">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.links ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className={cn(
                      "inline-flex h-10 items-center justify-center gap-1 rounded-full px-2.5 text-[10px] 2xl:px-3 2xl:text-[11px] font-black tracking-[0.06em] transition-all hover:text-accent outline-none uppercase whitespace-nowrap",
                      shouldBeWhite ? "text-secondary hover:bg-primary/5" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] hover:bg-white/10"
                    )}>
                      {link.name} <ChevronDown className="h-3 w-3 opacity-30" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="rounded-lg border-none shadow-2xl p-2 bg-white min-w-[240px]">
                      {link.links.map((sub) => (
                        <DropdownMenuItem key={sub.name} asChild className="focus:bg-primary focus:text-white rounded-md cursor-pointer p-0">
                          <Link href={sub.href} className="block w-full p-4 text-[11px] font-bold uppercase tracking-[0.1em]">
                            {sub.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link 
                    href={link.href!} 
                    className={cn(
                      "inline-flex h-10 items-center justify-center rounded-full px-2.5 text-[10px] 2xl:px-3 2xl:text-[11px] font-black tracking-[0.06em] transition-all hover:text-accent uppercase whitespace-nowrap",
                      shouldBeWhite ? "text-secondary hover:bg-primary/5" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] hover:bg-white/10"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
             <div className="hidden xl:flex">
                <DropdownMenu>
                  <DropdownMenuTrigger className="inline-flex h-9 items-center gap-2 rounded-full bg-white/95 px-3 text-[10px] font-black uppercase tracking-[0.12em] text-secondary shadow-sm ring-1 ring-border/60 transition-all hover:bg-accent hover:text-secondary" suppressHydrationWarning>
                    <Globe className="h-3.5 w-3.5" /> {language}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="rounded-lg border-none bg-white p-1 shadow-2xl">
                    {languages.map(l => (
                      <DropdownMenuItem key={l.code} onSelect={() => setLanguage(l.code)} className="cursor-pointer rounded-md p-2 text-[10px] font-black uppercase focus:bg-primary focus:text-white">
                        {l.code} <span className="ml-2 text-[9px] font-medium normal-case opacity-70">{l.name}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
             </div>

             <PlanSafariDialog open={isPlanOpen} onOpenChange={setIsPlanOpen}>
              <Button 
                className={cn(
                  "hidden lg:flex rounded-full px-6 font-black text-[10px] tracking-widest transition-all duration-500 h-11 uppercase",
                  "bg-primary text-white hover:bg-secondary shadow-lg shadow-primary/20"
                )}
              >
                {t('nav.planButton')}
              </Button>
            </PlanSafariDialog>

            <button 
              className={cn(
                "xl:hidden relative z-50 flex h-12 w-12 items-center justify-center rounded-full transition-colors md:h-14 md:w-14",
                isHomePage ? "bg-black/30 backdrop-blur-md" : "bg-muted/70"
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-secondary" />
              ) : (
                <Menu className={cn(
                  "h-6 w-6 transition-colors",
                  isHomePage ? "text-white" : "text-secondary"
                )} />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={cn(
        "fixed inset-0 bg-[#F8F4ED] transition-all duration-700 ease-in-out flex flex-col items-center justify-center z-40 overflow-hidden",
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      )} aria-hidden={!isOpen}>
        <nav className="flex flex-col items-center gap-8 w-full px-12 overflow-y-auto max-h-[80vh] py-20">
           <div className="flex items-center gap-4 mb-8">
              <div className="flex flex-col items-center">
                 <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-sm mb-1">
                   <Star className="h-4 w-4 fill-accent text-accent" />
                 </div>
                 <span className="text-[8px] font-black">4.9/5</span>
              </div>
              <div className="flex flex-col items-center">
                 <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-sm mb-1">
                   <Star className="h-4 w-4 fill-primary text-primary" />
                 </div>
                 <span className="text-[8px] font-black">5.0/5</span>
              </div>
           </div>

          {navLinks.map((link) => (
            <div key={link.name} className="w-full text-center">
              {link.links ? (
                <div className="space-y-4">
                  <button 
                    onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                    className="text-xl font-serif italic flex items-center justify-center gap-2 mx-auto text-secondary"
                  >
                    {link.name} <ChevronDown className={cn("h-4 w-4 transition-transform", mobileExpanded === link.name && "rotate-180")} />
                  </button>
                  {mobileExpanded === link.name && (
                    <div className="flex flex-col gap-4 py-2 animate-in fade-in slide-in-from-top-2">
                      {link.links.map((sub) => (
                        <Link 
                          key={sub.name} 
                          href={sub.href} 
                          className="text-xs font-black tracking-widest uppercase text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  href={link.href!} 
                  className="text-xl font-serif italic block text-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          
          <div className="pt-8 flex flex-col items-center gap-6">
             <div className="flex gap-4">
                {languages.map(l => (
                  <button 
                    key={l.code} 
                    onClick={() => setLanguage(l.code)}
                    className={cn("text-[10px] font-black px-3 py-1 border rounded-full", language === l.code ? "bg-primary text-white border-primary" : "bg-white text-secondary border-border")}
                  >
                    {l.code}
                  </button>
                ))}
             </div>
             <PlanSafariDialog open={isPlanOpen} onOpenChange={setIsPlanOpen}>
              <Button 
                size="lg" 
                className="rounded-full px-12 h-14 bg-primary text-white text-[10px] tracking-widest font-black uppercase shadow-xl"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.planButton')}
              </Button>
             </PlanSafariDialog>
             <a href="https://wa.me/255753300602" className="flex items-center gap-3 text-secondary font-black text-sm uppercase tracking-tighter">
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" /> {t('nav.whatsapp')}
             </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
