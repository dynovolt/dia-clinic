import { Shield, Clock, Zap, Award } from "lucide-react";
import { featuresConfig } from "@/config/features";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

const iconMap = {
  Shield,
  Clock,
  Zap,
  Award,
};

export function WhyChooseUs() {
  return (
    <Section id="why-choose-us" muted className="border-y border-border" aria-labelledby="why-heading">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="why-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Pioneering Standards in Clinical Diabetology
          </h2>
          <p className="text-lg text-muted-foreground">
            Why patients and referring physicians select our diagnostic facility for metabolic assessment and care loops.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresConfig.differentiators.map((diff) => {
            const IconComponent = iconMap[diff.iconName];
            return (
              <div key={diff.id} className="bg-card border border-border/70 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
                  {IconComponent && <IconComponent className="w-5 h-5" />}
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{diff.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{diff.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
