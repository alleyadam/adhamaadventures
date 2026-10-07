import TrustPage from '@/components/sections/TrustPage';

export default function CookiePolicyPage() {
  return (
    <TrustPage
      eyebrow="Cookie policy"
      title="Website cookies and analytics."
      intro="This site may use essential cookies, preference storage, and analytics tools to improve performance and understand how visitors use the website."
      sections={[
        {
          title: 'Cookies used',
          items: ['Essential site functionality', 'Language preference storage', 'Analytics tracking where configured', 'Form and security-related technical data'],
        },
        {
          title: 'Analytics',
          body: 'The audit recommends Google Analytics 4 conversion events for quote requests, WhatsApp clicks, phone clicks, email clicks, itinerary downloads, and booking actions.',
        },
        {
          title: 'Managing cookies',
          body: 'Visitors can control cookies through browser settings. Some preferences or analytics features may stop working if cookies are disabled.',
        },
      ]}
    />
  );
}
