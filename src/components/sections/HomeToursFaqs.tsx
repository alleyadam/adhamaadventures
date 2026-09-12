import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is the best time to go on Tanzania tours?',
    answer:
      'Tanzania is excellent year-round. June to October is best for dry-season wildlife viewing, January to March is strong for calving season, and Zanzibar works beautifully after most safari routes.',
  },
  {
    question: 'Where is the best safari in Tanzania?',
    answer:
      'For first-time travellers, Serengeti, Ngorongoro Crater, Tarangire, and Lake Manyara make a powerful northern circuit. Adhama also plans southern routes such as Mikumi, Ruaha, and Nyerere for quieter safari days.',
  },
  {
    question: 'How many days are enough for Tanzania tours?',
    answer:
      'Three to five days can cover a compact safari. Seven to ten days gives more room for Serengeti, culture, and relaxed pacing. Add Zanzibar or Kilimanjaro if you want a two-week signature journey.',
  },
  {
    question: 'What wildlife can you expect to see on Tanzania tours?',
    answer:
      'Depending on route and season, travellers can see elephants, lions, giraffes, zebras, wildebeest, buffalo, hippos, flamingos, leopards, cheetahs, rhinos in Ngorongoro, and rich birdlife across the parks.',
  },
  {
    question: 'How much does a Tanzania tour cost?',
    answer:
      'Costs depend on days, park fees, accommodation level, transport, and private or group style. Adhama quotes each route clearly so travellers can balance comfort, experience, and budget.',
  },
  {
    question: 'How safe is a safari in Tanzania?',
    answer:
      'Safari travel is safe when planned with experienced local operators. Adhama uses trusted guides, clear pre-trip communication, reliable vehicles, and practical advice for parks, cities, beaches, and mountain routes.',
  },
];

export default function HomeToursFaqs() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="editorial-label">Tanzania tours FAQs</span>
          <h2 className="editorial-heading mb-5">Quick answers before you plan.</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Useful guidance for safari, Kilimanjaro, Zanzibar, culture, timing, pricing, and safety.
          </p>
        </div>

        <Accordion type="single" collapsible className="mx-auto max-w-4xl">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`} className="border-b border-border/70">
              <AccordionTrigger className="py-7 text-left text-lg font-bold text-secondary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-7 text-base leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <Link href="/faqs" className="text-[11px] font-black uppercase tracking-[0.26em] text-primary underline decoration-primary/30 underline-offset-8 hover:text-secondary">
            View all Adhama FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
