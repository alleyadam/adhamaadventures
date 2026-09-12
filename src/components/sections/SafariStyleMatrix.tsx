import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SAFARI_STYLES } from '@/lib/safari-content';

export default function SafariStyleMatrix() {
  return (
    <section className="section-padding bg-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(236,166,45,0.2),transparent_30rem),radial-gradient(circle_at_90%_70%,rgba(255,255,255,0.08),transparent_28rem)]" />
      <div className="container mx-auto px-6">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="editorial-label text-accent">Safari styles</span>
            <h2 className="editorial-heading mb-0 text-white">Choose the way you want to travel.</h2>
          </div>
          <p className="max-w-xl text-lg font-serif italic leading-relaxed text-white/70">
            From mobile camping to exclusive private safaris, Adhama’s strength is building the right style around the traveller, not forcing every traveller into one package.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {SAFARI_STYLES.map((style, index) => (
            <Link
              href="/tours"
              key={style.title}
              className={`group relative min-h-[380px] overflow-hidden bg-white/5 shadow-2xl ${index % 2 === 0 ? 'organic-frame' : 'organic-frame-alt'}`}
            >
              <Image
                src={style.image}
                alt={style.title}
                fill
                className="object-cover opacity-75 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-95"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 image-vignette" />
              <div className="absolute inset-x-6 bottom-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-secondary">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
                <h3 className="mb-3 font-serif text-3xl italic leading-none">{style.title}</h3>
                <p className="text-sm leading-relaxed text-white/75">{style.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
