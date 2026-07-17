import { Stethoscope, Award, Calendar, HeartPulse } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";

export function WhyChooseUs() {
  const pillars = [
    {
      id: "pillar-specialized",
      icon: Stethoscope,
      title: "Specialized Endocrinologists",
      desc: "Our medical team focuses exclusively on diabetes, thyroid, and complex metabolic disorders."
    },
    {
      id: "pillar-certified",
      icon: Award,
      title: "Certified Clinical Labs",
      desc: "Get precise diagnostic analysis with rapid Turn-Around Times (TAT) under ISO certifications."
    },
    {
      id: "pillar-scheduling",
      icon: Calendar,
      title: "Convenient Scheduling",
      desc: "Book online, select your preferred specialist, and choose flexible morning or evening slots."
    },
    {
      id: "pillar-holistic",
      icon: HeartPulse,
      title: "Integrative Wellness",
      desc: "Therapies combining molecular medicine, carbohydrate control plans, and CGM tracking."
    }
  ];

  return (
    <Section id="why-choose-us" muted={true} aria-labelledby="why-choose-us-heading">
      <Container>
        <SectionHeading
          id="why-choose-us-heading"
          title="Clinical Excellence & Patient-First Care"
          subtitle="Why thousands of patients trust Dia-Clinic with their metabolic diagnostics and therapeutic support plans."
          badge="Why Choose Us"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-card border border-border/70 rounded-2xl p-6 hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 font-heading">
                  {pillar.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
