import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { USARI_IMAGES } from '@/lib/usari-images';
import {
  Calendar,
  DollarSign,
  Backpack,
  Clock,
  Compass,
  PawPrint,
  Users,
  Globe2,
  CreditCard,
  Wifi,
  Smartphone,
  Zap,
  CloudSun,
  ShieldCheck,
  Waves,
  MapPin,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tanzania Travel Guide | Safari, Wildlife, Migration & Culture',
  description:
    'Your complete Tanzania travel guide: best safari times, costs, packing lists, Big Five wildlife, Great Migration calendar, cultural tribes, visas, currency, SIM cards, weather and travel insurance.',
  keywords: [
    'Tanzania travel guide',
    'Tanzania safari guide',
    'best time for Tanzania safari',
    'Tanzania safari cost',
    'Big Five Tanzania',
    'Great Migration calendar',
    'Tanzania visa',
    'Maasai culture',
    'Hadzabe tribe',
    'Tanzania packing list',
  ],
  alternates: { canonical: '/tanzania-travel-guide' },
  openGraph: {
    title: 'Tanzania Travel Guide | Adhama Africa Adventures',
    description:
      'Everything you need to plan a Tanzania safari: timing, costs, wildlife, migration, culture, visas, and practical travel tips.',
    images: [{ url: USARI_IMAGES.lionesses, width: 1200, height: 800, alt: 'Tanzania safari wildlife' }],
  },
};

type GuideTopic = {
  title: string;
  href: string;
  desc: string;
  icon: React.ReactNode;
};

type GuideCategory = {
  id: string;
  label: string;
  title: string;
  intro: string;
  icon: React.ReactNode;
  image: string;
  imageAlt: string;
  topics: GuideTopic[];
};

const categories: GuideCategory[] = [
  {
    id: 'safari',
    label: 'Safari',
    title: 'Safari Planning',
    intro: 'Everything you need to know to plan the right Tanzania safari — from timing and budget to packing and choosing between private or group travel.',
    icon: <Compass className="h-5 w-5" />,
    image: USARI_IMAGES.sunsetPlain,
    imageAlt: 'Tanzania safari landscape at sunset',
    topics: [
      { title: 'Best time for Tanzania safari', href: '#safari-best-time', desc: 'Dry season vs green season, month-by-month guidance.', icon: <Calendar className="h-4 w-4" /> },
      { title: 'Tanzania safari cost', href: '#safari-cost', desc: 'Budget, mid-range and luxury pricing breakdowns.', icon: <DollarSign className="h-4 w-4" /> },
      { title: 'Tanzania safari packing list', href: '#safari-packing', desc: 'What to bring and what to leave at home.', icon: <Backpack className="h-4 w-4" /> },
      { title: 'How many days for safari?', href: '#safari-days', desc: '3-day quick trips vs 10-day deep dives.', icon: <Clock className="h-4 w-4" /> },
      { title: 'Tanzania safari for first-time visitors', href: '#safari-first-time', desc: 'Everything a first-timer needs to know.', icon: <Compass className="h-4 w-4" /> },
      { title: 'Private vs group safari', href: '#safari-private-group', desc: 'Which is right for your travel style?', icon: <Users className="h-4 w-4" /> },
    ],
  },
  {
    id: 'wildlife',
    label: 'Wildlife',
    title: 'Wildlife of Tanzania',
    intro: 'Tanzania is home to one of the richest concentrations of wildlife on earth. Learn about the iconic species you will encounter.',
    icon: <PawPrint className="h-5 w-5" />,
    image: USARI_IMAGES.lionesses,
    imageAlt: 'Lionesses in Tanzania',
    topics: [
      { title: 'The Big Five', href: '#wildlife-big-five', desc: 'Lion, leopard, elephant, buffalo and rhino.', icon: <PawPrint className="h-4 w-4" /> },
      { title: 'Lions', href: '#wildlife-lions', desc: 'Pride dynamics and best viewing areas.', icon: <PawPrint className="h-4 w-4" /> },
      { title: 'Leopards', href: '#wildlife-leopards', desc: 'The elusive tree-climbing cats.', icon: <PawPrint className="h-4 w-4" /> },
      { title: 'Cheetahs', href: '#wildlife-cheetahs', desc: 'The fastest land animal in the Serengeti.', icon: <PawPrint className="h-4 w-4" /> },
      { title: 'Elephants', href: '#wildlife-elephants', desc: 'Gentle giants of Tarangire and beyond.', icon: <PawPrint className="h-4 w-4" /> },
      { title: 'Rhinos', href: '#wildlife-rhinos', desc: 'The rarest of the Big Five.', icon: <PawPrint className="h-4 w-4" /> },
    ],
  },
  {
    id: 'migration',
    label: 'Migration',
    title: 'The Great Migration',
    intro: 'The greatest wildlife spectacle on earth. Understand the cycle, plan around the river crossings, and witness the calving season.',
    icon: <Waves className="h-5 w-5" />,
    image: USARI_IMAGES.wildebeestCrossing,
    imageAlt: 'Wildebeest crossing a river during the Great Migration in Tanzania',
    topics: [
      { title: 'Migration calendar', href: '#migration-calendar', desc: 'Month-by-month where the herds are.', icon: <Calendar className="h-4 w-4" /> },
      { title: 'River crossing', href: '#migration-crossing', desc: 'The dramatic Mara River crossings (Jul–Oct).', icon: <Waves className="h-4 w-4" /> },
      { title: 'Calving season', href: '#migration-calving', desc: 'January–March in the southern Serengeti.', icon: <Sparkles className="h-4 w-4" /> },
      { title: 'Best locations', href: '#migration-locations', desc: 'Where to stay to see the migration.', icon: <MapPin className="h-4 w-4" /> },
    ],
  },
  {
    id: 'culture',
    label: 'Culture',
    title: 'Cultures of Tanzania',
    intro: 'Tanzania is home to more than 120 ethnic groups. Meet the communities that make a journey here much more than a safari.',
    icon: <Users className="h-5 w-5" />,
    image: USARI_IMAGES.maasaiSunset,
    imageAlt: 'Maasai cultural experience at sunset in Tanzania',
    topics: [
      { title: 'Hadzabe', href: '#culture-hadzabe', desc: 'One of the last hunter-gatherer tribes.', icon: <Users className="h-4 w-4" /> },
      { title: 'Datoga', href: '#culture-datoga', desc: 'Skilled blacksmiths and pastoralists.', icon: <Users className="h-4 w-4" /> },
      { title: 'Maasai', href: '#culture-maasai', desc: 'The iconic pastoral warriors of East Africa.', icon: <Users className="h-4 w-4" /> },
      { title: 'Chagga', href: '#culture-chagga', desc: 'Farmers on the slopes of Kilimanjaro.', icon: <Users className="h-4 w-4" /> },
    ],
  },
  {
    id: 'travel-planning',
    label: 'Travel Planning',
    title: 'Practical Travel Planning',
    intro: 'Everything practical: visas, money, connectivity, power, weather and insurance — so you arrive prepared and confident.',
    icon: <Compass className="h-5 w-5" />,
    image: USARI_IMAGES.ngorongoroCrater,
    imageAlt: 'Ngorongoro Crater panoramic view for Tanzania travel planning',
    topics: [
      { title: 'Tanzania visa', href: '#planning-visa', desc: 'e-Visa process and on-arrival options.', icon: <Globe2 className="h-4 w-4" /> },
      { title: 'Currency', href: '#planning-currency', desc: 'Tanzanian Shilling, USD, and cash tips.', icon: <CreditCard className="h-4 w-4" /> },
      { title: 'Tipping', href: '#planning-tipping', desc: 'Recommended amounts for guides and staff.', icon: <DollarSign className="h-4 w-4" /> },
      { title: 'Internet', href: '#planning-internet', desc: 'Coverage and data connectivity.', icon: <Wifi className="h-4 w-4" /> },
      { title: 'SIM cards', href: '#planning-sim', desc: 'Vodacom, Airtel, Tigo — what to buy.', icon: <Smartphone className="h-4 w-4" /> },
      { title: 'Electricity', href: '#planning-electricity', desc: 'Plugs, voltage and charging on safari.', icon: <Zap className="h-4 w-4" /> },
      { title: 'Weather', href: '#planning-weather', desc: 'Climate zones and seasonal patterns.', icon: <CloudSun className="h-4 w-4" /> },
      { title: 'Travel insurance', href: '#planning-insurance', desc: 'What to cover before you fly.', icon: <ShieldCheck className="h-4 w-4" /> },
    ],
  },
];

const detailContent: Record<string, { paragraphs: string[]; tips?: string[] }> = {
  'safari-best-time': {
    paragraphs: [
      'The best time for a Tanzania safari depends on what you want to see. The dry season (June to October) is the most popular period: wildlife concentrates around water sources, vegetation is thin, and the Great Migration river crossings happen in the northern Serengeti.',
      'The green season (November to May) brings lush landscapes, fewer crowds, lower rates, and the calving season from January to March, when thousands of wildebeest calves are born on the southern plains.',
    ],
    tips: ['June–October: peak game viewing, cooler temperatures', 'January–March: calving season, predator action', 'April–May: heavy rains, some lodges close', 'November: short rains, green landscape, good value'],
  },
  'safari-cost': {
    paragraphs: [
      'Tanzania safari costs vary widely based on park fees, accommodation level, vehicle quality, group size and length. A budget camping safari may start around $200–$300 per person per day, while mid-range lodges typically range $350–$600 per day.',
      'Luxury safaris with fly-in transfers, premium lodges and private guides can exceed $800–$1,500+ per person per day. Park fees alone (e.g. Serengeti, Ngorongoro) contribute $50–$80+ per day per person.',
    ],
    tips: ['Budget: $200–$300 pp/day (camping, shared)', 'Mid-range: $350–$600 pp/day (lodges, private vehicle possible)', 'Luxury: $800–$1,500+ pp/day (fly-in, premium lodges)', 'Park fees are a significant portion of cost'],
  },
  'safari-packing': {
    paragraphs: [
      'Pack in soft-sided bags — hard suitcases are difficult to fit in safari vehicles. Neutral-coloured clothing (khaki, olive, brown) is best for game drives. Layering is key: mornings can be cold (10°C) and middays hot (30°C+).',
      'Bring a warm jacket or fleece for early morning game drives, a wide-brimmed hat, sunglasses with UV protection, sunscreen (SPF 30+), and closed walking shoes. A good pair of binoculars dramatically improves your wildlife viewing.',
    ],
    tips: ['Soft duffel bag, not hard suitcase', 'Neutral colours: khaki, olive, brown', 'Warm fleece for morning drives', 'Binoculars (8x42 or 10x42 recommended)', 'Sunscreen, hat, sunglasses', 'Camera with zoom lens (200mm+)', 'Insect repellent with DEET'],
  },
  'safari-days': {
    paragraphs: [
      'For a first-time visitor, a 5–7 day safari gives you enough time to visit 2–3 parks (e.g. Tarangire, Ngorongoro, Serengeti) without rushing. A 3-day safari is possible but limits you to one or two parks.',
      'For serious wildlife photographers or those wanting to follow the Migration, 8–10+ days allows deeper exploration of the Serengeti, remote parks like Ruaha or Nyerere, and possibly a Zanzibar beach extension.',
    ],
    tips: ['3 days: 1–2 parks, fast pace', '5–7 days: 3 parks, the sweet spot for most travellers', '8–10+ days: deep exploration + Zanzibar extension', 'Add 1–2 rest days if combining with Kilimanjaro'],
  },
  'safari-first-time': {
    paragraphs: [
      'For first-time visitors, a private safari with a local guide is the best way to experience Tanzania. You control the pace, have a dedicated vehicle, and your guide tailors each day to your interests.',
      'Start with the Northern Circuit (Tarangire, Lake Manyara, Ngorongoro Crater, Serengeti) — it offers the most reliable wildlife viewing and good infrastructure. Book 3–6 months ahead for peak season (July–October).',
    ],
    tips: ['Choose the Northern Circuit for your first safari', 'Book 3–6 months ahead for peak season', 'Private safari gives flexibility and comfort', 'Carry USD cash for tips, visas and small purchases', 'Travel insurance covering safari activities is essential'],
  },
  'safari-private-group': {
    paragraphs: [
      'A private safari means your own vehicle, guide and itinerary — maximum flexibility, comfort, and privacy. Ideal for families, couples, photographers and anyone who wants to set their own pace.',
      'A group safari shares the vehicle and guide with other travellers, reducing cost but adding less flexibility. Group size is usually 4–7 per vehicle. Good for solo travellers and budget-conscious visitors.',
    ],
    tips: ['Private: flexible, comfortable, best for families and photographers', 'Group: affordable, social, less flexible', 'Private vehicles typically seat 4–6 with pop-up roof', 'Window seat guaranteed in private; shared in group'],
  },
  'wildlife-big-five': {
    paragraphs: [
      'The Big Five — lion, leopard, elephant, buffalo and rhino — were originally named by hunters as the five most dangerous animals to track on foot. Today they are the most sought-after sightings on a Tanzanian safari.',
      'Ngorongoro Crater is one of the best places to see all five in a single day, though rhino sightings are not guaranteed. The Serengeti is outstanding for lions, leopards and elephants.',
    ],
    tips: ['Lion: Serengeti and Ngorongoro', 'Leopard: Serengeti (riverine areas)', 'Elephant: Tarangire (huge herds in dry season)', 'Buffalo: widespread in most parks', 'Rhino: Ngorongoro Crater (rare), best chance in Tanzania'],
  },
  'wildlife-lions': {
    paragraphs: [
      'Tanzania has one of the largest lion populations in Africa. The Serengeti is famous for large prides, and Ngorongoro Crater hosts some of the most easily observed lions due to the open terrain.',
      'Lions are most active at dawn and dusk. During the day they often rest in shade, especially in hotter months.',
    ],
    tips: ['Best seen at dawn and dusk', 'Serengeti has large prides', 'Ngorongoro Crater lions are very visible', 'Do not disturb — guides keep respectful distance'],
  },
  'wildlife-leopards': {
    paragraphs: [
      'Leopards are the most elusive of the Big Five. They are solitary, nocturnal, and often rest in trees during the day. The Serengeti riverine forests are excellent leopard habitat.',
      'Look up — leopards drag prey into trees to avoid lions and hyenas.',
    ],
    tips: ['Look in trees along river courses', 'Most active at night', 'Solitary and territorial', 'Seronera area in Serengeti is a hotspot'],
  },
  'wildlife-cheetahs': {
    paragraphs: [
      'Cheetahs are diurnal hunters, making them easier to spot than leopards. The open plains of the southern and central Serengeti are prime cheetah territory.',
      'They are the fastest land animals, capable of reaching 70 mph (112 km/h) in short bursts.',
    ],
    tips: ['Best seen on open plains (southern/central Serengeti)', 'Diurnal — active during the day', 'Look for them on termite mounds or low hills', 'Smaller and slimmer than leopards'],
  },
  'wildlife-elephants': {
    paragraphs: [
      'Tanzania has large elephant populations, with Tarangire National Park being one of the best places in East Africa to see them in big herds, especially during the dry season (July–October).',
      'Elephants are highly intelligent and social. A herd is typically led by a matriarch.',
    ],
    tips: ['Tarangire: huge dry-season herds', 'Serengeti and Ngorongoro also good', 'Keep distance — mothers with calves are protective', 'They communicate with low-frequency rumbles'],
  },
  'wildlife-rhinos': {
    paragraphs: [
      'Black rhinos are critically endangered and the rarest of the Big Five. Ngorongoro Crater has a small, protected population — it is the best place in Tanzania to see them.',
      'Rhino sightings are never guaranteed, as they roam large areas and are often solitary.',
    ],
    tips: ['Ngorongoro Crater: best chance in Tanzania', 'Critically endangered — respect distance', 'Often solitary', 'Poaching remains a threat; conservation fees help protect them'],
  },
  'migration-calendar': {
    paragraphs: [
      'The Great Migration is a year-round cycle of over 1.5 million wildebeest and 250,000 zebras moving across the Serengeti–Mara ecosystem. The timing shifts with rainfall patterns.',
      'January–March: herds gather in the southern Serengeti and Ndutu for calving. April–May: they move west and north. June–July: crossing the Grumeti River. July–October: Mara River crossings in the north. November–December: moving south again.',
    ],
    tips: ['Jan–Mar: calving season, southern Serengeti', 'Jun–Jul: Grumeti River crossings', 'Jul–Oct: Mara River crossings (most dramatic)', 'Nov–Dec: herds move south', 'Timing varies each year with rainfall'],
  },
  'migration-crossing': {
    paragraphs: [
      'The Mara River crossings (July to October) are the most dramatic and famous event of the Great Migration. Thousands of wildebeest plunge across the river, braving crocodiles and strong currents.',
      'Crossings cannot be predicted precisely — you may wait hours or days for a crossing to begin. Patience and proximity to the river are key.',
    ],
    tips: ['Jul–Oct in the northern Serengeti', 'Stay near the Mara River for best chance', 'Cannot guarantee a crossing on a given day', 'Northern Serengeti camps are ideal but pricey'],
  },
  'migration-calving': {
    paragraphs: [
      'Calving season runs from late January through March in the southern Serengeti and Ndutu area. Around 8,000 calves are born each day during peak weeks.',
      'This concentration of young attracts predators — it is an incredible time for predator–prey action and photography.',
    ],
    tips: ['Late Jan–Mar in Ndutu / southern Serengeti', 'Up to 8,000 calves born per day', 'High predator activity', 'Excellent for photography — green landscape'],
  },
  'migration-locations': {
    paragraphs: [
      'To see the migration, your camp or lodge location matters. Ndutu (southern Serengeti) for calving season; central Serengeti (Seronera) year-round; northern Serengeti for Mara crossings; western corridor for Grumeti crossings.',
      'Mobile camps that follow the migration are the best way to be close to the action.',
    ],
    tips: ['Ndutu: calving season (Jan–Mar)', 'Central Serengeti: good year-round base', 'Northern Serengeti: Mara crossings (Jul–Oct)', 'Mobile camps offer proximity to the herds'],
  },
  'culture-hadzabe': {
    paragraphs: [
      'The Hadzabe are one of the last hunter-gatherer tribes in Africa, living around Lake Eyasi in northern Tanzania. They speak a click language and maintain a traditional lifestyle of hunting with bows and gathering wild foods.',
      'A visit to the Hadzabe is a rare, authentic cultural encounter — you can join a morning hunt and learn about their way of life.',
    ],
    tips: ['Found around Lake Eyasi', 'One of the last hunter-gatherer tribes', 'Morning visits include joining a hunt', 'Respectful, small-group visits only'],
  },
  'culture-datoga': {
    paragraphs: [
      'The Datoga are pastoralists and skilled blacksmiths living near Lake Eyasi. They are known for their metalwork, particularly arrowheads and bracelets, and their distinctive facial scarification.',
      'A visit often includes watching the smiths at work and learning about their cattle-centred culture.',
    ],
    tips: ['Pastoralists and blacksmiths near Lake Eyasi', 'Known for metalwork and jewellery', 'Often visited alongside Hadzabe', 'Cattle are central to their culture'],
  },
  'culture-maasai': {
    paragraphs: [
      'The Maasai are the most recognised cultural group in East Africa, known for their red shukas (robes), beadwork and semi-nomadic pastoral lifestyle. Many Maasai communities live around the Ngorongoro Conservation Area and northern Tanzania.',
      'Cultural visits include learning about their homes (manyattas), dances, and traditional knowledge of the land and wildlife.',
    ],
    tips: ['Found across northern Tanzania and southern Kenya', 'Known for red shukas and beadwork', 'Visits include manyatta tours and dances', 'Choose community-run, ethical visits'],
  },
  'culture-chagga': {
    paragraphs: [
      'The Chagga people live on the fertile southern slopes of Mount Kilimanjaro and are traditionally farmers, known for their coffee, banana and yam cultivation. They have a rich history of cooperative farming and trade.',
      'A Chagga cultural visit often includes a walk through coffee farms, a visit to a traditional cave, and learning about their agricultural systems.',
    ],
    tips: ['Live on Kilimanjaro’s southern slopes', 'Known for coffee and banana farming', 'Visits include farm walks and cave tours', 'One of Tanzania’s most educated and entrepreneurial groups'],
  },
  'planning-visa': {
    paragraphs: [
      'Most visitors need a visa to enter Tanzania. The e-Visa is available online through the official Tanzania Immigration portal and is the recommended method. Processing usually takes 7–10 business days.',
      'A single-entry tourist visa costs $50 for most nationalities ($100 for US citizens, valid for multiple entries). Passports must be valid for at least 6 months beyond your date of entry.',
    ],
    tips: ['Apply for e-Visa online before travel', 'Processing: 7–10 business days', 'Most nationalities: $50 single-entry', 'US citizens: $100 multiple-entry', 'Passport valid 6+ months beyond entry'],
  },
  'planning-currency': {
    paragraphs: [
      'The Tanzanian Shilling (TZS) is the local currency. USD is widely accepted in lodges, parks and for tips. Bring USD notes printed after 2009 — older notes may be refused.',
      'Exchange a small amount of local currency for market purchases and small tips. ATMs are available in Arusha, Moshi and Dar es Salaam but are unreliable in rural areas.',
    ],
    tips: ['Local currency: Tanzanian Shilling (TZS)', 'USD widely accepted — bring post-2009 notes', 'Exchange small amounts for local spending', 'Carry cash — ATMs are unreliable outside cities', 'Credit cards accepted in some lodges (often with surcharge)'],
  },
  'planning-tipping': {
    paragraphs: [
      'Tipping is customary in Tanzania and an important supplement to local wages. For a safari guide, $15–$25 per day per group is a common guideline. Camp staff tips are often pooled — $10–$15 per day per traveller.',
      'For porters on Kilimanjaro, tips are more structured — ask your operator for the recommended breakdown.',
    ],
    tips: ['Safari guide: $15–$25/day per group', 'Camp/lodge staff: $10–$15/day per traveller (pooled)', 'Kilimanjaro porters: structured — ask your operator', 'Tip in USD cash', 'Always tip at the end of the service'],
  },
  'planning-internet': {
    paragraphs: [
      'Internet is available in most lodges and camps, though speeds vary and some remote camps have very limited or satellite-only connectivity. Urban areas (Arusha, Moshi, Dar es Salaam) have good 4G coverage.',
      'For reliable data on safari, buy a local SIM card with a data bundle.',
    ],
    tips: ['Lodge Wi-Fi is often slow or limited in remote areas', '4G is good in cities and many parks', 'Buy a local SIM for reliable safari data', 'Consider an eSIM if your phone supports it'],
  },
  'planning-sim': {
    paragraphs: [
      'The main mobile networks in Tanzania are Vodacom, Airtel and Tigo. Vodacom has the widest coverage in rural and safari areas. SIM cards are cheap ($1–$2) and data bundles are affordable (e.g. 10GB for ~$5).',
      'You can buy a SIM at the airport on arrival (bring your passport for registration) or at shops in Arusha and Moshi.',
    ],
    tips: ['Main networks: Vodacom, Airtel, Tigo', 'Vodacom has best rural/safari coverage', 'SIM costs ~$1–$2, data ~$5 for 10GB', 'Bring passport for SIM registration', 'Buy at airport or in Arusha/Moshi'],
  },
  'planning-electricity': {
    paragraphs: [
      'Tanzania uses 230V electricity with Type D and Type G plug sockets (British-style three-pin). Most lodges and camps have charging facilities in tents or central areas.',
      'Bring a universal adapter and a power bank for long game drives. Some remote camps run on solar/generator power and turn off electricity at night.',
    ],
    tips: ['230V, Type D and Type G plugs', 'Bring a universal adapter', 'Power bank essential for game drives', 'Some camps run on solar/generator — limited night power', 'Most lodges offer charging in rooms or central areas'],
  },
  'planning-weather': {
    paragraphs: [
      'Tanzania has a tropical climate with regional variation. The coast and Zanzibar are hot and humid (25–35°C). The northern safari parks are warm during the day (20–30°C) and cool at night (10–15°C). Highland areas (Arusha, Moshi) can be chilly.',
      'The long rains fall March–May; short rains in November. June–October is the cool, dry season — the best safari period.',
    ],
    tips: ['Coast/Zanzibar: hot and humid (25–35°C)', 'Northern parks: warm days, cool nights', 'Highlands (Arusha/Moshi): can be chilly', 'Long rains: March–May', 'Best safari weather: June–October'],
  },
  'planning-insurance': {
    paragraphs: [
      'Comprehensive travel insurance is essential for a Tanzania safari. It should cover medical emergencies, evacuation, trip cancellation, baggage loss and delays, and safari activities.',
      'If climbing Kilimanjaro, ensure your policy covers high-altitude trekking (up to 6,000m) and emergency helicopter evacuation.',
    ],
    tips: ['Cover medical, evacuation, cancellation and baggage', 'Ensure safari activities are covered', 'Kilimanjaro: must cover high-altitude trekking', 'Carry your insurance details and emergency numbers', 'Check COVID-19 coverage if applicable'],
  },
};

export default function TanzaniaTravelGuidePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden bg-secondary px-6 pb-24 pt-36 text-white md:pt-44">
        <div className="absolute inset-0">
          <Image
            src={USARI_IMAGES.sunsetPlain}
            alt="Tanzania safari landscape"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/70 to-secondary" />
        </div>
        <div className="container relative mx-auto max-w-5xl">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-accent backdrop-blur-sm">
            Tanzania Travel Guide
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-[0.98] md:text-7xl">
            Everything you need to plan your Tanzania journey.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/72">
            Safari planning, wildlife guides, the Great Migration, cultural encounters and practical travel tips —
            all in one place. Start here and design a trip that feels like yours.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all hover:bg-accent hover:text-secondary"
              >
                {cat.icon} {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY NAV STRIP */}
      <section className="sticky top-16 z-30 border-b border-border/30 bg-background/95 backdrop-blur-xl md:top-20">
        <div className="container mx-auto flex items-center gap-1 overflow-x-auto px-6 py-3">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {cat.icon} {cat.label}
            </a>
          ))}
        </div>
      </section>

      {/* CATEGORY SECTIONS */}
      {categories.map((cat, idx) => (
        <section key={cat.id} id={cat.id} className={idx % 2 === 0 ? "section-padding bg-muted/20" : "section-padding"}>
          <div className="container mx-auto px-6">
            {/* Category Header */}
            <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.28em] text-primary">{cat.label}</span>
                </div>
                <h2 className="font-serif text-4xl leading-tight text-secondary md:text-5xl">{cat.title}</h2>
                <p className="max-w-xl text-base leading-relaxed text-muted-foreground">{cat.intro}</p>
              </div>
              <div className="relative h-48 overflow-hidden rounded-[1.5rem] border border-border/40 shadow-lg lg:h-64">
                <Image
                  src={cat.image}
                  alt={cat.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
              </div>
            </div>

            {/* Topic Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cat.topics.map((topic) => (
                <a
                  key={topic.title}
                  href={topic.href}
                  className="group relative overflow-hidden rounded-2xl border border-border/60 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rotate-45 bg-primary/5 transition-transform group-hover:bg-primary/10" />
                  <div className="relative flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-primary">
                      {topic.icon}
                    </div>
                    <ChevronRight className="ml-auto h-4 w-4 text-border transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <h3 className="relative mt-4 font-serif text-xl leading-tight text-secondary">{topic.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{topic.desc}</p>
                </a>
              ))}
            </div>

            {/* Topic Detail Content */}
            <div className="mt-8 grid gap-4">
              {cat.topics.map((topic) => {
                const content = detailContent[topic.href.replace('#', '')];
                if (!content) return null;
                const anchorId = topic.href.replace('#', '');
                return (
                  <div
                    key={anchorId}
                    id={anchorId}
                    className="scroll-mt-32 rounded-2xl border border-border/50 bg-white p-6 shadow-sm sm:p-8"
                  >
                    <h3 className="mb-3 font-serif text-2xl leading-tight text-secondary">{topic.title}</h3>
                    {content.paragraphs.map((p, i) => (
                      <p key={i} className="mb-4 text-sm leading-relaxed text-muted-foreground">{p}</p>
                    ))}
                    {content.tips && content.tips.length > 0 && (
                      <div className="mt-4 rounded-xl bg-primary/5 p-5">
                        <p className="mb-3 text-[10px] font-black uppercase tracking-[0.18em] text-primary">Quick tips</p>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {content.tips.map((tip, i) => (
                            <li key={i} className="flex gap-2 text-xs leading-relaxed text-secondary/80">
                              <span className="text-accent">•</span> {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative overflow-hidden bg-secondary px-6 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(236,173,56,0.14),transparent_34%),radial-gradient(circle_at_92%_18%,rgba(174,62,35,0.16),transparent_30%)]" />
        <div className="container relative mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">Ready to build your Tanzania safari?</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/72">
            Use this guide to shape your plan, then let our Arusha-based team design a route that fits your dates, style and budget.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-accent px-8 text-[10px] font-black uppercase tracking-[0.2em] text-secondary shadow-xl transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              Build My Safari <Compass className="h-4 w-4" />
            </Link>
            <Link
              href="/tours"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-secondary"
            >
              Browse Tours <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
