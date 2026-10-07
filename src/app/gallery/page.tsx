import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Camera } from 'lucide-react';
import { USARI_IMAGES } from '@/lib/usari-images';

const galleryItems = [
  { src: USARI_IMAGES.cheetahResting, title: 'Cheetah in the shade', tag: 'Predators' },
  { src: USARI_IMAGES.giraffeHerd, title: 'Giraffes across green country', tag: 'Wildlife' },
  { src: USARI_IMAGES.impala, title: 'Antelope on the plains', tag: 'Serengeti' },
  { src: USARI_IMAGES.kilimanjaroPeak, title: 'Kilimanjaro horizons', tag: 'Mountain' },
  { src: USARI_IMAGES.lionCub, title: 'Young lion in the bush', tag: 'Big cats' },
  { src: USARI_IMAGES.zanzibarBeach, title: 'Zanzibar coast days', tag: 'Beach' },
  { src: USARI_IMAGES.lionesses, title: 'Lion pride at rest', tag: 'Big cats' },
  { src: USARI_IMAGES.flamingoLake, title: 'Flamingo lakes', tag: 'Birding' },
  { src: USARI_IMAGES.giraffePortrait, title: 'Giraffe in green woodland', tag: 'Wildlife' },
  { src: USARI_IMAGES.baboonPortrait, title: 'Baboon on red earth', tag: 'Wildlife' },
  { src: USARI_IMAGES.maasaiSunset, title: 'Maasai heritage', tag: 'People' },
  { src: USARI_IMAGES.sunsetPlain, title: 'Evening over the plains', tag: 'Landscape' },
  { src: USARI_IMAGES.elephantFamily, title: 'Elephant family on the move', tag: 'Wildlife' },
  { src: USARI_IMAGES.leopardTree, title: 'Leopard in the acacia', tag: 'Predators' },
  { src: USARI_IMAGES.wildebeestCrossing, title: 'Migration river crossing', tag: 'Migration' },
  { src: USARI_IMAGES.rhinoNgorongoro, title: 'Rhino in Ngorongoro Crater', tag: 'Big Five' },
  { src: USARI_IMAGES.hotAirBalloon, title: 'Balloon over the Serengeti', tag: 'Experience' },
  { src: USARI_IMAGES.savannahMist, title: 'Mist on the savannah', tag: 'Landscape' },
  { src: USARI_IMAGES.acaciaLion, title: 'Lion under an acacia', tag: 'Big cats' },
  { src: USARI_IMAGES.migrationHerd, title: 'Herd on the move', tag: 'Migration' },
  { src: USARI_IMAGES.treeSilhouette, title: 'Acacia at sunset', tag: 'Landscape' },
  { src: USARI_IMAGES.safariSunrise, title: 'Sunrise on the plains', tag: 'Landscape' },
  { src: USARI_IMAGES.buffaloHerd, title: 'Cape buffalo herd', tag: 'Wildlife' },
  { src: USARI_IMAGES.guideBinoculars, title: 'Guide scanning the horizon', tag: 'Guides' },
  { src: USARI_IMAGES.luxuryCamp, title: 'Luxury safari camp', tag: 'Accommodation' },
  { src: USARI_IMAGES.campFire, title: 'Camp fire under the stars', tag: 'Experience' },
  { src: USARI_IMAGES.walkingSafari, title: 'Walking safari', tag: 'Experience' },
  { src: USARI_IMAGES.mobileCamp, title: 'Mobile explorer camp', tag: 'Accommodation' },
  { src: USARI_IMAGES.coffeeFarm, title: 'Coffee farm visit', tag: 'Culture' },
  { src: USARI_IMAGES.datogaBlacksmith, title: 'Datoga blacksmith', tag: 'Culture' },
  { src: USARI_IMAGES.chaggaCulture, title: 'Chagga cultural route', tag: 'Culture' },
  { src: USARI_IMAGES.hadzabeHunters, title: 'Hadzabe hunters', tag: 'Culture' },
  { src: USARI_IMAGES.flamingo, title: 'Flamingo in the shallows', tag: 'Birding' },
  { src: USARI_IMAGES.secretaryBird, title: 'Secretary bird on the plains', tag: 'Birding' },
  { src: USARI_IMAGES.greyCrownedCrane, title: 'Grey crowned crane', tag: 'Birding' },
  { src: USARI_IMAGES.eagle, title: 'Eagle in flight', tag: 'Birding' },
  { src: USARI_IMAGES.weaver, title: 'Weaver bird nest', tag: 'Birding' },
  { src: USARI_IMAGES.batEaredFox, title: 'Bat-eared fox', tag: 'Wildlife' },
  { src: USARI_IMAGES.wildDog, title: 'African wild dog', tag: 'Predators' },
  { src: USARI_IMAGES.southernGroundHornbills, title: 'Southern ground hornbill', tag: 'Birding' },
  { src: USARI_IMAGES.superbStarling, title: 'Superb starling', tag: 'Birding' },
  { src: USARI_IMAGES.blacksmithLapwing, title: 'Blacksmith lapwing', tag: 'Birding' },
  { src: USARI_IMAGES.elephantMud, title: 'Elephant at the mud bath', tag: 'Wildlife' },
  { src: USARI_IMAGES.lionRoar, title: 'Lion roaring at dusk', tag: 'Big cats' },
  { src: USARI_IMAGES.hippoPool, title: 'Hippo pool gathering', tag: 'Wildlife' },
  { src: USARI_IMAGES.cheetahGrass, title: 'Cheetah in tall grass', tag: 'Predators' },
  { src: USARI_IMAGES.safariJeep, title: 'Safari vehicle on the trail', tag: 'Experience' },
  { src: USARI_IMAGES.zebraDust, title: 'Zebra in the dust', tag: 'Wildlife' },
  { src: USARI_IMAGES.wildbeestRiver, title: 'Wildebeest at the river', tag: 'Migration' },
  { src: USARI_IMAGES.birdWatcher, title: 'Bird watching in Tanzania', tag: 'Birding' },
  { src: USARI_IMAGES.goldenSavannah, title: 'Golden savannah hour', tag: 'Landscape' },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-secondary px-6 pb-20 pt-36 text-white md:pt-44">
        <div className="absolute inset-0 bg-accent/10" />
        <div className="container relative mx-auto">
          <div className="max-w-4xl">
            <span className="editorial-label text-accent">Adhama gallery</span>
            <h1 className="font-serif text-5xl leading-[0.98] md:text-8xl">
              Tanzania, seen through <span className="italic text-accent">real journeys.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/72">
              Wildlife, Kilimanjaro, Zanzibar, community encounters, and safari moments that shape the Adhama experience.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="editorial-label">Visual archive</span>
              <h2 className="editorial-heading mb-0">Safari moments worth remembering.</h2>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.22em] text-primary hover:text-secondary">
              Plan from this moodboard <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid auto-rows-[260px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item, index) => (
              <div
                key={item.src}
                className={`group relative overflow-hidden rounded-[1.5rem] bg-secondary shadow-xl ${
                  index === 0 || index === 5 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-secondary/50" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="mb-3 flex w-fit items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-[9px] font-black uppercase tracking-[0.16em] ring-1 ring-white/20">
                    <Camera className="h-3 w-3 text-accent" />
                    {item.tag}
                  </div>
                  <h3 className="font-serif text-2xl  leading-tight">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
