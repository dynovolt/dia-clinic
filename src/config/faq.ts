export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQConfig {
  items: FAQItem[];
}

export const faqConfig: FAQConfig = {
  items: [
    {
      id: "faq-referral",
      question: "Do I need a physician's referral to schedule a diagnostic test at Dia-Clinic?",
      answer: "No, a direct physician referral is not mandatory. You can self-schedule our comprehensive screening packages or book a direct consultation with our diabetologists and endocrinologists."
    },
    {
      id: "faq-timing",
      question: "How long does it take to receive results for laboratory diagnostic tests?",
      answer: "Standard metabolic reports, lipid metrics, and HbA1c profiles are finalized within 4-6 hours. Specialized hormonal and genetic assays are typically reported within 24-48 hours via our secure patient portal."
    },
    {
      id: "faq-insurance",
      question: "Do you accept major health insurance carriers?",
      answer: "Yes, we accept most major commercial insurance providers, Medicare, and supplement plans. Please review the detailed insurance listings or call our reception desk to verify specific coverage criteria before your visit."
    },
    {
      id: "faq-cancellation",
      question: "What is your clinic's cancellation and rescheduling policy?",
      answer: "We require a minimum of 24 hours' notice for cancellations or rescheduling. This allows us to offer the slot to patients requiring urgent consultations."
    }
  ]
};
