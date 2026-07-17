import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function StatsSection() {
  const stats = [
    { value: "15K+", label: "Active Patients", desc: "Empowered on metabolic paths" },
    { value: "98%", label: "Satisfaction Rate", desc: "Consistent Google & health reviews" },
    { value: "24 Hr", label: "Report TAT", desc: "Diagnostic lab turn-around times" },
    { value: "100%", label: "ADA Standards", desc: "Strict adherence to endocrine guidelines" },
  ];

  return (
    <Section className="bg-primary text-primary-foreground relative overflow-hidden" aria-label="Stats & Metrics">
      {/* Decorative light grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-2">
              <p className="text-4xl sm:text-5xl font-extrabold tracking-tight font-heading">
                {stat.value}
              </p>
              <p className="text-xs uppercase font-bold tracking-wider opacity-90">
                {stat.label}
              </p>
              <p className="text-[10px] opacity-75 max-w-[150px] mx-auto leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
