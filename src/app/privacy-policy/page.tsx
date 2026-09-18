import TrustPage from '@/components/sections/TrustPage';

export default function PrivacyPolicyPage() {
  return (
    <TrustPage
      eyebrow="Privacy policy"
      title="How enquiry and guest information is handled."
      intro="Adhama collects information needed to respond to enquiries, plan itineraries, operate bookings, and provide support before and during travel."
      sections={[
        {
          title: 'Information collected',
          items: ['Name, email, phone, country, travel dates, traveller count, interests, and budget', 'Messages submitted through forms or WhatsApp links', 'Website analytics data where Google Analytics is configured', 'Booking documents only when required for confirmed travel'],
        },
        {
          title: 'How information is used',
          items: ['Responding to enquiries', 'Preparing safari proposals', 'Booking and operating travel services', 'Guest support and emergency communication', 'Improving website and marketing performance'],
        },
        {
          title: 'Data sharing',
          body: 'Guest data may be shared with relevant suppliers only where needed to operate the trip, such as accommodation, park services, transfers, guides, or emergency support providers.',
        },
      ]}
    />
  );
}
