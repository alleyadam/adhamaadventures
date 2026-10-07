import TrustPage from '@/components/sections/TrustPage';

export default function TermsPage() {
  return (
    <TrustPage
      eyebrow="Terms & conditions"
      title="Booking terms that should be reviewed before payment."
      intro="This page provides a professional structure for Adhama's terms. The operator should review final legal wording before production launch."
      sections={[
        {
          title: 'Booking and confirmation',
          items: [
            'A booking is confirmed only after an agreed deposit or full payment is received and written confirmation is issued by Adhama Africa Adventures.',
            'Travellers should carefully check names, dates, itinerary, inclusions, and exclusions at the time of confirmation.',
            'Passports, visas, travel insurance, and health requirements remain the traveller\u2019s responsibility unless explicitly arranged by Adhama in writing.',
            'A valid passport with at least six months validity beyond the date of entry and sufficient blank pages is required for Tanzania.',
          ],
        },
        {
          title: 'Payments',
          items: [
            'A deposit of 20\u201330% of the total safari cost is typically required to secure a booking, unless otherwise stated in the invoice.',
            'The balance is due no later than 30 days before the start of the safari.',
            'Accepted payment methods include bank transfer, card payment, and secure online payment gateway \u2014 see our Payments page for details.',
            'All payments must be made to the official Adhama Africa Adventures account; Adhama is not liable for payments made to any other account.',
          ],
        },
        {
          title: 'Changes and cancellations',
          items: [
            'Cancellation fees depend on supplier terms, park fees, accommodation rules, and the timing of cancellation relative to the start date.',
            'Amendments to confirmed bookings are subject to availability and may incur supplier charges.',
            'Refund timing depends on supplier recovery and the original payment method.',
            'Force majeure and safety-related route changes may require operational decisions by Adhama management.',
          ],
        },
        {
          title: 'Guest responsibilities',
          items: [
            'Follow all instructions from guides, park authorities, accommodation staff, and safety officers.',
            'Respect local communities, cultures, and wildlife at all times.',
            'Disclose relevant medical conditions, mobility needs, or dietary requirements before travel.',
            'Carry suitable comprehensive travel insurance covering medical care, evacuation, cancellation, and safari activities.',
            'Comply with all Tanzanian laws, park regulations, and customs requirements.',
          ],
        },
        {
          title: 'Liability',
          items: [
            'Adhama Africa Adventures acts as a tour operator and is not liable for acts of nature, weather disruptions, or events beyond its control.',
            'Adhama is not liable for loss, damage, or injury arising from the actions of third-party suppliers (airlines, lodges, transport providers).',
            'Travellers participate in safari and adventure activities at their own risk.',
            'Adhama maintains appropriate operational safety standards and will act in good faith to resolve any issues during travel.',
          ],
        },
        {
          title: 'Travel insurance',
          body: 'All travellers are required to hold comprehensive travel insurance that covers medical emergencies, evacuation (including air evacuation where relevant), trip cancellation, baggage loss, and delays. For Kilimanjaro climbs, ensure your policy covers high-altitude trekking up to 6,000 metres. Adhama may request proof of insurance before confirming certain itineraries.',
        },
        {
          title: 'Privacy and data',
          body: 'Personal information collected during the booking process is handled in accordance with our Privacy Policy. We do not sell traveller data. Data is shared with relevant suppliers only where needed to operate the trip.',
        },
        {
          title: 'Complaints and feedback',
          items: [
            'Any issue during travel should be reported to your guide or our office immediately so we can resolve it in real time.',
            'Formal complaints should be submitted in writing within 30 days of the end of the safari.',
            'Adhama is committed to addressing all feedback constructively and transparently.',
          ],
        },
      ]}
    />
  );
}
