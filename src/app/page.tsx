import { PageLayout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { WhyChooseUs, StatsSection } from "@/components/shared";
import { ServicesPreview } from "@/components/services";
import { AboutPreview } from "@/components/about";
import { GalleryPreview } from "@/components/gallery";
import { TestimonialsPreview } from "@/components/reviews";
import { FAQPreview } from "@/components/faq";
import { ContactSection, ContactCTA } from "@/components/contact";
import { seoConfig } from "@/config/seo";

import { businessConfig } from "@/config/business/business";
import { contactConfig } from "@/config/contact";
import { faqConfig } from "@/config/faq";

export default function Home() {
  // 1. Schema.org MedicalClinic structured data
  const clinicJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": businessConfig.name,
    "image": "https://dia-clinic.com/logo.png",
    "@id": "https://dia-clinic.com/#clinic",
    "url": "https://dia-clinic.com",
    "telephone": contactConfig.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": contactConfig.address,
      "addressLocality": "Boston",
      "addressRegion": "MA",
      "postalCode": "02111",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessConfig.location.lat,
      "longitude": businessConfig.location.lng
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:30",
        "closes": "19:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "08:00",
        "closes": "16:00"
      }
    ]
  };

  // 2. Schema.org FAQPage structured data
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqConfig.items.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // 3. Schema.org BreadcrumbList structured data
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dia-clinic.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Clinical Diagnostics & Diabetes Care",
        "item": "https://dia-clinic.com/#services"
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageLayout>
        <Hero />
        <ServicesPreview />
        <AboutPreview />
        <WhyChooseUs />
        <StatsSection />
        <GalleryPreview />
        <TestimonialsPreview />
        <FAQPreview />
        <ContactSection />
        <ContactCTA />
      </PageLayout>
    </>
  );
}
