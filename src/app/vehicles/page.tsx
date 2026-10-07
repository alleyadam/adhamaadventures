import TrustPage from '@/components/sections/TrustPage';

export default function VehiclesPage() {
  return (
    <TrustPage
      eyebrow="Safari vehicles"
      title="Comfort and reliability on Tanzanian roads."
      intro="Travellers want to know what they will sit in, how it is maintained, and what is carried on safari. This page makes that operational detail visible."
      sections={[
        {
          title: 'Vehicle features',
          items: ['Safari 4x4 vehicles appropriate to route and group size', 'Pop-up roof for wildlife viewing where available', 'Window seats planned according to booking style', 'Charging points and cooler/fridge details to be verified per vehicle'],
        },
        {
          title: 'Safety equipment',
          items: ['First-aid kit', 'Fire extinguisher', 'Spare tyres and recovery equipment', 'Guide communication and operations contact route'],
        },
        {
          title: 'Maintenance process',
          body: 'Adhama should publish real vehicle photographs and a simple maintenance checklist so guests and travel agents can see the operational standard before booking.',
          items: ['Pre-trip inspection', 'Post-trip defect reporting', 'Scheduled garage maintenance', 'Cleanliness and comfort check before guest pickup'],
        },
      ]}
    />
  );
}
