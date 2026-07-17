"use client";

import { clinicConfig } from "@/config/clinic";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function FAQs() {
  return (
    <section id="faqs" className="py-20 lg:py-28 bg-muted/30 border-y border-border" aria-labelledby="faqs-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
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
            {clinicConfig.faqs.map((faq, index) => {
              const valueString = `faq-item-${index}`;
              return (
                <AccordionItem key={index} value={valueString} className="border-b border-border/60 pb-3">
                  <AccordionTrigger className="text-base font-semibold hover:text-primary hover:no-underline transition-colors py-3">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
