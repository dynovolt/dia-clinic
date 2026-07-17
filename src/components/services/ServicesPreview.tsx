import { ArrowRight, Activity, FlaskConical, Stethoscope, Heart, Syringe, HeartPulse } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { siteConfig } from "@/config/site";

const iconMap = {
  "activity": Activity,
  "flask-conical": FlaskConical,
  "stethoscope": Stethoscope,
  "heart": Heart,
  "syringe": Syringe,
  "heart-pulse": HeartPulse,
};

export function ServicesPreview() {
  return (
    <Section id="services" muted={true} aria-labelledby="services-preview-heading">
      <Container>
        <SectionHeading
          id="services-preview-heading"
          title={siteConfig.services.title}
          subtitle={siteConfig.services.description}
          badge={siteConfig.services.badge}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.items.map((service) => {
            // Find icon mapping
            const IconComp = iconMap[service.icon as keyof typeof iconMap] || Activity;
            return (
              <div
                key={service.id}
                className="group relative bg-card border border-border/70 rounded-2xl p-6 lg:p-8 hover:shadow-lg hover:border-primary/45 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground font-heading">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-border/50 mt-6 pt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">
                    Price: {service.price}
                  </span>
                  <a
                    href="#booking"
                    className="inline-flex items-center text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors gap-1"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
