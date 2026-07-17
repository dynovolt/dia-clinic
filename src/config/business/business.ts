export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  subTagline: string;
  legalName: string;
  foundedYear: number;
  address: string;
  phone: string;
  whatsApp: string;
  email: string;
  googleRating: number;
  location: {
    lat: number;
    lng: number;
  };
  openingHours: {
    weekday: string;
    weekend: string;
    sunday: string;
  };
  workingHours: {
    weekday: string;
    weekend: string;
    sunday: string;
  };
  stats: {
    value: string;
    label: string;
    description: string;
  }[];
  socials: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
  doctors: {
    id: string;
    name: string;
    role: string;
    specialty: string;
  }[];
}

export const businessConfig: BusinessConfig = {
  name: "Dia (Speciality Diabetes & Thyroid Centre)",
  shortName: "Dia Centre",
  tagline: "Pioneering Endocrinology, Diabetes Care, & Thyroid Diagnostics",
  description: "Providing advanced diagnostics, thyroid panels, and customized metabolic care in Kasturi Nagar, Bengaluru. Located in Swaathi Medicals.",
  subTagline: "Providing advanced diagnostics, thyroid panels, and customized metabolic care in Kasturi Nagar, Bengaluru. Located in Swaathi Medicals.",
  legalName: "Dia (Speciality Diabetes & Thyroid Centre)",
  foundedYear: 2018,
  address: "2nd Main Rd, East of NGEF Layout, Kasturi Nagar, Bengaluru, Karnataka 560043 (Located In: Swaathi Medicals)",
  phone: "+91 63642 26888",
  whatsApp: "https://wa.me/916364226888",
  email: "info@dia-clinic-placeholder.com",
  googleRating: 5.0,
  location: {
    lat: 13.0116,
    lng: 77.6548
  },
  openingHours: {
    weekday: "Closed now - Opens 6:30 PM (Placeholder until verified)",
    weekend: "Closed now - Opens 6:30 PM (Placeholder until verified)",
    sunday: "Closed (Placeholder until verified)"
  },
  workingHours: {
    weekday: "Closed now - Opens 6:30 PM (Placeholder until verified)",
    weekend: "Closed now - Opens 6:30 PM (Placeholder until verified)",
    sunday: "Closed (Placeholder until verified)"
  },
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
  ],
  socials: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com"
  },
  doctors: [
    {
      id: "doctor-name",
      name: "Doctor Name",
      role: "Experienced Diabetes & Thyroid Specialist",
      specialty: "Endocrinology, Thyroid Screenings & Diabetes Management"
    }
  ]
};
