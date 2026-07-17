import { Calendar, Phone, MessageCircle, MapPin, Compass } from "lucide-react";
import { businessConfig } from "@/config/business/business";
import { contactConfig } from "@/config/contact";
import { navigationConfig } from "@/config/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

export function ContactCTA() {
  return (
    <Section id="contact-cta" className="relative overflow-hidden bg-primary text-primary-foreground" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.06),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <Container className="relative z-10 text-center max-w-4xl space-y-8">
        <div className="space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-white/10 text-white mb-2">
            Schedule Care
          </span>
          <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading">
            Empower Your Path to Metabolic Wellness Today
          </h2>
          <p className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            Reserve your clinical consult, access specialized diagnostic panels, or get in touch with our diabetes educators.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href={navigationConfig.ctaButton.href}
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "rounded-full bg-white text-primary hover:bg-white/90 shadow-lg px-8 font-semibold"
            )}
          >
            <Calendar className="w-5 h-5 mr-2" />
            <span>{navigationConfig.ctaButton.text}</span>
          </a>

          <a
            href={`tel:${contactConfig.phone}`}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full border-white/30 hover:bg-white/10 px-8 text-white flex items-center justify-center gap-2"
            )}
          >
            <Phone className="w-5 h-5" />
            <span>Call Clinic ({businessConfig.phone})</span>
          </a>

          <a
            href={businessConfig.whatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full border-emerald-400/40 hover:bg-emerald-500/20 px-8 text-white flex items-center justify-center gap-2 bg-emerald-500/10"
            )}
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>WhatsApp Chat</span>
          </a>
        </div>

        <div className="pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left text-sm opacity-90">
          <div className="flex items-start gap-3.5">
            <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold">Clinic Address</h4>
              <p className="text-xs text-white/85 mt-1">{contactConfig.address}</p>
              <a
                href={contactConfig.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs underline mt-2 hover:opacity-80"
              >
                <span>Navigate on Google Maps</span>
                <Compass className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <Phone className="w-5 h-5 text-white shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold">Appointment Support</h4>
              <p className="text-xs text-white/85 mt-1">General Inquiries: {contactConfig.email}</p>
              <p className="text-xs text-white/85 mt-1">{businessConfig.openingHours.weekday}</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
