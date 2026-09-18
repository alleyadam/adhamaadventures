import TrustPage from '@/components/sections/TrustPage';

export default function TravelTradePage() {
  return (
    <TrustPage
      eyebrow="Travel trade"
      title="Ground handling and Tanzania DMC support."
      intro="A dedicated partner page helps international agents, tour operators, NGOs, schools, corporate groups, and white-label partners understand how Adhama can support them."
      sections={[
        {
          title: 'Partner services',
          items: ['Private FIT and group ground handling', 'Tanzania safari and Zanzibar logistics', 'Kilimanjaro and cultural experience coordination', 'Airport transfers and local operations support', 'White-label operation where agreed'],
        },
        {
          title: 'Quotation process',
          items: ['Partner enquiry with travel dates, routing, budget, group size, and service level', 'Net or partner rates where approved by Adhama', 'Supplier availability check', 'Written proposal and operations contact route'],
        },
        {
          title: 'Future partner portal',
          body: 'The audit recommends a future partner portal for rates, documents, booking requests, operational contacts, and travel dossiers. This page creates the public entry point first.',
        },
      ]}
      ctaLabel="Start partner enquiry"
    />
  );
}
