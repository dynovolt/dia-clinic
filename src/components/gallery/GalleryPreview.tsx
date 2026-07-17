import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { siteConfig } from "@/config/site";

export function GalleryPreview() {
  return (
    <Section id="tech" aria-labelledby="gallery-preview-heading">
      <Container>
        <SectionHeading
          id="gallery-preview-heading"
          title={siteConfig.gallery.title}
          subtitle={siteConfig.gallery.description}
          badge={siteConfig.gallery.badge}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.gallery.items.map((item) => (
            <Card key={item.id} className="border-border/75 overflow-hidden hover:shadow-lg transition-all duration-300 group">
              {/* Simulated Premium Facility Card Image Visual placeholder using CSS Gradients */}
              <div className="h-48 w-full bg-linear-gradient(135deg, var(--primary) 0%, oklch(0.52 0.14 195) 100%) flex items-center justify-center text-primary-foreground font-bold text-sm text-center p-4">
                <div className="space-y-1">
                  <p className="uppercase tracking-wider text-[10px] opacity-75 font-semibold">Dia Facility</p>
                  <p className="text-base">{item.title}</p>
                </div>
              </div>
              <CardHeader className="bg-card">
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors font-heading">
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
