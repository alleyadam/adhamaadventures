'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Settings,
  Youtube,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-data';
import PlanSafariDialog from './PlanSafariDialog';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/context/LanguageContext';

const footerGroups = [
  {
    title: 'Tours & Safaris',
    links: [
      { name: 'Tanzania Tours Packages 2026-2027', href: '/tours' },
      { name: 'Wildbeast Migration', href: '/tours?type=migration' },
      { name: 'Kilimanjaro Climbing', href: '/tours?type=trekking' },
      { name: 'Zanzibar Beach Holiday', href: '/destinations/zanzibar' },
      { name: 'Explore Cultural Based Tours', href: '/tours?type=culture' },
    ],
  },
  {
    title: 'Inspiration',
    links: [
      { name: 'Eco-Tourism Safaris', href: '/inspiration/eco-tourism' },
      { name: 'Homestays Experience', href: '/inspiration/homestays' },
      { name: 'Inspiration Experiences', href: '/inspiration/inspiration-experiences' },
      { name: 'Students Tour', href: '/inspiration/students-tour' },
      { name: 'Come and Live in Tanzania', href: '/inspiration/live-in-tanzania' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'Our Story', href: '/about/our-story' },
      { name: 'Our Focus', href: '/about/our-focus' },
      { name: 'Local Partnerships', href: '/about/local-partnerships' },
      { name: 'Corporate Social Responsibility', href: '/about/csr' },
      { name: 'Sustainability', href: '/sustainability' },
    ],
  },
];

const destinationLinks = [
  { name: 'Serengeti', href: '/destinations/serengeti' },
  { name: 'Ngorongoro', href: '/destinations/ngorongoro-crater' },
  { name: 'Zanzibar', href: '/destinations/zanzibar' },
  { name: 'Tarangire', href: '/destinations/tarangire' },
  { name: 'Manyara', href: '/destinations/lake-manyara' },
  { name: 'Kilimanjaro', href: '/destinations/kilimanjaro' },
];

const footerDestinationRows = [
  {
    label: 'Destinations',
    links: [{ name: 'Tanzania', href: '/destinations' }],
  },
  {
    label: 'Beaches',
    links: [
      { name: 'Bwejuu', href: '/destinations/bwejuu' },
      { name: 'Dongwe', href: '/destinations/dongwe' },
      { name: 'Fumba', href: '/destinations/fumba' },
      { name: 'Jambiani', href: '/destinations/jambiani' },
      { name: 'Kendwa', href: '/destinations/kendwa' },
      { name: 'Kizimkazi', href: '/destinations/kizimkazi' },
      { name: 'Matemwe', href: '/destinations/matemwe' },
      { name: 'Nungwi', href: '/destinations/nungwi' },
      { name: 'Paje', href: '/destinations/paje' },
      { name: 'Uroa', href: '/destinations/uroa' },
    ],
  },
  {
    label: 'Cities',
    links: [
      { name: 'Arusha', href: '/destinations/arusha-city' },
      { name: 'Dar es Salaam', href: '/destinations/dar-es-salaam' },
      { name: 'Moshi', href: '/destinations/moshi' },
      { name: 'Morogoro', href: '/destinations/morogoro' },
      { name: 'Mwanza', href: '/destinations/mwanza' },
    ],
  },
  {
    label: 'Conservations',
    links: [
      { name: 'Ndutu', href: '/destinations/ndutu' },
      { name: 'Ngorongoro Crater', href: '/destinations/ngorongoro-crater' },
    ],
  },
  {
    label: 'Islands',
    links: [
      { name: 'Mafia', href: '/destinations/mafia-island' },
      { name: 'Pemba', href: '/destinations/pemba' },
      { name: 'Zanzibar', href: '/destinations/zanzibar' },
    ],
  },
  {
    label: 'Lakes',
    links: [
      { name: 'Lake Eyasi', href: '/tours?type=culture' },
      { name: 'Lake Manyara', href: '/destinations/lake-manyara' },
      { name: 'Lake Natron', href: '/destinations/lake-natron' },
      { name: 'Lake Victoria', href: '/destinations/lake-victoria' },
    ],
  },
  {
    label: 'Mountains',
    links: [
      { name: 'Kilimanjaro', href: '/destinations/kilimanjaro' },
      { name: 'Mount Meru', href: '/destinations/mount-meru' },
    ],
  },
  {
    label: 'Parks',
    links: [
      { name: 'Arusha', href: '/destinations/arusha-np' },
      { name: 'Gombe Stream', href: '/destinations/gombe' },
      { name: 'Katavi', href: '/destinations/katavi' },
      { name: 'Lake Manyara', href: '/destinations/lake-manyara' },
      { name: 'Mikumi', href: '/destinations/mikumi' },
      { name: 'Nyerere', href: '/destinations/nyerere' },
      { name: 'Ruaha', href: '/destinations/ruaha' },
      { name: 'Saadani', href: '/destinations/saadani' },
      { name: 'Serengeti', href: '/destinations/serengeti' },
      { name: 'Tarangire', href: '/destinations/tarangire' },
    ],
  },
  {
    label: 'Towns',
    links: [
      { name: 'Bagamoyo', href: '/destinations/bagamoyo' },
      { name: 'Karatu', href: '/destinations/karatu' },
      { name: 'Marangu', href: '/destinations/marangu' },
      { name: 'Stone Town', href: '/destinations/stone-town' },
      { name: 'Zanzibar', href: '/destinations/zanzibar' },
    ],
  },
  {
    label: 'When to visit Tanzania',
    links: [
      { name: 'January', href: '/destinations/tanzania-in-january' },
      { name: 'February', href: '/destinations/tanzania-in-february' },
      { name: 'June', href: '/destinations/tanzania-in-june' },
      { name: 'July', href: '/destinations/tanzania-in-july' },
      { name: 'August', href: '/destinations/tanzania-in-august' },
      { name: 'September', href: '/destinations/tanzania-in-september' },
      { name: 'October', href: '/destinations/tanzania-in-october' },
      { name: 'December', href: '/destinations/tanzania-in-december' },
    ],
  },
];

export default function Footer() {
  const { t } = useTranslation();
  const logo = PlaceHolderImages.find((img) => img.id === 'app-logo');
  const [isPlanOpen, setIsPlanOpen] = useState(false);
  const pathname = usePathname();

  const isAdmin = pathname?.startsWith('/admin');
  if (isAdmin) return null;

  return (
    <footer className="relative overflow-hidden bg-secondary text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(255,155,64,0.24),transparent_32rem),radial-gradient(circle_at_88%_68%,rgba(203,122,51,0.18),transparent_30rem)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />

      <div className="relative container mx-auto px-6 py-16 md:py-24">
        <div className="mb-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <div className="organic-frame overflow-hidden border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-sm md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_220px] lg:items-end">
              <div className="space-y-7">
                <span className="text-[10px] font-black uppercase tracking-[0.34em] text-accent">
                  Glory in every journey
                </span>
                <h2 className="max-w-3xl font-serif text-4xl leading-[1.05] text-white md:text-6xl">
                  Tanzania is waiting. Let&apos;s design the route that feels like yours.
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                  Community-first safaris, Kilimanjaro climbs, Zanzibar coast days, homestays, cultural routes, and responsible adventures planned from Arusha.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <PlanSafariDialog open={isPlanOpen} onOpenChange={setIsPlanOpen}>
                  <button className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-accent px-7 text-[10px] font-black uppercase tracking-[0.22em] text-secondary shadow-xl shadow-accent/20 transition-all hover:-translate-y-0.5 hover:bg-white">
                    Plan Your Safari <ArrowUpRight className="h-4 w-4" />
                  </button>
                </PlanSafariDialog>
                <Link
                  href="https://wa.me/255753300602"
                  className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 text-[10px] font-black uppercase tracking-[0.22em] text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-secondary"
                >
                  WhatsApp Us <MessageCircle className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="organic-frame-alt relative min-h-[320px] overflow-hidden shadow-2xl">
            <Image
              src="/images/adhama-old/maasai-attire.webp"
              alt="Adhama cultural safari"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
            <div className="absolute inset-0 image-vignette" />
            <div className="absolute bottom-7 left-7 right-7">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-accent">Arusha based</p>
              <p className="mt-3 font-serif text-3xl italic leading-tight text-white">Local people. Real routes. Responsible impact.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-12 border-y border-white/10 py-14 lg:grid-cols-[1.15fr_1.85fr]">
          <div className="space-y-8">
            <Link href="/" className="inline-flex items-center">
              {logo && (
                <div className="relative h-16 w-48 rounded-[1.25rem] bg-white p-3 shadow-xl">
                  <Image src={logo.imageUrl} alt="Adhama Africa Adventures" fill className="object-contain p-2" />
                </div>
              )}
            </Link>
            <p className="max-w-md font-serif text-xl italic leading-relaxed text-white/72">
              &quot;{t('footer.tagline')}&quot;
            </p>
            <div className="flex flex-wrap gap-3">
              {destinationLinks.map((destination) => (
                <Link
                  key={destination.name}
                  href={destination.href}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white/70 transition-colors hover:border-accent/60 hover:text-accent"
                >
                  {destination.name}
                </Link>
              ))}
            </div>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/adhamaadventures/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-accent hover:text-secondary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/adhamadventures" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-accent hover:text-secondary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/adhamaadventures/" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-accent hover:text-secondary">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title} className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.28em] text-accent">{group.title}</h3>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm font-bold leading-relaxed text-white/58 transition-colors hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 py-12 md:grid-cols-3">
          <a href="https://maps.google.com/?q=House%20No.%206%2C%20Njiro%20Ghorofa%20Mbili%2C%20Arusha%20Tanzania" target="_blank" rel="noopener noreferrer" className="group rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 transition-all hover:-translate-y-0.5 hover:bg-white/[0.09]">
            <MapPin className="mb-5 h-6 w-6 text-accent" />
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-accent">{t('footer.visit')}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/68">House No. 6, Njiro Ghorofa Mbili,<br />Arusha, Tanzania</p>
          </a>
          <a href="mailto:info@adhamaadventures.co.tz" className="group rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 transition-all hover:-translate-y-0.5 hover:bg-white/[0.09]">
            <Mail className="mb-5 h-6 w-6 text-accent" />
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-accent">{t('footer.email')}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/68 underline decoration-white/20 underline-offset-4">info@adhamaadventures.co.tz</p>
          </a>
          <a href="tel:+255753300602" className="group rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 transition-all hover:-translate-y-0.5 hover:bg-white/[0.09]">
            <Phone className="mb-5 h-6 w-6 text-accent" />
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-accent">{t('footer.hotline')}</p>
            <p className="mt-3 font-serif text-2xl italic leading-relaxed text-white">+255 753 300 602</p>
          </a>
        </div>

        <div className="space-y-4 border-t border-white/10 py-8">
          {footerDestinationRows.map((row) => (
            <div key={row.label} className="flex flex-wrap items-baseline gap-x-2 gap-y-2 text-xs leading-relaxed">
              <span className="font-black text-white/82">{row.label}:</span>
              {row.links.map((link, index) => (
                <span key={`${row.label}-${link.name}`} className="inline-flex items-baseline gap-2">
                  <Link href={link.href} className="text-white/58 underline decoration-white/20 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent">
                    {link.name}
                  </Link>
                  {index < row.links.length - 1 ? <span className="text-white/24">-</span> : null}
                </span>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <Link href="/admin/login" className="text-white/20 transition-colors hover:text-accent" aria-label="Admin login">
              <Settings className="h-5 w-5" />
            </Link>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/38">
              © {new Date().getFullYear()} Adhama Africa Adventures. Karibu Nyumbani.
            </p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.24em] text-white/45 transition-colors hover:text-accent"
          >
            {t('footer.backToTop')} <ArrowUpRight className="h-4 w-4 -rotate-45" />
          </button>
        </div>
      </div>
    </footer>
  );
}
