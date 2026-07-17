import { Activity, Heart, TrendingUp, Dna, ArrowUpRight } from "lucide-react";
import { clinicConfig, ServiceItem } from "@/config/clinic";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const iconMap = {
  Activity,
  Heart,
  TrendingUp,
  Dna,
};

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-muted/30 border-y border-border" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Specialized Care & Diagnostic Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our clinical specialties tailored to assist diabetic management, metabolic profiling, and advanced early preventative detection.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clinicConfig.services.map((service: ServiceItem) => {
            const IconComponent = iconMap[service.iconName];
            return (
              <Card key={service.id} className="relative overflow-hidden group border-border/70 hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <CardHeader className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {IconComponent && <IconComponent className="w-6 h-6" />}
                    </div>
                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-200">
                          {service.title}
                        </CardTitle>
                        <span className="text-sm font-semibold text-primary">{service.price}</span>
                      </div>
                      <CardDescription className="text-sm text-muted-foreground flex items-center space-x-1.5 mt-0.5">
                        <span>Duration: {service.duration}</span>
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 border-t border-border/50 pt-4" role="list">
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex items-start text-xs text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mr-2.5 mt-1.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
                <div className="p-6 pt-0 mt-6">
                  <a
                    href="#booking"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "w-full rounded-lg hover:bg-primary hover:text-primary-foreground group/btn"
                    )}
                  >
                    Book Service
                    <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
