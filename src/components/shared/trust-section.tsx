import { ShieldCheck } from "lucide-react";
import { featuresConfig } from "@/config/features";
import { Container } from "@/components/shared/container";

export function TrustSection() {
  return (
    <section className="bg-muted/50 border-y border-border py-8 relative overflow-hidden" aria-label="Trust & Accreditation">
      <Container className="flex flex-wrap items-center justify-around gap-6 text-center">
        {featuresConfig.trustBadges.map((badge) => (
          <div key={badge.id} className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0 animate-pulse" />
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                {badge.label}
              </p>
              <p className="text-[10px] text-muted-foreground">{badge.authority}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
