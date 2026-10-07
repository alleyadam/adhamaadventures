import AppointmentForm from '@/components/forms/AppointmentForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageHeader from '@/components/layout/PageHeader';

export default function BookAppointmentPage() {
  return (
    <div className="bg-background">
      <PageHeader
        title="Book a Consultation"
        subtitle="Schedule a complimentary consultation with one of our expert advisors. Let's discuss how we can help you achieve your financial goals with integrity."
      />
      <div className="container mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
        <Card className="bg-card p-6 sm:p-8 rounded-xl border shadow-lg">
            <CardHeader>
                <CardTitle className="text-center text-2xl">Schedule Your Appointment</CardTitle>
            </CardHeader>
            <CardContent>
                <AppointmentForm />
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
