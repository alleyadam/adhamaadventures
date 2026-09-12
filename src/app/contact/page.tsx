import { Mail, Phone, MapPin, Instagram, Youtube, Facebook } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-background">
      <PageHeader
        title="Contact"
        subtitle="We are ready to welcome you to East Africa. Please reach out to us through any of the following channels to start your journey."
      />

      <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid items-start gap-16 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-secondary tracking-tighter uppercase">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ready to plan? Get in touch with us today. With Adhama Africa Adventures, every trip is carefully arranged to ensure comfort, excitement, and unforgettable moments throughout your journey.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full h-fit">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-widest text-xs text-primary mb-1">Office Location</h3>
                  <p className="text-secondary font-medium">House No. 6, Njiro Ghorofa Mbili, Arusha Tanzania</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full h-fit">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-widest text-xs text-primary mb-1">Email Address</h3>
                  <p className="text-muted-foreground text-sm">General Inquiries:</p>
                  <a href="mailto:info@adhamaadventures.co.tz" className="text-secondary font-bold hover:text-primary transition-colors">
                    info@adhamaadventures.co.tz
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full h-fit">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-widest text-xs text-primary mb-1">Hotline</h3>
                  <p className="text-muted-foreground text-sm">Phone / WhatsApp:</p>
                  <p className="text-secondary font-bold">+255 753 300 602</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="font-black uppercase tracking-widest text-[10px] text-muted-foreground mb-4">Follow Our Journey</h3>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/adhamaadventures/" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary text-white rounded-full hover:bg-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/adhamaadventures/" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary text-white rounded-full hover:bg-primary transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/adhamadventures" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary text-white rounded-full hover:bg-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Form Section */}
          <div className="bg-muted/30 p-8 md:p-12 rounded-3xl border border-secondary/5">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-secondary tracking-tight">Send a Message</h2>
              <p className="text-sm text-muted-foreground mt-2">Fill out the form below and our team will get back to you within 24 hours.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-primary">START PLANNING NOW!</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
              Let Adhama Africa Adventures turn your dream safari into reality. Our experts are standing by to curate your perfect Tanzanian experience.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none h-16 px-12 font-black uppercase tracking-widest text-xs">
              <Link href="/tours">START PLANNING</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-secondary rounded-none h-16 px-12 font-black uppercase tracking-widest text-xs bg-white/5">
              <Link href="/contact">CONTACT US</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="w-full grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.900818320865!2d36.69384037584154!3d-3.3744149414756905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371b626fff5181%3A0x92e3e257cf29e992!2sNSSF!5e0!3m2!1sen!2stz!4v1771295378662!5m2!1sen!2stz"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}