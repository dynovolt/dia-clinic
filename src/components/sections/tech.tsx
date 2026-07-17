import { ShieldCheck, Cpu, Microscope, Eye } from "lucide-react";
import { clinicConfig, TechItem } from "@/config/clinic";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const techIcons = {
  "dexcom-g7-pro": Cpu,
  "roche-cobas-c311": Microscope,
  "welch-allyn-retinavue": Eye,
};

export function Tech() {
  return (
    <section id="tech" className="py-20 lg:py-28 bg-background" aria-labelledby="tech-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="tech-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Advanced Clinical Technology
          </h2>
          <p className="text-lg text-muted-foreground">
            Leveraging cutting-edge diagnostics and digital biomarker capture to provide medical accuracy and treatment customization.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clinicConfig.tech.map((item: TechItem) => {
            const IconComp = techIcons[item.id as keyof typeof techIcons] || ShieldCheck;
            return (
              <Card key={item.id} className="border-border/70 group hover:border-primary/40 transition-colors">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {item.category}
                    </span>
                    <CardTitle className="text-lg font-bold text-foreground mt-3">{item.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
