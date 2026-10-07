import TrustPage from '@/components/sections/TrustPage';

export default function PrivacyPolicyPage() {
  return (
    <TrustPage
      eyebrow="Privacy policy"
      title="How enquiry and guest information is handled."
      intro="Adhama Africa Adventures collects information needed to respond to enquiries, plan itineraries, operate bookings, and provide support before and during travel. We are committed to protecting your privacy and handling your data responsibly."
      sections={[
        {
          title: 'Information collected',
          items: [
            'Name, email, phone, country, travel dates, traveller count, interests, budget, and safari preferences submitted through our booking or enquiry forms.',
            'Messages submitted through website forms, WhatsApp links, or email.',
            'Website analytics data (such as page views and session duration) where Google Analytics is configured.',
            'Booking documents, passport copies, and dietary or medical information only when required for confirmed travel.',
            'Cookie data as described in our Cookie Policy.',
          ],
        },
        {
          title: 'How information is used',
          items: [
            'Responding to enquiries and preparing tailored safari proposals.',
            'Booking and operating travel services with suppliers (lodges, parks, transfers, guides).',
            'Guest support, emergency communication, and itinerary management during travel.',
            'Improving website performance, content, and marketing effectiveness.',
            'Sending relevant travel updates, seasonal offers, or newsletters \u2014 you may opt out at any time.',
          ],
        },
        {
          title: 'Data sharing',
          body: 'Guest data may be shared with relevant suppliers only where needed to operate the trip, such as accommodation providers, park authorities, transfer companies, guides, or emergency support providers. We do not sell or rent personal data to third parties.',
        },
        {
          title: 'Data retention',
          items: [
            'Enquiry data is retained for as long as needed to respond and follow up, and then securely deleted or anonymised.',
            'Booking data is retained for the duration of the booking and a reasonable period thereafter for legal, tax, and quality purposes.',
            'You may request deletion of your personal data at any time, subject to legal retention obligations.',
          ],
        },
        {
          title: 'Your rights',
          items: [
            'Access: You may request a copy of the personal data we hold about you.',
            'Correction: You may request correction of inaccurate or incomplete data.',
            'Deletion: You may request deletion of your data, subject to legal obligations.',
            'Opt-out: You may unsubscribe from marketing communications at any time.',
            'To exercise any of these rights, contact us at info@adhamaadventures.co.tz.',
          ],
        },
        {
          title: 'Security',
          body: 'We take reasonable technical and organisational measures to protect your personal data, including encrypted data transmission (SSL), secure storage, and access controls. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.',
        },
        {
          title: 'Cookies',
          body: 'Our website uses cookies to improve functionality, analytics, and user experience. See our Cookie Policy for details on the types of cookies used and how to manage them.',
        },
        {
          title: 'Children\u2019s privacy',
          body: 'Our website is not directed to children under 16, and we do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us so we can remove it.',
        },
      ]}
    />
  );
}
