import { Shield, Sparkles, Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { siteConfig } from "@/config/site";

export function AboutPreview() {
  return (
    <Section id="about" aria-labelledby="about-preview-heading">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              id="about-preview-heading"
              title={siteConfig.about.title}
              subtitle={siteConfig.about.description}
              badge={siteConfig.about.badge}
              align="left"
              className="mb-0 sm:mb-0"
            />

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4" role="list">
              {siteConfig.about.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center text-sm text-muted-foreground gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/95 shadow-sm transition-all duration-300"
              >
                {siteConfig.about.ctaLabel}
              </a>
            </div>
          </div>

          {/* Right Specialist Panel */}
          <div className="lg:col-span-5 space-y-6 bg-muted/40 p-6 lg:p-8 rounded-3xl border border-border">
            <h3 className="text-lg font-bold text-foreground font-heading border-b border-border/80 pb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>{siteConfig.doctor.title}</span>
            </h3>

            <div className="space-y-6">
              {siteConfig.doctor.members.map((doctor) => (
                <div key={doctor.id} className="space-y-1">
                  <p className="text-sm font-bold text-foreground font-heading">{doctor.name}</p>
                  <p className="text-xs text-primary font-semibold">{doctor.role}</p>
                  <p className="text-[11px] text-muted-foreground">{doctor.specialty}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
