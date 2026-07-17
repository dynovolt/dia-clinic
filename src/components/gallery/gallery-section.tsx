import { ImagePaths } from "@/config/images";
import { featuresConfig } from "@/config/features";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export function GallerySection() {
  return (
    <Section id="tech" aria-labelledby="gallery-heading">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="gallery-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Our Advanced Clinical Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground">
            A visual overview of our modern testing equipment and patient consultation bays.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresConfig.gallery.map((item) => (
            <Card key={item.id} className="border-border/75 overflow-hidden hover:shadow-lg transition-all duration-300 group">
              {/* Simulated Premium Facility Card Image Visual placeholder using CSS Gradients */}
              <div className="h-48 w-full bg-linear-gradient(135deg, var(--primary) 0%, oklch(0.52 0.14 195) 100%) flex items-center justify-center text-primary-foreground font-bold text-sm text-center p-4">
                <div className="space-y-1">
                  <p className="uppercase tracking-wider text-[10px] opacity-75 font-semibold">Dia-Clinic Facility</p>
                  <p className="text-base">{item.title}</p>
                </div>
              </div>
              <CardHeader className="bg-card">
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
