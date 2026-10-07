import TrustPage from '@/components/sections/TrustPage';

export default function TermsPage() {
  return (
    <TrustPage
      eyebrow="Terms & conditions"
      title="Booking terms that should be reviewed before payment."
      intro="This page provides a professional structure for Adhama’s terms. The operator should review final legal wording before production launch."
      sections={[
        {
          title: 'Booking and confirmation',
          items: ['A booking is confirmed after agreed deposit/payment and written confirmation', 'Names, dates, itinerary, inclusions, and exclusions should be checked by the traveller', 'Passports, visas, insurance, and health requirements remain the traveller’s responsibility unless explicitly arranged'],
        },
        {
          title: 'Changes and cancellations',
          items: ['Cancellation fees depend on supplier terms, park fees, accommodation rules, and timing', 'Amendments are subject to availability and supplier charges', 'Refund timing depends on supplier recovery and payment method', 'Force majeure and safety-related route changes may require operational decisions'],
        },
        {
          title: 'Guest responsibilities',
          items: ['Follow guide, park, accommodation, and safety instructions', 'Respect local communities and wildlife', 'Disclose relevant medical or mobility information before travel', 'Carry suitable travel insurance'],
        },
      ]}
    />
  );
}
