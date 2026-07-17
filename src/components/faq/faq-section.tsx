"use client";

import { faqConfig } from "@/config/faq";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export function FAQSection() {
  return (
    <Section id="faqs" className="bg-background" aria-labelledby="faqs-heading">
      <Container className="max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="faqs-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Clear insights regarding clinical testing, referral guidelines, scheduling options, and insurance integrations.
          </p>
        </div>

        {/* Accordion List */}
        <div className="bg-card border border-border/80 rounded-2xl p-6 sm:p-8 shadow-xs">
          <Accordion className="space-y-4">
            {faqConfig.items.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-border/60 pb-3">
                <AccordionTrigger className="text-base font-semibold hover:text-primary hover:no-underline transition-colors py-3">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}
