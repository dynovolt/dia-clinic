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

import { siteConfig } from "@/config/site";

export default function Home() {
  // 1. Schema.org MedicalClinic structured data
  const clinicJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": siteConfig.business.name,
    "image": siteConfig.schema.logoUrl,
    "@id": "https://dia-centre.com/#clinic",
    "url": "https://dia-centre.com",
    "telephone": siteConfig.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.location.address,
      "addressLocality": siteConfig.schema.addressLocality,
      "addressRegion": siteConfig.schema.addressRegion,
      "postalCode": siteConfig.schema.postalCode,
      "addressCountry": siteConfig.schema.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.location.coordinates.lat,
      "longitude": siteConfig.location.coordinates.lng
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "18:30",
        "closes": "21:00"
      }
    ]
  };

  // 2. Schema.org FAQPage structured data
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": siteConfig.faq.items.map((faq) => ({
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
        "item": "https://dia-centre.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Clinical Diagnostics & Diabetes Care",
        "item": "https://dia-centre.com/#services"
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
