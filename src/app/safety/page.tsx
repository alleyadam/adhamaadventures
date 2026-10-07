import TrustPage from '@/components/sections/TrustPage';

export default function SafetyPage() {
  return (
    <TrustPage
      eyebrow="Safety & guest care"
      title="Clear systems before, during, and after travel."
      intro="Safari safety is practical: prepared guides, reliable vehicles, clear communication, health advice, and a defined support route while guests are travelling."
      sections={[
        {
          title: 'Wildlife and field safety',
          items: ['Professional guide briefings before game drives and walks', 'Respectful distance from wildlife at all times', 'Park-rule compliance and ranger coordination where required', 'Clear guest conduct guidance for cultural and wildlife encounters'],
        },
        {
          title: 'Vehicle and route safety',
          items: ['Pre-departure vehicle checks', 'First-aid kit, fire extinguisher, and recovery equipment', 'Route planning around weather, road conditions, and park timing', 'Guide communication with operations team during active trips'],
        },
        {
          title: 'Emergency support',
          body: 'The audit recommends a clearly labelled 24/7 travelling-guest support route. Adhama should confirm the operational number before publishing it as emergency support.',
          items: ['Travelling guest support contact', 'Incident escalation process', 'Accommodation disruption support', 'Medical or evacuation coordination with local providers when needed'],
        },
      ]}
    />
  );
}
