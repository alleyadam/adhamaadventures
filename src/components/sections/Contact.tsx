import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">Get in Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions about our services or want to discuss your financial future? We're here to help. Reach out to us and we'll get back to you promptly.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" /> Contact Us
                </Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
