import { Container } from "@/components/layout/Container";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";
import { HeroImage } from "./HeroImage";
import { TrustIndicators } from "@/components/shared/TrustIndicators";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-background">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-[50%] h-[50%] bg-primary/5 blur-3xl opacity-60 rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 w-[30%] h-[40%] bg-accent/5 blur-3xl opacity-40 rounded-full" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-8">
            <HeroContent />
            <HeroActions />
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <HeroImage />
          </div>
        </div>

        {/* Bottom Trust Row */}
        <TrustIndicators />
      </Container>
    </section>
  );
}
