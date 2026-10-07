import PageHeader from '@/components/layout/PageHeader';
import Image from 'next/image';

export default function OurStoryPage() {
  return (
    <div className="bg-background">
      <PageHeader
        title="Our Story"
        subtitle="Bridging the gap between global explorers and vibrant local communities since our inception."
      />
      <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-secondary tracking-tighter italic text-primary">"Karibu Sana - Welcome"</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Adhama Africa Adventures was born out of a desire to redefine the Tanzanian safari experience. We saw a world of "staged tourist traps" and wanted to offer something real. Our story is one of deep roots in the Arusha region and a commitment to showing the world the true heart of East Africa.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded by local experts with decades of experience, we set out to create a "Community First" operator where the beauty of the Serengeti and Kilimanjaro is shared hand-in-hand with the people who call these landscapes home.
            </p>
          </div>
          <div className="relative organic-frame overflow-hidden shadow-2xl h-[400px]">
            <Image 
              src="/images/adhama-old/maasai-attire.webp" 
              alt="Adhama Story" 
              fill 
              className="object-cover" 
              data-ai-hint="tanzania founders"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
