import TrustPage from '@/components/sections/TrustPage';

export default function HowWeOperatePage() {
  return (
    <TrustPage
      eyebrow="How we operate"
      title="From enquiry to post-trip feedback."
      intro="A professional safari company needs a visible operating process. This page explains the booking journey and how guests are supported."
      sections={[
        {
          title: 'Planning and proposal',
          items: ['Traveller goals, dates, budget, and travel style collected through enquiry form', 'Route matched to season, wildlife movement, and comfort level', 'Proposal sent with itinerary, inclusions, exclusions, and payment steps', 'Follow-up support by email or WhatsApp'],
        },
        {
          title: 'Before departure',
          items: ['Accommodation and activity reservations checked', 'Guide and vehicle assigned', 'Arrival transfer and emergency contacts confirmed', 'Packing, safety, and travel notes shared before arrival'],
        },
        {
          title: 'During and after travel',
          items: ['Operations contact available during the trip', 'Guide updates office on route progress', 'Issue escalation if weather, roads, health, or accommodation changes occur', 'Post-trip feedback and review request'],
        },
      ]}
    />
  );
}
