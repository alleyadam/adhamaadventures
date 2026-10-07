import TrustPage from '@/components/sections/TrustPage';

export default function PaymentPolicyPage() {
  return (
    <TrustPage
      eyebrow="Payment information"
      title="Clear payment steps, no unsupported security claims."
      intro="Guests should understand accepted payment methods, verification steps, and what happens after a deposit or balance payment."
      sections={[
        {
          title: 'Payment process',
          items: ['Written quote issued before payment', 'Official invoice or payment instruction shared by Adhama', 'Guest verifies recipient details before transfer', 'Payment confirmation recorded by the reservations team'],
        },
        {
          title: 'Accepted methods',
          body: 'Adhama should confirm currently supported methods before publication. Do not publish payment gateways, card claims, bank details, or security claims unless verified.',
          items: ['Bank transfer details where applicable', 'Card or online gateway only if officially configured', 'Mobile money only if officially supported', 'Receipt or confirmation after payment is reconciled'],
        },
        {
          title: 'Travel insurance',
          body: 'International travellers should hold suitable travel insurance covering medical care, cancellation, evacuation where appropriate, baggage, delays, trekking where relevant, and safari activities.',
        },
      ]}
    />
  );
}
