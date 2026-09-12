import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Camera } from 'lucide-react';

const galleryItems = [
  { src: '/images/Cheetah.jpeg', title: 'Cheetah on the plains', tag: 'Predators' },
  { src: '/images/Elephant3.jpeg', title: 'Tarangire elephant country', tag: 'Elephants' },
  { src: '/images/adhama-old/wildebeest-river-crossing.webp', title: 'Migration movement', tag: 'Serengeti' },
  { src: '/images/Kilimanjaro.jpeg', title: 'Kilimanjaro horizons', tag: 'Mountain' },
  { src: '/images/Maasai.jpeg', title: 'Community encounters', tag: 'Culture' },
  { src: '/images/adhama-old/zanzibar-rock.webp', title: 'Zanzibar coast days', tag: 'Beach' },
  { src: '/images/Lion.jpeg', title: 'Lion country', tag: 'Big cats' },
  { src: '/images/Flamengo2.jpeg', title: 'Flamingo lakes', tag: 'Birding' },
  { src: '/images/Girrafe.jpeg', title: 'Giraffe silhouettes', tag: 'Wildlife' },
  { src: '/images/Hippopotamus.jpeg', title: 'Hippo pools', tag: 'Waterways' },
  { src: '/images/adhama-old/maasai-attire.webp', title: 'Maasai heritage', tag: 'People' },
  { src: '/images/adhama-old/tanzania-camping-safari-1.webp', title: 'Safari camp life', tag: 'Camping' },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-secondary px-6 pb-20 pt-36 text-white md:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,155,64,0.24),transparent_32rem)]" />
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A2011]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="mb-3 flex w-fit items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-[9px] font-black uppercase tracking-[0.16em] ring-1 ring-white/20">
                    <Camera className="h-3 w-3 text-accent" />
                    {item.tag}
                  </div>
                  <h3 className="font-serif text-2xl italic leading-tight">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
