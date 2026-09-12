export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://adhamaafricaadventures.com';

type FallbackTour = {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price?: number;
  category: string;
  featured: boolean;
  image: string;
  excerpt: string;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const inferDuration = (title: string) => {
  const match = title.match(/(\d+)\s*[- ]?\s*(day|days)/i);
  if (match) return `${match[1]} ${Number(match[1]) === 1 ? 'day' : 'days'}`;
  if (/day trip/i.test(title)) return '1 day';
  return 'Custom';
};

const inferDestination = (title: string) => {
  const lower = title.toLowerCase();
  const destinations = [
    ['zanzibar', 'Zanzibar'],
    ['mikumi', 'Mikumi'],
    ['tarangire', 'Tarangire'],
    ['ngorongoro', 'Ngorongoro'],
    ['serengeti', 'Serengeti'],
    ['kilimanjaro', 'Kilimanjaro'],
    ['lake natron', 'Lake Natron'],
    ['lake eyasi', 'Lake Eyasi'],
    ['hadzabe', 'Lake Eyasi & Hadzabe'],
    ['arusha', 'Arusha'],
    ['materuni', 'Materuni & Moshi'],
    ['karatu', 'Karatu'],
    ['saadani', 'Saadani'],
    ['udzungwa', 'Udzungwa'],
    ['lushoto', 'Lushoto, Tanga'],
    ['maasai', 'Maasai Communities'],
  ] as const;
  return destinations.find(([key]) => lower.includes(key))?.[1] || 'Tanzania';
};

const inferCategory = (title: string) => {
  const lower = title.toLowerCase();
  if (/zanzibar|beach|coast|shores/.test(lower)) return 'Beach';
  if (/kilimanjaro|materuni|waterfall|walking|trek|hike/.test(lower)) return 'Trekking';
  if (/culture|cultural|hadzabe|datoga|maasai|cooking|community|communities|village|chagga/.test(lower)) return 'Culture';
  if (/luxury|honeymoon/.test(lower)) return 'Luxury';
  if (/camping/.test(lower)) return 'Camping';
  if (/migration|wildbeast|wildebeest/.test(lower)) return 'Migration';
  if (/private/.test(lower)) return 'Private';
  return 'Wildlife';
};

const inferImage = (title: string) => {
  const lower = title.toLowerCase();
  if (/zanzibar|beach|coast|shores|saadani/.test(lower)) return '/images/adhama-old/zanzibar-rock.webp';
  if (/kilimanjaro|materuni|waterfall|moshi|chagga/.test(lower)) return '/images/adhama-old/kilimanjaro-umbwe.webp';
  if (/culture|cultural|hadzabe|datoga|maasai|cooking|community|communities|village/.test(lower)) return '/images/adhama-old/maasai-attire.webp';
  if (/mikumi|udzungwa/.test(lower)) return '/images/adhama-old/giraffe-wild-scaled.jpg';
  if (/tarangire/.test(lower)) return '/images/Elephant3.jpeg';
  if (/migration|wildbeast|wildebeest/.test(lower)) return '/images/adhama-old/wildebeest-river-crossing.webp';
  if (/luxury|honeymoon/.test(lower)) return '/images/adhama-old/luxury-safari.webp';
  if (/camping/.test(lower)) return '/images/adhama-old/tanzania-camping-safari-1.webp';
  return '/images/adhama-old/serengeti-10-day.webp';
};

const makeCatalogTour = (title: string): FallbackTour => {
  const category = inferCategory(title);
  const destination = inferDestination(title);
  return {
    id: slugify(title),
    title,
    destination,
    duration: inferDuration(title),
    category,
    featured: false,
    image: inferImage(title),
    excerpt: `${title} is part of Adhama's original Tanzania tour catalog, built around ${destination.toLowerCase()} with a ${category.toLowerCase()} focus and custom planning support from the Arusha team.`,
  };
};

const CULTURAL_AND_EXTENDED_TOURS = [
  'Arusha National Park Day Trip with Walking Safari',
  'A Day trip to Hadzabe Tribe',
  '1 Day Materuni Waterfalls, Cultural and Coffee Adventure',
  '1-Day Arusha Traditional Cooking Class',
  '4-Day Taste of Tanzania Safari with Culture',
  '4 Day Safari and Cultural Experience in Tanzania',
  '4-Day Tanzania Wildlife & Cultural Safari',
  '4-Day Tanzania Safari and Cultural Experience Tour',
  '4-Day Experiencing Local Communities Cultures & Arusha Walking Safari',
  '4-Day Ngorongoro-Serengeti Hadzabe & Datoga Experience',
  '4-Days Big 5 Tour and Culture Tanzania Experiences',
  '4-Day Big Five Wildlife & Cultural Experience Safari',
  '6-Day Immersing In Nature, Culture & Discovery',
  '5-Cultural Tour in Magamba Forest, Lushoto Tanga',
  '5 Day Northern Tanzania Classic Safari Nature, Wildlife & Adventure',
  '8 Days The Best of Tanzania Wildlife and Cultural Safari',
  '8-Day From Serengeti Plains to Zanzibar Shores: A Wildlife and Cultural Escape',
  '8-Day Incredible Safari + Waterfall Hike & Cultural Immersion',
  '8-Day Northern Circuit Safari & Cultural Tour',
  '8-Days Serengeti, Ngorongoro, Hadzabe Click Language',
  '9 Days Mid-range Tanzania Safari + Cultural Experience',
  '9-Day Luxury Honeymoon Safari & Zanzibar Beach',
  '9-Day Private Experience Tanzania Safari & Culture Tour',
  '10-Day Wilderness and Culture Safari',
  '10 Day Mid-Range Safari: Wildlife, Landscapes & Culture in Tanzania',
  '10 Day Safari & Cultural Experience in Tanzania',
  '10-Day Wildlife Safari & Cultural Excursion at Lake Natron and Lake Eyasi',
  '10-Days African Culture & Nature Experience',
  '11-Day Tanzanian Safari & Culture Experience With Zanzibar Extension',
  '12-Day Tanzania Wildlife Safari, Cultural Experience & Beach Holiday',
  '2 Day Ngorongoro Crater and Cultural Experience',
  '2 Day Safari to Hadzabe Cultural Tour',
  '2 Days Mikumi National Park and Maasai Boma Visit',
  '2-Day Discovery Voyage: Nature, Culture, and Thrills in Karatu District',
  '2-Day Exploring Mikumi Tour from Dar Es Salaam: Game Drive & Maasai Village',
  '2-Day Lake Eyasi and Hadzabe Cultural Experience Tour',
  '3-Day Tanzania Cultural Immersion',
  '3-Day Special Wildlife & Cultural Experience',
  '3 Day Tanzania Wildlife Safari and Culture Tour',
  '3 Day Wildlife and Cultural Experience in Tanzania',
  '3-Day Budget Tarangire Ngorongoro and Culture Experience',
  '3-Day Cultural & Kilimanjaro Experience: Chagga Culture, Kilimanjaro Trails & Eco-Lodge Stay',
  '3-Day Culture Experience and Safari',
  '3-Day Extraordinary Safari Mikumi National Park + Visit Maasai Boma',
  '3-Day Golden Safari: Mikumi, Udzungwa Wonders + Sanje Waterfalls & Maasai Village',
  '3-Day Maasai Culture, Tarangire & Ngorongoro Safari Experience',
  '3-Day Night Gamedrive in Tarangire National Park and Cultural Experience',
  '3-Day Tanzania Safari & Maasai Cultural Experience',
  '3-Day Wildlife and Cultural Safari: Tarangire, Lake Eyasi & Ngorongoro',
  '3-Day Wildlife Safari and Cultural Experience in Northern Tanzania (Hadzabe Visit Included)',
  '3 Day Saadani National Park and Maasai Village Tour',
  '4-Day Wildlife Safari and Cultural Immersion',
  '4 Day Mid-Range Safari Adventure and Cultural Highlight',
  '4 Days Tanzania Cultural & Wildlife Adventure',
];

export const FALLBACK_TOURS: FallbackTour[] = [
  {
    id: 'wildbeast-migration-river-crossing',
    title: 'Wildbeast Migration - River Crossing',
    destination: 'Serengeti & Mara River',
    duration: 'Jul - Oct',
    price: 3800,
    category: 'Migration',
    featured: true,
    image: '/images/adhama-old/wildebeest-river-crossing.webp',
    excerpt:
      'A featured Adhama migration package for the July to October river-crossing season, built around the drama of the Mara River and private Serengeti guiding.',
  },
  {
    id: 'unforgettable-tanzania-safaris',
    title: '9 Days Unforgettable Tanzania Safaris',
    destination: 'Northern Circuit',
    duration: '9 days',
    price: 3125,
    category: 'Safari',
    featured: true,
    image: '/images/adhama-old/serengeti-10-day.webp',
    excerpt:
      'A classic northern circuit itinerary through Tanzania’s most loved wildlife landscapes, shaped for private travellers.',
  },
  {
    id: 'umbwe-kilimanjaro-climbing',
    title: '6 Days Umbwe Route: Kilimanjaro Climbing',
    destination: 'Kilimanjaro',
    duration: '6 days',
    price: 2380,
    category: 'Trekking',
    featured: true,
    image: '/images/adhama-old/kilimanjaro-umbwe.webp',
    excerpt:
      'A focused Kilimanjaro climb for active travellers who want a steeper, quieter route led by experienced local crews.',
  },
  {
    id: 'luxury-safari-six-days',
    title: '6 Days & 5 Night Luxury Safari',
    destination: 'Serengeti, Tarangire & Ngorongoro',
    duration: '6 days',
    price: 2350,
    category: 'Luxury',
    featured: true,
    image: '/images/adhama-old/luxury-safari.webp',
    excerpt:
      'Premium camps, handpicked game-drive routes, and seamless lodge-to-lodge logistics across the northern circuit.',
  },
  {
    id: 'tanzania-camping-safari-seven-days',
    title: '7 Days Tanzania Camping Safari',
    destination: 'Northern Circuit',
    duration: '7 days',
    price: 2201,
    category: 'Camping',
    featured: true,
    image: '/images/adhama-old/tanzania-camping-safari-1.webp',
    excerpt:
      'An original Adhama camping safari for travellers who want immersive nights close to Tanzania’s wild landscapes.',
  },
  {
    id: 'four-days-three-night-safari',
    title: '4 Days and 3 Night Safari',
    destination: 'Northern Circuit',
    duration: '4 days',
    price: 1445,
    category: 'Wildlife',
    featured: true,
    image: '/images/adhama-old/serengeti-10-day.webp',
    excerpt:
      'A compact Tanzania safari package for travellers who want a powerful wildlife route in four days.',
  },
  {
    id: 'zanzibar-to-mikumi-two-days',
    title: '2 Days & 1 Night From Zanzibar to Mikumi National Park',
    destination: 'Zanzibar & Mikumi',
    duration: '2 days',
    price: 890,
    category: 'Wildlife',
    featured: true,
    image: '/images/adhama-old/giraffe-wild-scaled.jpg',
    excerpt:
      'A short safari escape from Zanzibar to Mikumi National Park, designed for travellers adding wildlife to an island stay.',
  },
  {
    id: 'private-safari-three-days',
    title: '3 Days & 2 Nights Private Safari',
    destination: 'Tanzania',
    duration: '3 days',
    price: 850,
    category: 'Private',
    featured: true,
    image: '/images/adhama-old/giraffe-wild-scaled.jpg',
    excerpt:
      'A flexible private safari with a dedicated vehicle, local guide, and routing shaped around your pace.',
  },
  {
    id: 'private-safari-two-days',
    title: '2 Days & 1 Night Private Safari',
    destination: 'Tanzania',
    duration: '2 days',
    price: 780,
    category: 'Private',
    featured: true,
    image: '/images/adhama-old/lion-african.webp',
    excerpt:
      'A short private wildlife itinerary for travellers who want direct, efficient safari time with a local guide.',
  },
  {
    id: 'zanzibar-beach-holiday',
    title: '7 days Zanzibar Beach Holiday',
    destination: 'Zanzibar',
    duration: '7 days',
    price: 511,
    category: 'Beach',
    featured: true,
    image: '/images/adhama-old/swahili-coast.webp',
    excerpt:
      'A relaxed island extension with spice heritage, Stone Town texture, coastal culture, and warm Indian Ocean days.',
  },
  {
    id: 'tarangire-day-trip',
    title: 'Day Trip Tarangire National Park',
    destination: 'Tarangire',
    duration: '1 day',
    price: 350,
    category: 'Wildlife',
    featured: true,
    image: '/images/Elephant3.jpeg',
    excerpt:
      'A one-day Tarangire safari focused on elephants, baobabs, and classic northern Tanzania game viewing.',
  },
  {
    id: 'zanzibar-beach-holiday-three-days',
    title: '3 Days Zanzibar Beach Holiday',
    destination: 'Zanzibar',
    duration: '3 days',
    price: 119,
    category: 'Beach',
    featured: true,
    image: '/images/adhama-old/zanzibar-rock.webp',
    excerpt:
      'A short Zanzibar beach holiday for travellers looking for Swahili coast culture, ocean air, and island downtime.',
  },
  {
    id: 'arusha-cultural-tour',
    title: '1-Day Arusha City Cultural Tour',
    destination: 'Arusha',
    duration: '1 day',
    price: 65,
    category: 'Culture',
    featured: true,
    image: '/images/adhama-old/maasai-attire.webp',
    excerpt:
      'A close-to-home cultural day designed around markets, local food, community stories, and authentic Arusha rhythm.',
  },
  ...CULTURAL_AND_EXTENDED_TOURS.map(makeCatalogTour),
];

export const TOUR_CATEGORIES = [
  {
    rank: '#1',
    title: 'Tanzania Tours Packages 2026-2027',
    href: '/tours?type=wildlife',
    image: '/images/adhama-old/serengeti-10-day.webp',
    description:
      'The original Adhama safari inventory: migration journeys, classic northern circuit safaris, camping trips, private routes, and short wildlife escapes.',
    itineraries: [
      'Wildbeast Migration - River Crossing',
      '4 Days and 3 Night Safari',
      '7 Days Tanzania Camping Safari',
    ],
  },
  {
    rank: '#2',
    title: 'Explore Cultural Based Tours',
    href: '/tours?type=culture',
    image: '/images/adhama-old/children-visit.webp',
    description:
      'Hadzabe, Datoga, Maasai, Chagga, cooking classes, walking safaris, school trips, and community-first journeys from the old Adhama catalog.',
    itineraries: [
      'A Day trip to Hadzabe Tribe',
      'Arusha Traditional Cooking Class',
      '4-Day Wildlife Safari and Cultural Immersion',
    ],
  },
  {
    rank: '#3',
    title: 'Kilimanjaro & Active Travel',
    href: '/tours?type=trekking',
    image: '/images/adhama-old/kilimanjaro-umbwe.webp',
    description:
      'Mountain routes, acclimatization planning, local crews, and pre/post-climb Arusha logistics.',
    itineraries: [
      '6 Days Umbwe Route',
      'Materuni Waterfalls, Cultural and Coffee Adventure',
      'Chagga Culture, Kilimanjaro Trails & Eco-Lodge Stay',
    ],
  },
  {
    rank: '#4',
    title: 'Zanzibar & Coast',
    href: '/destinations/zanzibar',
    image: '/images/adhama-old/zanzibar-rock.webp',
    description:
      'Beach holidays, spice farms, Stone Town walks, sandbanks, marine life, and safari-to-coast combinations.',
    itineraries: [
      '2 Days From Zanzibar to Mikumi',
      '3 Days Zanzibar Beach Holiday',
      '7 Days Zanzibar Beach Holiday',
    ],
  },
];

export const SAFARI_STYLES = [
  {
    title: 'Camping Safaris',
    image: '/images/adhama-old/tanzania-camping-safari-1.webp',
    description: 'Immersive nights close to nature for adventurous travellers.',
  },
  {
    title: 'Lodge Safaris',
    image: '/images/adhama-old/serengeti-10-day.webp',
    description: 'Classic lodge-based northern circuit routes with comfortable pacing.',
  },
  {
    title: 'Luxury Safaris',
    image: '/images/adhama-old/luxury-safari.webp',
    description: 'Premium camps, polished logistics, and handpicked safari routing.',
  },
  {
    title: 'Mobile Explorer Safaris',
    image: '/images/adhama-old/giraffe-wild-scaled.jpg',
    description: 'Flexible explorer-style routes that follow wildlife, season, and curiosity.',
  },
  {
    title: 'Small Group Safaris',
    image: '/images/adhama-old/maasai-attire.webp',
    description: 'Shared journeys with intimate groups and strong local connection.',
  },
  {
    title: 'Trekking',
    image: '/images/adhama-old/kilimanjaro-umbwe.webp',
    description: 'Kilimanjaro, walking safaris, waterfalls, and active foothill experiences.',
  },
];

export const TRUST_BADGES = [
  'Community-first operator',
  '45+ communities empowered',
  '1,000+ travellers hosted',
  '50,000+ trees planted',
  '22 schools supported',
];

export const ADHAMA_STORY_LINKS = [
  'Zanzibar’s Spice Farmers: The Untold Story Behind the Islands’ Heritage',
  'Packing for Tanzania: Your Responsible Travel Checklist',
  'A School Trip to Tanzania That Changed How Our Students See the World',
  'How Community Tourism is Changing Lives in Tanzania’s Maasai Villages',
];

export const FALLBACK_DESTINATIONS = [
  {
    id: 'serengeti',
    name: 'Serengeti',
    slug: 'serengeti',
    title: 'Follow the endless plains',
    circuit: 'Northern Circuit',
    category: 'Migration',
    image: '/images/adhama-old/wildebeest-river-crossing.webp',
    gallery: ['/images/adhama-old/serengeti-10-day.webp', '/images/Wilderbeast4.jpeg'],
    bestTime: 'June to October for dry-season game viewing, and July to October for Mara River crossing drama.',
    weather: 'Warm days, cooler mornings, and big open skies. Pack light layers for early game drives.',
    highlights: [
      'Great Migration movement across the plains.',
      'Predator sightings with lion, cheetah, and leopard.',
      'Private sunrise and sunset game drives.',
      'Maasai and local community encounters near the ecosystem.',
    ],
    description:
      'The world-famous plains where lion prides, cheetah hunts, and the Great Migration shape every horizon.',
  },
  {
    id: 'ngorongoro',
    name: 'Ngorongoro Crater',
    slug: 'ngorongoro-crater',
    title: 'Descend into a lost world',
    circuit: 'Northern Circuit',
    category: 'Big Five',
    image: '/images/adhama-old/lion-african.webp',
    gallery: ['/images/Lion.jpeg', '/images/Elephant.jpeg'],
    bestTime: 'June to October is crisp and reliable, while green season brings softer light and fewer vehicles.',
    weather: 'Cool mornings on the rim and warmer conditions inside the crater floor.',
    highlights: [
      'Dense Big Five viewing in a dramatic volcanic caldera.',
      'Black rhino possibilities with expert guide positioning.',
      'Spectacular crater-rim viewpoints.',
      'Easy pairing with Lake Manyara, Tarangire, and Serengeti.',
    ],
    description:
      'A volcanic amphitheater with dense wildlife, dramatic crater walls, and some of Tanzania’s best Big Five viewing.',
  },
  {
    id: 'kilimanjaro',
    name: 'Kilimanjaro',
    slug: 'kilimanjaro',
    title: 'Stand on Africa’s roof',
    circuit: 'Major Hubs',
    category: 'Trekking',
    image: '/images/adhama-old/kilimanjaro-umbwe.webp',
    gallery: ['/images/Kilimanjaro.jpeg', '/images/Mount Meru.jpeg'],
    bestTime: 'January to March and June to October offer the most stable trekking windows.',
    weather: 'Conditions shift from warm rainforest to alpine cold. Layering is essential.',
    highlights: [
      'Expert mountain crews and carefully paced acclimatization.',
      'Umbwe, Machame, Marangu, and custom route planning.',
      'Summit sunrise above Africa.',
      'Safari or Zanzibar extensions after the climb.',
    ],
    description:
      'Snow-bright summit trails, expert mountain crews, and routes designed for steady acclimatization.',
  },
  {
    id: 'tarangire',
    name: 'Tarangire',
    slug: 'tarangire',
    title: 'Walk beneath baobab giants',
    circuit: 'Northern Circuit',
    category: 'Elephants',
    image: '/images/Elephant3.jpeg',
    gallery: ['/images/Elephant.jpeg', '/images/Elephant 2.jpeg'],
    bestTime: 'June to October is excellent for elephants gathering around the Tarangire River.',
    weather: 'Dry, golden, and warm by day with comfortable mornings and evenings.',
    highlights: [
      'Large elephant herds and ancient baobab landscapes.',
      'Quieter game drives than the busiest northern parks.',
      'Seasonal river wildlife concentration.',
      'Beautiful first or final safari stop from Arusha.',
    ],
    description:
      'A quieter northern park loved for ancient baobabs, seasonal elephant herds, and beautiful dry-season light.',
  },
  {
    id: 'lake-manyara',
    name: 'Lake Manyara',
    slug: 'lake-manyara',
    title: 'Birdlife, forests, and flamingos',
    circuit: 'Northern Circuit',
    category: 'Birding',
    image: '/images/Flamengo.jpeg',
    gallery: ['/images/Flamengo2.jpeg', '/images/Yellow Billed Stork.jpeg'],
    bestTime: 'June to October is dry and easy for wildlife, while green months reward birders.',
    weather: 'Mild lakeshore conditions with humid forest pockets and warm afternoons.',
    highlights: [
      'Flamingos, pelicans, storks, and groundwater forest birds.',
      'Escarpment views and compact safari routes.',
      'Tree-climbing lion possibilities.',
      'A gentle, scenic start to a northern circuit safari.',
    ],
    description:
      'A compact gem of groundwater forest, lakeshore birding, hot springs, and escarpment views.',
  },
  {
    id: 'zanzibar',
    name: 'Zanzibar',
    slug: 'zanzibar',
    title: 'Trade safari dust for turquoise water',
    circuit: 'Coastal & Islands',
    category: 'Beach',
    image: '/images/adhama-old/zanzibar-rock.webp',
    gallery: ['/images/adhama-old/swahili-coast.webp', '/images/adhama-old/zanzibar-rock.webp'],
    bestTime: 'June to October and December to February bring sunny beach weather and calm island rhythm.',
    weather: 'Warm coastal air, ocean breezes, and tropical humidity. Light breathable clothing works best.',
    highlights: [
      'Stone Town heritage, spice farms, and Swahili culture.',
      'White-sand beaches and turquoise Indian Ocean water.',
      'Perfect safari-to-coast recovery days.',
      'Marine activities, sandbanks, and slow island evenings.',
    ],
    description:
      'A culture-rich island finale with spice heritage, Swahili architecture, and restorative days by the sea.',
  },
  {
    id: 'mikumi',
    name: 'Mikumi',
    slug: 'mikumi',
    title: 'A wild escape from Dar or Zanzibar',
    circuit: 'Southern Circuit',
    category: 'Wildlife',
    image: '/images/adhama-old/giraffe-wild-scaled.jpg',
    gallery: ['/images/adhama-old/giraffe-wild-scaled.jpg', '/images/Elephant 2.jpeg'],
    bestTime: 'June to October is dry and reliable, but Mikumi works well for short safari escapes year-round.',
    weather: 'Warm lowland conditions with comfortable mornings and hotter afternoons.',
    highlights: [
      'Short safari routing from Dar es Salaam or Zanzibar.',
      'Open plains with giraffe, elephant, zebra, buffalo, and predator possibilities.',
      'Easy pairing with Maasai village visits.',
      'A strong choice for two- and three-day itineraries.',
    ],
    description:
      'A practical and rewarding southern safari park, especially for travellers starting from Dar es Salaam or Zanzibar.',
  },
  {
    id: 'lake-eyasi',
    name: 'Lake Eyasi & Hadzabe',
    slug: 'lake-eyasi',
    title: 'Meet ancient cultures by the lake',
    circuit: 'Northern Circuit',
    category: 'Culture',
    image: '/images/adhama-old/maasai-attire.webp',
    gallery: ['/images/adhama-old/maasai-attire.webp', '/images/Maasai.jpeg'],
    bestTime: 'June to October is easiest for dry-road travel, while cultural visits can be planned year-round.',
    weather: 'Dry, warm, and open, with cooler mornings around the lake basin.',
    highlights: [
      'Hadzabe cultural visits and storytelling.',
      'Datoga blacksmith and community experiences.',
      'Strong pairing with Ngorongoro and Karatu routes.',
      'A meaningful culture-forward stop in northern Tanzania.',
    ],
    description:
      'A cultural landscape known for Hadzabe and Datoga encounters, often paired with Ngorongoro, Tarangire, and Karatu.',
  },
  {
    id: 'lake-natron',
    name: 'Lake Natron',
    slug: 'lake-natron',
    title: 'Flamingos beneath volcanic horizons',
    circuit: 'Northern Circuit',
    category: 'Birding',
    image: '/images/Flamengo2.jpeg',
    gallery: ['/images/Flamengo.jpeg', '/images/Olduvai Gorge Sand.jpeg'],
    bestTime: 'June to October brings drier access and dramatic desert light.',
    weather: 'Hot, dry, and exposed. Sun protection and water planning matter here.',
    highlights: [
      'Flamingo viewing and surreal soda-lake scenery.',
      'Remote landscapes between Serengeti and the Rift Valley.',
      'Waterfalls, walks, and Maasai community context.',
      'Excellent for adventurous culture-and-nature itineraries.',
    ],
    description:
      'A remote northern landscape of flamingos, volcanic views, waterfalls, and Maasai cultural context.',
  },
  {
    id: 'arusha-np',
    name: 'Arusha National Park',
    slug: 'arusha-np',
    title: 'Walking safari close to Arusha',
    circuit: 'Major Hubs',
    category: 'Walking Safari',
    image: '/images/Mount Meru.jpeg',
    gallery: ['/images/Mount Meru.jpeg', '/images/lake duluti.jpeg'],
    bestTime: 'Year-round, with clear mountain views often strongest in the drier months.',
    weather: 'Mild highland conditions with lush forest and cool mornings.',
    highlights: [
      'Walking safari experiences near Mount Meru.',
      'Giraffe, buffalo, colobus monkeys, and birdlife.',
      'A perfect first or final day near Arusha.',
      'Easy pairing with Arusha city and cultural tours.',
    ],
    description:
      'A scenic park near Arusha with Mount Meru views, walking safaris, forest wildlife, and day-trip convenience.',
  },
  {
    id: 'saadani',
    name: 'Saadani',
    slug: 'saadani',
    title: 'Where bush meets the Indian Ocean',
    circuit: 'Coastal & Islands',
    category: 'Coast & Wildlife',
    image: '/images/adhama-old/swahili-coast.webp',
    gallery: ['/images/adhama-old/swahili-coast.webp', '/images/adhama-old/zanzibar-rock.webp'],
    bestTime: 'June to October is usually the easiest dry-season window.',
    weather: 'Warm coastal weather with ocean humidity and breezy evenings.',
    highlights: [
      'Wildlife and beach atmosphere in one route.',
      'Useful for Dar es Salaam and coastal itineraries.',
      'Maasai village and culture add-ons.',
      'A distinctive alternative to classic inland parks.',
    ],
    description:
      'A coastal national park experience where wildlife routes meet the beach and Swahili coast atmosphere.',
  },
  {
    id: 'udzungwa',
    name: 'Udzungwa Mountains',
    slug: 'udzungwa',
    title: 'Waterfalls, forest trails, and rare primates',
    circuit: 'Southern Circuit',
    category: 'Trekking',
    image: '/images/lake duluti.jpeg',
    gallery: ['/images/lake duluti.jpeg', '/images/adhama-old/giraffe-wild-scaled.jpg'],
    bestTime: 'June to October offers easier trail conditions, though forest hikes can be planned most of the year.',
    weather: 'Humid forest climate with cooler highland pockets and possible rain.',
    highlights: [
      'Sanje Waterfalls and guided forest hikes.',
      'Strong pairing with Mikumi National Park.',
      'Active travel beyond vehicle-based safari.',
      'Southern circuit biodiversity and mountain scenery.',
    ],
    description:
      'A lush southern mountain destination for hikers, waterfall lovers, and travellers pairing Mikumi with active adventure.',
  },
  {
    id: 'materuni-moshi',
    name: 'Materuni & Moshi',
    slug: 'moshi',
    title: 'Coffee, waterfalls, and Kilimanjaro foothills',
    circuit: 'Major Hubs',
    category: 'Culture',
    image: '/images/adhama-old/kilimanjaro-umbwe.webp',
    gallery: ['/images/adhama-old/kilimanjaro-umbwe.webp', '/images/Kilimanjaro.jpeg'],
    bestTime: 'Clearer Kilimanjaro views are common in the drier months, but coffee and waterfall visits run year-round.',
    weather: 'Cooler foothill air, green slopes, and occasional mountain showers.',
    highlights: [
      'Materuni waterfalls and coffee experiences.',
      'Chagga culture in the Kilimanjaro foothills.',
      'Excellent pre- or post-climb day tour.',
      'Easy access from Moshi and Arusha.',
    ],
    description:
      'A Kilimanjaro foothills experience built around waterfalls, coffee culture, Chagga heritage, and mountain views.',
  },
  {
    id: 'karatu',
    name: 'Karatu',
    slug: 'karatu',
    title: 'Culture and crater-country staging point',
    circuit: 'Northern Circuit',
    category: 'Culture',
    image: '/images/Olduvai Gorge Sand.jpeg',
    gallery: ['/images/Olduvai Gorge Sand.jpeg', '/images/adhama-old/maasai-attire.webp'],
    bestTime: 'Karatu works year-round as a base for Ngorongoro, Lake Eyasi, and cultural routes.',
    weather: 'Pleasant highland climate with cooler evenings and fertile countryside.',
    highlights: [
      'A practical base for Ngorongoro and Lake Eyasi.',
      'Cultural activities, farms, and local market rhythm.',
      'Good for short discovery voyages.',
      'Easy connection across the northern circuit.',
    ],
    description:
      'A fertile highland town used as a cultural base and smart staging point for Ngorongoro, Lake Eyasi, and northern routes.',
  },
  {
    id: 'dar-es-salaam',
    name: 'Dar es Salaam',
    slug: 'dar-es-salaam',
    title: 'Coastal gateway to southern safaris',
    circuit: 'Coastal & Islands',
    category: 'Gateway',
    image: '/images/adhama-old/swahili-coast.webp',
    gallery: ['/images/adhama-old/swahili-coast.webp', '/images/adhama-old/zanzibar-rock.webp'],
    bestTime: 'Year-round as a travel hub, with June to October and December to February especially comfortable.',
    weather: 'Warm, humid coastal weather with Indian Ocean breezes.',
    highlights: [
      'Gateway for Mikumi, Saadani, Zanzibar, and southern circuits.',
      'Street culture, food, music, and Swahili urban life.',
      'Useful arrival or departure point.',
      'Good fit for short safari add-ons.',
    ],
    description:
      'Tanzania’s coastal commercial capital and a useful gateway for Mikumi, Saadani, Zanzibar, and southern safari routes.',
  },
];

export const SEO_IMAGES = [
  '/images/adhama-old/lion-african.webp',
  '/images/adhama-old/giraffe-wild-scaled.jpg',
  '/images/adhama-old/wildebeest-river-crossing.webp',
  '/images/adhama-old/zanzibar-rock.webp',
].map((image) => `${SITE_URL}${image}`);
