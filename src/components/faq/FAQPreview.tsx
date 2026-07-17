"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqConfig } from "@/config/faq";

export function FAQPreview() {
  return (
    <Section id="faqs" aria-labelledby="faq-preview-heading">
      <Container>
        <SectionHeading
          id="faq-preview-heading"
          title="Frequently Asked Questions"
          subtitle="Answers to common queries about our endocrine consultation, screening, and treatment pathways."
          badge="FAQ"
        />

        <div className="max-w-3xl mx-auto bg-card border border-border/80 rounded-2xl p-6 sm:p-8 shadow-xs">
          <Accordion type="single" defaultValue="faq-item-0" collapsible>
            {faqConfig.items.map((item, idx) => (
              <AccordionItem key={item.id} value={`faq-item-${idx}`} className="py-2.5">
                <AccordionTrigger className="text-base font-bold text-foreground hover:text-primary font-heading">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}
