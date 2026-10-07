import TrustPage from '@/components/sections/TrustPage';

export default function SupportPage() {
  return (
    <TrustPage
      eyebrow="Guest support"
      title="The right contact for every stage of travel."
      intro="The audit calls for clear contact architecture: sales, reservations, office, and emergency support for travelling guests."
      sections={[
        {
          title: 'General enquiries',
          items: ['Email: info@adhamaadventures.co.tz', 'WhatsApp / phone: +255 753 300 602', 'Office: House No. 6, Njiro Ghorofa Mbili, Arusha, Tanzania'],
        },
        {
          title: 'Travelling guest support',
          body: 'Adhama should confirm the appropriate 24/7 guest-support number before labelling it as emergency support. Until then, use the official phone/WhatsApp route and booking contact provided in confirmed travel documents.',
        },
        {
          title: 'Before you travel',
          items: ['Check itinerary names and dates', 'Confirm arrival and transfer details', 'Review packing, insurance, visa, and health advice', 'Save office and travelling support contacts offline'],
        },
      ]}
    />
  );
}
