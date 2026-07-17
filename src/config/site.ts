export interface GeoCoordinates {
  lat: number;
  lng: number;
}

export interface WorkingHours {
  weekday: string;
  weekend: string;
  sunday: string;
}

export interface DoctorMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface LinkItem {
  name: string;
  href: string;
}

export interface SiteConfig {
  business: {
    name: string;
    kannadaName: string;
    category: string;
    tagline: string;
    description: string;
    address: string;
    locatedIn: string;
    phone: string;
    whatsApp: string;
    email: string;
    googleRating: number;
    reviewCount: number;
    foundedYear: number;
    location: GeoCoordinates;
    openingHours: WorkingHours;
    doctors: DoctorMember[];
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    author: string;
    openGraph: {
      title: string;
      description: string;
      type: string;
      locale: string;
      url: string;
    };
    twitter: {
      card: string;
      title: string;
      description: string;
    };
  };
  services: ServiceItem[];
  testimonials: TestimonialItem[];
  faq: FAQItem[];
  navigation: {
    headerLinks: LinkItem[];
    footerLinks: LinkItem[];
    ctaButton: LinkItem;
  };
  brand: {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      foreground: string;
      border: string;
    };
  };
}

/**
 * Canonical single source of truth configuration for Dia (Speciality Diabetes & Thyroid Centre)
 */
export const siteConfig: SiteConfig = {
  business: {
    name: "Dia (Speciality Diabetes & Thyroid Centre)",
    kannadaName: "ಡಿಯ (ಸ್ಪೆಷಾಲಿಟಿ ಡಯಾಬಿಟಿಸ್ & ಥೈರಾಯ್ಡ್ ಸೆಂಟರ್)",
    category: "Diabetes & Thyroid Specialty Clinic",
    tagline: "Pioneering Endocrinology, Diabetes Care, & Thyroid Diagnostics",
    description: "Providing advanced diagnostics, thyroid panels, and customized metabolic care in Kasturi Nagar, Bengaluru. Located in Swaathi Medicals.",
    address: "2nd Main Rd, East of NGEF Layout, Kasturi Nagar, Bengaluru, Karnataka 560043 (Located In: Swaathi Medicals)",
    locatedIn: "Swaathi Medicals",
    phone: "+91 63642 26888",
    whatsApp: "https://wa.me/916364226888",
    email: "info@dia-clinic-placeholder.com", // PLACEHOLDER
    googleRating: 5.0,
    reviewCount: 3,
    foundedYear: 2018, // PLACEHOLDER
    location: {
      lat: 13.0116,
      lng: 77.6548,
    },
    openingHours: {
      weekday: "Closed now - Opens 6:30 PM (Placeholder until verified)",
      weekend: "Closed now - Opens 6:30 PM (Placeholder until verified)",
      sunday: "Closed (Placeholder until verified)",
    },
    doctors: [
      {
        id: "doctor-name-placeholder",
        name: "Doctor Name", // PLACEHOLDER
        role: "Experienced Diabetes & Thyroid Specialist",
        specialty: "Endocrinology, Thyroid Screenings & Diabetes Management",
      },
    ],
  },
  seo: {
    title: "Dia (Speciality Diabetes & Thyroid Centre) | Endocrinology & Diagnostics",
    description: "Pioneering clinical endocrinology, advanced thyroid screening, and metabolic diabetes care in Kasturi Nagar, Bengaluru. Located in Swaathi Medicals.",
    keywords: [
      "diabetes care",
      "endocrine diagnostics",
      "thyroid screening",
      "Kasturi Nagar",
      "Bengaluru",
      "Swaathi Medicals",
      "sugar management",
      "HbA1c tests",
    ],
    author: "Dia Speciality Team",
    openGraph: {
      title: "Dia (Speciality Diabetes & Thyroid Centre) | Endocrinology & Diagnostics",
      description: "Pioneering clinical endocrinology, advanced thyroid screening, and metabolic diabetes care in Kasturi Nagar, Bengaluru.",
      type: "website",
      locale: "en_US",
      url: "https://dia-centre.com-placeholder", // PLACEHOLDER
    },
    twitter: {
      card: "summary_large_image",
      title: "Dia (Speciality Diabetes & Thyroid Centre)",
      description: "Providing advanced diagnostics, thyroid panels, and customized metabolic care in Kasturi Nagar, Bengaluru.",
    },
  },
  services: [
    {
      id: "service-diabetes-management",
      title: "Specialized Diabetes Consultation",
      description: "Advanced sugar management, HbA1c screening, and clinical sugar telemetry monitoring.",
      price: "Affordable Consultation Rates",
      icon: "activity",
    },
    {
      id: "service-thyroid-screening",
      title: "Thyroid Diagnostics Panel",
      description: "Clinical diagnostic pathways targeting thyroid function (T3, T4, TSH assays).",
      price: "Affordable Consultation Rates",
      icon: "flask-conical",
    },
    {
      id: "service-metabolic-care",
      title: "Endocrinology & Metabolic Care",
      description: "Integrated metabolic checkups and metabolic risk profile analysis.",
      price: "Affordable Consultation Rates",
      icon: "stethoscope",
    },
  ],
  testimonials: [
    {
      id: "testimonial-1",
      name: "Verified Patient", // PLACEHOLDER
      role: "Diabetes & Thyroid Clinic Visitor",
      content: "Doctor is very humble and listens carefully to patients.",
      rating: 5,
      date: "Verified Review",
    },
    {
      id: "testimonial-2",
      name: "Verified Patient", // PLACEHOLDER
      role: "Local Google Reviewer",
      content: "Excellent doctor and pays attention to patients.",
      rating: 5,
      date: "Verified Review",
    },
    {
      id: "testimonial-3",
      name: "Verified Patient", // PLACEHOLDER
      role: "Local Visitor",
      content: "Affordable consultation. Highly recommended.",
      rating: 5,
      date: "Verified Review",
    },
  ],
  faq: [
    {
      id: "faq-1",
      question: "Where is the clinic located?",
      answer: "The clinic is located in Swaathi Medicals, 2nd Main Rd, East of NGEF Layout, Kasturi Nagar, Bengaluru.",
    },
    {
      id: "faq-2",
      question: "How can I book an appointment?",
      answer: "You can book your appointment by calling +91 63642 26888 or messaging the clinic directly on WhatsApp.",
    },
  ],
  navigation: {
    headerLinks: [
      { name: "Services", href: "#services" },
      { name: "About", href: "#about" },
      { name: "Reviews", href: "#reviews" },
      { name: "FAQ", href: "#faqs" },
    ],
    footerLinks: [
      { name: "Services", href: "#services" },
      { name: "About", href: "#about" },
      { name: "Reviews", href: "#reviews" },
      { name: "FAQ", href: "#faqs" },
    ],
    ctaButton: { name: "Book Appointment", href: "#booking" },
  },
  brand: {
    colors: {
      primary: "oklch(0.38 0.12 195)",
      secondary: "oklch(0.95 0.01 195)",
      accent: "oklch(0.93 0.02 140)",
      background: "oklch(0.99 0.005 200)",
      foreground: "oklch(0.18 0.02 215)",
      border: "oklch(0.91 0.01 200)",
    },
  },
};
