import { ArrowRight, HeartPulse } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { clinicConfig } from "@/config/clinic";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden" aria-label="Introduction">
      {/* Background Decorative Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-3xl" />
        {/* Fine CSS Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-6 border border-primary/20">
          <HeartPulse className="w-4 h-4 text-primary" />
          <span>Accredited Diagnostics & Care</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto leading-[1.15] mb-6">
          {clinicConfig.tagline}
        </h1>

        {/* Sub-tagline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
          {clinicConfig.subTagline}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#booking"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto px-8"
            )}
          >
            Schedule Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a
            href="#services"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full w-full sm:w-auto px-8"
            )}
          >
            Explore Diagnostic Panels
          </a>
        </div>

        {/* Value Props & Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-border/80">
          {clinicConfig.stats.map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-2xl bg-card border border-border/55 shadow-xs">
              <p className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-1">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-primary mb-2">
                {stat.label}
              </p>
              <p className="text-xs text-muted-foreground max-w-[200px] mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
