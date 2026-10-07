import TrustPage from '@/components/sections/TrustPage';

export default function TeamGuidesPage() {
  return (
    <TrustPage
      eyebrow="Team & guides"
      title="Meet the people behind the journey."
      intro="The audit recommends real team and guide profiles. This page creates the structure for management, operations, and guiding credentials."
      sections={[
        {
          title: 'Management and operations',
          body: 'Add individual profiles with real photographs, roles, languages, experience, and responsibilities. This helps travellers understand who plans and supports their trip.',
          items: ['Founder / director profile', 'Operations manager profile', 'Reservations and guest-care contacts', 'Languages spoken by the office team'],
        },
        {
          title: 'Guide profiles',
          body: 'Each guide profile should be factual and permission-based, showing experience, languages, favourite destinations, specialties, and verified training.',
          items: ['Years of guiding experience', 'Languages spoken', 'Specialties such as birding, culture, Kilimanjaro, or family travel', 'Guest feedback where permission exists'],
        },
        {
          title: 'Quality assurance',
          items: ['Guide assignment based on route and traveller needs', 'Pre-trip briefing', 'Daily operations support during travel', 'Post-trip feedback process'],
        },
      ]}
    />
  );
}
