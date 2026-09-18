import TrustPage from '@/components/sections/TrustPage';

export default function CompanyLicensingPage() {
  return (
    <TrustPage
      eyebrow="Company & licensing"
      title="A visible, verifiable Tanzania operator."
      intro="This page gives travellers, agents, and partners a clear place to verify Adhama’s identity, office presence, contact routes, and official operating information."
      sections={[
        {
          title: 'Company identity',
          body: 'Adhama Africa Adventures operates from Arusha, Tanzania. Verified registration documents, tourism licences, tax details, memberships, and certificate downloads can be added here once supplied by the Adhama team.',
          items: ['Official company name: Adhama Africa Adventures', 'Office: House No. 6, Njiro Ghorofa Mbili, Arusha, Tanzania', 'Official email: info@adhamaadventures.co.tz', 'WhatsApp / phone: +255 753 300 602'],
        },
        {
          title: 'Documents to publish after verification',
          items: ['Company registration certificate', 'Tourism operating licence', 'TIN / VAT details where applicable', 'Professional memberships or association certificates', 'Insurance or liability documentation where appropriate'],
        },
        {
          title: 'Physical presence',
          body: 'The audit recommends authentic office and team photography plus a Google Maps link. These should be uploaded by the operator so international travellers can confirm where the company is based.',
          items: ['Office photographs', 'Operations/team photographs', 'Google Maps office link', 'Business hours and emergency support route'],
        },
      ]}
    />
  );
}
