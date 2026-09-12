import PageHeader from "@/components/layout/PageHeader";
import Services from '@/components/sections/Services';

export default function ServicesPage() {
    return (
        <>
            <PageHeader 
                title="Our Services"
                subtitle="We provide specialized guidance across key areas of modern finance, grounded in ethical principles."
            />
            <Services showHeading={false} />
        </>
    );
}
