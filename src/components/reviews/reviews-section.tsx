import { Star, MessageSquare } from "lucide-react";
import { reviewsConfig } from "@/config/reviews";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export function ReviewsSection() {
  return (
    <Section id="reviews" className="bg-muted/40 border-y border-border" aria-labelledby="reviews-heading">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="reviews-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Patient Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            Read first-hand accounts of metabolic transformations and clinical diagnostic journeys from our patients.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsConfig.testimonials.map((review) => (
            <Card key={review.id} className="border-border/70 flex flex-col justify-between hover:shadow-md transition-shadow">
              <CardContent className="pt-6 space-y-4">
                {/* Stars */}
                <div className="flex items-center space-x-1 text-yellow-500">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "{review.content}"
                </p>
              </CardContent>

              <CardHeader className="border-t border-border/50 bg-card/50 py-4 flex flex-row items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                  {review.name.split(" ")[0]?.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <CardTitle className="text-sm font-bold text-foreground">{review.name}</CardTitle>
                  <CardDescription className="text-xs text-primary font-semibold">{review.role}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
