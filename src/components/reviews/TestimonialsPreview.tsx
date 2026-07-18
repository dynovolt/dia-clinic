import { Star, Quote } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { siteConfig } from "@/config/site";

export function TestimonialsPreview() {
  return (
    <Section id="reviews" muted={true} aria-labelledby="reviews-preview-heading">
      <Container>
        <SectionHeading
          id="reviews-preview-heading"
          title={siteConfig.testimonials.title}
          subtitle={siteConfig.testimonials.description}
          badge={siteConfig.testimonials.badge}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.testimonials.items.map((review) => (
            <Card key={review.id} className="border-border/70 bg-card/60 relative overflow-hidden group hover:border-primary/30 hover:shadow-md transition-all duration-300">
              <Quote className="absolute right-4 top-4 w-12 h-12 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none" />
              <CardContent className="pt-6 pb-4">
                <div className="flex items-center space-x-1 text-amber-500 mb-3" aria-label="5 out of 5 stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current shrink-0" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-foreground leading-relaxed italic">
                  &ldquo;{review.content}&rdquo;
                </p>
              </CardContent>
              <CardHeader className="border-t border-border/50 bg-card/50 py-4 flex flex-row items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground font-heading">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
