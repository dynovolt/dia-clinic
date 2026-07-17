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
    legalName: string;
    foundedYear: string;
    stats: {
      value: string;
      label: string;
      description: string;
    }[];
  };
  branding: {
    logoText: string;
    tagline: string;
    description: string;
  };
  hero: {
    title: string;
    description: string;
    badge: string;
    ctaPrimary: LinkItem;
    ctaSecondary: LinkItem;
  };
  about: {
    title: string;
    description: string;
    badge: string;
    ctaLabel: string;
    highlights: string[];
  };
  services: {
    badge: string;
    title: string;
    description: string;
    items: ServiceItem[];
  };
  doctor: {
    badge: string;
    title: string;
    members: DoctorMember[];
  };
  gallery: {
    badge: string;
    title: string;
    description: string;
    items: {
      id: string;
      title: string;
      description: string;
      imageUrl: string;
    }[];
  };
  testimonials: {
    badge: string;
    title: string;
    description: string;
    items: TestimonialItem[];
  };
  faq: {
    badge: string;
    title: string;
    description: string;
    items: FAQItem[];
  };
  contact: {
    phone: string;
    whatsApp: string;
    email: string;
    googleRating: number;
    reviewCount: number;
  };
  location: {
    address: string;
    locatedIn: string;
    coordinates: GeoCoordinates;
    mapUrl: string;
  };
  navigation: {
    headerLinks: LinkItem[];
    ctaButton: LinkItem;
  };
  footer: {
    description: string;
    openingHours: WorkingHours;
    links: LinkItem[];
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    author: string;
  };
  schema: {
    logoUrl: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  analytics: {
    googleAnalyticsId: string;
  };
  integrations: {
    whatsAppApi: string;
  };
  theme: {
    radius: string;
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
 * Canonical Single Source of Truth Configuration for Dia (Speciality Diabetes & Thyroid Centre)
 */
export const siteConfig: SiteConfig = {
  business: {
    name: "Dia (Speciality Diabetes & Thyroid Centre)",
    kannadaName: "ಡಿಯ (ಸ್ಪೆಷಾಲಿಟಿ ಡಯಾಬಿಟಿಸ್ & ಥೈರಾಯ್ಡ್ ಸೆಂಟರ್)",
    category: "Diabetes & Thyroid Specialty Clinic",
    legalName: "Dia (Speciality Diabetes & Thyroid Centre)",
    foundedYear: "PLACEHOLDER_FOUNDED_YEAR",
    stats: [
      {
        value: "Years of Experience",
        label: "Clinical Service",
        description: "Trusted local diabetes & thyroid specialist centre in Bengaluru."
      },
      {
        value: "Patients Treated",
        label: "Metabolic Care",
        description: "Personalized endocrine diagnostic treatment pathways."
      },
      {
        value: "Diabetes Programs",
        label: "Targeted Panels",
        description: "HbA1c tests, thyroid panels & glucose management."
      }
    ]
  },
  branding: {
    logoText: "Dia Centre",
    tagline: "Pioneering Endocrinology, Diabetes Care, & Thyroid Diagnostics",
    description: "Providing advanced diagnostics, thyroid panels, and customized metabolic care in Kasturi Nagar, Bengaluru. Located in Swaathi Medicals.",
  },
  hero: {
    title: "Pioneering Endocrinology, Diabetes Care, & Thyroid Diagnostics",
    description: "Providing advanced diagnostics, thyroid panels, and customized metabolic care in Kasturi Nagar, Bengaluru. Located in Swaathi Medicals.",
    badge: "Specialized Diabetes & Thyroid Clinic",
    ctaPrimary: { name: "Book Appointment", href: "#booking" },
    ctaSecondary: { name: "Chat on WhatsApp", href: "https://wa.me/916364226888" },
  },
  about: {
    title: "Dedicated Clinical Specialists in Diabetes & Thyroid Health",
    description: "Providing advanced diagnostics, thyroid panels, and customized metabolic care in Kasturi Nagar, Bengaluru. Located in Swaathi Medicals.",
    badge: "About Dia Centre",
    ctaLabel: "Schedule Clinic Tour",
    highlights: [
      "Diabetes & Thyroid Specialty Clinic",
      "Located In Swaathi Medicals",
      "Kasturi Nagar Local Centre",
      "Affordable Consultation Fees",
    ],
  },
  services: {
    badge: "Specialized Panel Services",
    title: "Clinical Diagnostics & Specialty Care",
    description: "Precision diagnostics, thyroid profiles, and tailored diabetes support.",
    items: [
      {
        id: "service-diabetes",
        title: "Specialized Diabetes Consultation",
        description: "Advanced sugar management, HbA1c screening, and clinical sugar telemetry monitoring.",
        price: "Affordable Consultation",
        icon: "activity",
      },
      {
        id: "service-thyroid",
        title: "Thyroid Diagnostics Panel",
        description: "Clinical diagnostic pathways targeting thyroid function (T3, T4, TSH assays).",
        price: "Affordable Consultation",
        icon: "flask-conical",
      },
      {
        id: "service-metabolic",
        title: "Endocrinology & Metabolic Care",
        description: "Integrated metabolic checkups and metabolic risk profile analysis.",
        price: "Affordable Consultation",
        icon: "stethoscope",
      },
    ],
  },
  doctor: {
    badge: "Medical Specialist",
    title: "Clinical Leadership",
    members: [
      {
        id: "doctor-name-placeholder",
        name: "Doctor Name", // PLACEHOLDER
        role: "Experienced Diabetes & Thyroid Specialist",
        specialty: "Endocrinology, Thyroid Screenings & Diabetes Management",
      },
    ],
  },
  gallery: {
    badge: "Infrastructure & Tech",
    title: "Our Clinical Environment",
    description: "A visual overview of our modern testing equipment and patient consultation bays.",
    items: [
      {
        id: "gallery-1",
        title: "Endocrine Testing Facility",
        description: "Modern equipment for sugar, metabolic, and thyroid screenings.",
        imageUrl: "/gallery/lab.jpg",
      },
      {
        id: "gallery-2",
        title: "Consultation Bays",
        description: "Private spaces where specialists construct low-glycemic plans.",
        imageUrl: "/gallery/consultation.jpg",
      },
      {
        id: "gallery-3",
        title: "Screening & Calibration Bay",
        description: "Dedicated calibration spaces for real-time monitoring devices.",
        imageUrl: "/gallery/training.jpg",
      },
    ],
  },
  testimonials: {
    badge: "Patient Reviews",
    title: "Verified Google Testimonials",
    description: "Real patient outcomes shared by visitors undergoing metabolic and thyroid care.",
    items: [
      {
        id: "testimonial-1",
        name: "Verified Patient",
        role: "Diabetes & Thyroid Clinic Visitor",
        content: "Doctor is very humble and listens carefully to patients.",
        rating: 5,
        date: "Verified Review",
      },
      {
        id: "testimonial-2",
        name: "Verified Patient",
        role: "Local Google Reviewer",
        content: "Excellent doctor and pays attention to patients.",
        rating: 5,
        date: "Verified Review",
      },
      {
        id: "testimonial-3",
        name: "Verified Patient",
        role: "Local Visitor",
        content: "Affordable consultation. Highly recommended.",
        rating: 5,
        date: "Verified Review",
      },
    ],
  },
  faq: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    description: "Answers to common queries about our endocrine consultation, screening, and treatment pathways.",
    items: [
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
  },
  contact: {
    phone: "+91 63642 26888",
    whatsApp: "https://wa.me/916364226888",
    email: "info@dia-clinic-placeholder.com", // PLACEHOLDER
    googleRating: 5.0,
    reviewCount: 3,
  },
  location: {
    address: "2nd Main Rd, East of NGEF Layout, Kasturi Nagar, Bengaluru, Karnataka 560043 (Located In: Swaathi Medicals)",
    locatedIn: "Swaathi Medicals",
    coordinates: { lat: 13.0116, lng: 77.6548 },
    mapUrl: "https://maps.google.com/?q=Dia+Speciality+Diabetes+Thyroid+Centre+Kasturi+Nagar+Bengaluru",
  },
  navigation: {
    headerLinks: [
      { name: "Services", href: "#services" },
      { name: "About", href: "#about" },
      { name: "Reviews", href: "#reviews" },
      { name: "FAQ", href: "#faqs" },
    ],
    ctaButton: { name: "Book Appointment", href: "#booking" },
  },
  footer: {
    description: "Providing advanced diagnostics, thyroid panels, and customized metabolic care in Kasturi Nagar, Bengaluru. Located in Swaathi Medicals.",
    openingHours: {
      weekday: "Closed now - Opens 6:30 PM (Placeholder until verified)",
      weekend: "Closed now - Opens 6:30 PM (Placeholder until verified)",
      sunday: "Closed (Placeholder until verified)",
    },
    links: [
      { name: "Services", href: "#services" },
      { name: "About", href: "#about" },
      { name: "Reviews", href: "#reviews" },
      { name: "FAQ", href: "#faqs" },
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
  },
  schema: {
    logoUrl: "https://dia-clinic.com/logo.png",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560043",
    addressCountry: "IN",
  },
  analytics: {
    googleAnalyticsId: "UA-PLACEHOLDER",
  },
  integrations: {
    whatsAppApi: "https://wa.me/916364226888",
  },
  theme: {
    radius: "1rem",
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
