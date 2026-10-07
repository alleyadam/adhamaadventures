'use client';

import Image from 'next/image';
import { USARI_IMAGES } from '@/lib/usari-images';

const GALLERY_IMAGES = [
  { src: USARI_IMAGES.lionesses, alt: 'Lionesses resting in the Serengeti, Tanzania safari wildlife', span: 'col-span-2 row-span-2' },
  { src: USARI_IMAGES.elephantsAtDusk, alt: 'Elephants at dusk in Tarangire National Park', span: 'col-span-1 row-span-1' },
  { src: USARI_IMAGES.cheetahPortrait, alt: 'Cheetah portrait on the Serengeti plains', span: 'col-span-1 row-span-1' },
  { src: USARI_IMAGES.maasaiSunset, alt: 'Maasai cultural experience at sunset in Tanzania', span: 'col-span-1 row-span-2' },
  { src: USARI_IMAGES.zebraStripes, alt: 'Zebras on the open plains of Tanzania', span: 'col-span-1 row-span-1' },
  { src: USARI_IMAGES.hotAirBalloon, alt: 'Hot air balloon over the Serengeti at sunrise', span: 'col-span-1 row-span-1' },
  { src: USARI_IMAGES.kilimanjaroPeak, alt: 'Mount Kilimanjaro peak above the clouds', span: 'col-span-2 row-span-1' },
  { src: USARI_IMAGES.elephantFamily, alt: 'Elephant family crossing the savannah', span: 'col-span-1 row-span-1' },
  { src: USARI_IMAGES.leopardTree, alt: 'Leopard resting in an acacia tree', span: 'col-span-1 row-span-1' },
  { src: USARI_IMAGES.wildebeestCrossing, alt: 'Wildebeest migration river crossing', span: 'col-span-2 row-span-1' },
  { src: USARI_IMAGES.rhinoNgorongoro, alt: 'Rhino in the Ngorongoro Crater', span: 'col-span-1 row-span-1' },
  { src: USARI_IMAGES.flamingoLake, alt: 'Flamingos on a soda lake in Tanzania', span: 'col-span-1 row-span-1' },
  { src: USARI_IMAGES.savannahMist, alt: 'Misty morning on the savannah', span: 'col-span-1 row-span-1' },
  { src: USARI_IMAGES.acaciaLion, alt: 'Lion resting under an acacia tree', span: 'col-span-1 row-span-1' },
  { src: USARI_IMAGES.migrationHerd, alt: 'Wildebeest herd on the move in the Serengeti', span: 'col-span-2 row-span-1' },
  { src: USARI_IMAGES.treeSilhouette, alt: 'Iconic acacia tree silhouette at sunset', span: 'col-span-1 row-span-1' },
  { src: USARI_IMAGES.safariSunrise, alt: 'Sunrise over the Serengeti plains', span: 'col-span-1 row-span-1' },
  { src: USARI_IMAGES.buffaloHerd, alt: 'Cape buffalo herd on the plains', span: 'col-span-1 row-span-1' },
  { src: USARI_IMAGES.guideBinoculars, alt: 'Adhama guide scanning the horizon', span: 'col-span-1 row-span-2' },
  { src: USARI_IMAGES.luxuryCamp, alt: 'Luxury safari camp under the stars', span: 'col-span-1 row-span-1' },
  { src: USARI_IMAGES.campFire, alt: 'Camp fire under the African sky', span: 'col-span-1 row-span-1' },
  { src: USARI_IMAGES.walkingSafari, alt: 'Walking safari experience in Tanzania', span: 'col-span-2 row-span-1' },
  { src: USARI_IMAGES.mobileCamp, alt: 'Mobile explorer camp in the wilderness', span: 'col-span-1 row-span-1' },
] as const;

export default function HomeImageGallery() {
  return (
    <section className="section-padding overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-14 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="editorial-label">Through our lens</span>
            <h2 className="section-heading">Tanzania as we see it.</h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              These are not stock photos. They are moments from the routes Adhama guides every day — the wildlife, landscapes, and people that make a Tanzania safari unforgettable.
            </p>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-primary">
            Authentic safari photography
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-[1.25rem] ${img.span} aspect-square md:aspect-auto`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs font-bold leading-snug text-white text-shadow-sm line-clamp-2">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
