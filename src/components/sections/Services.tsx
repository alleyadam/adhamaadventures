import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb, Landmark, ShieldCheck, Handshake, AreaChart, FileText, Search, School } from 'lucide-react';
import type { Service } from '@/lib/types';

const services: Service[] = [
  {
    icon: Lightbulb,
    title: 'Investment Advice',
    description: 'Expert guidance to help you make informed investment decisions and achieve your financial goals.',
    href: '/services/investment-advice',
  },
  {
    icon: Landmark,
    title: 'Brokerage Services',
    description: 'Seamless and efficient brokerage services for all your trading and investment needs.',
    href: '/services/brokerage-services',
  },
  {
    icon: ShieldCheck,
    title: 'Takaful (Islamic insurance)',
    description: 'Sharia-compliant insurance solutions to protect you and your assets, based on principles of mutual cooperation.',
    href: '/services/takaful',
  },
  {
    icon: Handshake,
    title: 'Public Private Partnership',
    description: 'Advisory services to facilitate successful partnerships between public and private sectors for sustainable development.',
    href: '/services/public-private-partnership',
  },
  {
    icon: AreaChart,
    title: 'Capital Markets',
    description: 'Navigate the complexities of capital markets with our expert insights and advisory for equity and debt financing.',
    href: '/services/capital-markets',
  },
  {
    icon: FileText,
    title: 'Transaction Advisory',
    description: 'Comprehensive support for all your transaction needs, from due diligence to deal execution and valuation.',
    href: '/services/transaction-advisory',
  },
  {
    icon: Search,
    title: 'Research and Analysis',
    description: 'In-depth market research and analysis to empower your financial decisions with data-driven insights.',
    href: '/services/research-and-analysis',
  },
  {
    icon: School,
    title: 'Training and Education',
    description: 'Enhance your financial literacy with our specialized training and educational programs on finance and investment.',
    href: '/services/training-and-education',
  },
];

export default function Services({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {showHeading && (
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">Our Advisory Focus</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We provide specialized guidance across key areas of modern finance, grounded in ethical principles.
              </p>
            </div>
        )}
        <div className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 ${showHeading ? 'mt-12' : ''}`}>
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="items-center text-center p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <service.icon className="h-10 w-10 text-chart-4" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center px-6 pb-6">
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button asChild variant="link" className="w-full group">
                  <Link href={service.href}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
