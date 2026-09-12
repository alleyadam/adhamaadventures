import PageHeader from '@/components/layout/PageHeader';
import { 
  Footprints, 
  Music, 
  UtensilsCrossed, 
  School, 
  Sprout, 
  Binoculars, 
  Palette, 
  Anchor, 
  Leaf, 
  Hammer,
  ChevronRight,
  Waves,
  Camera,
  Heart,
  Truck,
  Mountain,
  Trophy,
  Coffee,
  Ship,
  Eye,
  Tent
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CoreActivitiesPage() {
  const categories = [
    {
      title: "Wildlife, Nature & Adventure",
      items: [
        { icon: Truck, name: "Game Drives & Bush Safaris", desc: "4x4 open-top tracking across Serengeti, Ngorongoro, and Ruaha." },
        { icon: Mountain, name: "Mountain Trekking", desc: "Summit Kilimanjaro, Mount Meru, or the active Ol Doinyo Lengai." },
        { icon: Footprints, name: "Highland & Forest Hikes", desc: "Waterfall trekking in Udzungwa, Usambara, and Pare Mountains." },
        { icon: Waves, name: "Aerial Safaris", desc: "Sunrise hot air balloon flights over the Serengeti with bush breakfast." },
        { icon: Anchor, name: "Water & Ocean Sports", desc: "Scuba, kitesurfing, and sunset dhow cruises in Zanzibar and Mafia." },
      ]
    },
    {
      title: "Submersibles & Underwater",
      items: [
        { icon: Ship, name: "Semi-Submarine Reef Tours", desc: "Glass-hulled reef viewing off Stone Town and Kendwa Beach." },
        { icon: Tent, name: "Underwater Lodging", desc: "Sleep in a submerged glass suite at Pemba Island's Underwater Room." },
        { icon: Binoculars, name: "Sunken Shipwreck Diving", desc: "Explore artificial reefs on historic wrecks off Zanzibar." },
        { icon: Eye, name: "Sub-Surface Hides", desc: "Observe hippos and crocs up-close in specialized photographic hides." },
      ]
    },
    {
      title: "Street Culture & Gastronomy",
      items: [
        { icon: UtensilsCrossed, name: "Street Food Crawls", desc: "Taste Zanzibar Mix, Chipsi Mayai, and Nyama Choma at local hubs." },
        { icon: Music, name: "Bongo Flava & Clubbing", desc: "Experience live Afro-pop and Amapiano in Dar and Arusha." },
        { icon: Palette, name: "Street Fashion", desc: "Tailor custom Kitenge and Kanga garments at Kariakoo markets." },
        { icon: Truck, name: "Bajaji City Tours", desc: "Navigate urban murals and markets via three-wheeled motorcycle taxis." },
      ]
    },
    {
      title: "Indigenous Living (CBT)",
      items: [
        { icon: Binoculars, name: "Bushcraft & Foraging", desc: "Early morning hunting and honey foraging with the Hadzabe." },
        { icon: Hammer, name: "Traditional Metallurgy", desc: "Watch Datoga blacksmiths melt scrap copper into arrowheads." },
        { icon: Heart, name: "Maasai Immersion", desc: "Participate in Adumu dances and learn traditional bush medicine." },
        { icon: Coffee, name: "Agritourism", desc: "Coffee harvesting on Kili slopes and spice walks in Zanzibar." },
      ]
    },
    {
      title: "Sports & Major Events",
      items: [
        { icon: Trophy, name: "AFCON 2027", desc: "Join the Pamoja Tournament matches in Dar, Arusha, and Zanzibar." },
        { icon: Trophy, name: "Kilimanjaro Marathon", desc: "Run or spectate the annual race around the base of Mt. Kilimanjaro." },
      ]
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title="Experience Tanzania"
        subtitle="Step out of the vehicle and immerse yourself in the unscripted rhythms of East Africa."
      />

      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="space-y-24">
          {categories.map((cat, i) => (
            <section key={i} className="space-y-12">
              <div className="border-b-2 border-primary/20 pb-4">
                <h2 className="text-3xl font-black text-secondary tracking-tighter uppercase italic">{cat.title}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.items.map((item, j) => (
                  <div 
                    key={j} 
                    className="p-8 bg-muted/20 rounded-2xl space-y-4 border border-transparent hover:border-primary/30 transition-all hover:shadow-lg group"
                  >
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-black text-secondary uppercase tracking-tight leading-tight">{item.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-32 bg-secondary text-white p-12 md:p-20 rounded-[2rem] text-center space-y-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              Ready to <span className="text-primary italic">Explore</span> More?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Join us for an adventure that actively supports the ecosystems and people you visit.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none h-16 px-12 font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
              <Link href="/tours">EXPLORE WITH US</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-secondary rounded-none h-16 px-12 font-black uppercase tracking-widest text-xs bg-white/5 backdrop-blur-sm transition-all hover:-translate-y-1">
              <Link href="/contact">Inquire Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}