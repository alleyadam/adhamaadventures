import TrustPage from '@/components/sections/TrustPage';

export default function CancellationPolicyPage() {
  return (
    <TrustPage
      eyebrow="Cancellation & amendment policy"
      title="Transparent changes before travel."
      intro="Safari bookings involve accommodation, park fees, transport, guides, flights, permits, and local suppliers. Changes should be handled clearly and in writing."
      sections={[
        {
          title: 'Cancellations',
          items: ['Cancellation requests should be sent in writing', 'Supplier and park-fee rules may affect refundability', 'Some permits, flights, and accommodation deposits may be non-refundable', 'Refunds are processed after supplier reconciliation where applicable'],
        },
        {
          title: 'Amendments',
          items: ['Date changes depend on availability', 'Supplier amendment fees may apply', 'Route changes can affect price and park fees', 'Confirmed accommodation standards may vary if changes are made late'],
        },
        {
          title: 'Disruption handling',
          body: 'If weather, roads, health, safety, or supplier issues affect the itinerary, Adhama should communicate practical alternatives and document any cost implications clearly.',
        },
      ]}
    />
  );
}
