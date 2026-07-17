export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
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
  name: "Dia-Clinic",
  shortName: "Dia-Clinic",
  tagline: "Precision Diagnostics. Specialized Diabetes Care.",
  description: "Integrating advanced laboratory analytics with custom metabolic therapies to empower your path to wellness.",
  address: "742 Medical Sciences Parkway, Suite 100, Boston, MA 02111",
  phone: "+1 (800) 555-0199",
  whatsApp: "https://wa.me/18005550199",
  email: "appointments@dia-clinic.com",
  googleRating: 4.9,
  location: {
    lat: 42.3501,
    lng: -71.0601
  },
  openingHours: {
    weekday: "Monday - Friday: 7:30 AM - 7:30 PM",
    weekend: "Saturday: 8:00 AM - 4:00 PM",
    sunday: "Sunday: Closed (Emergency Hotline Active)"
  },
  socials: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com"
  },
  doctors: [
    {
      id: "dr-elizabeth-vance",
      name: "Dr. Elizabeth Vance, MD, PhD",
      role: "Medical Director & Senior Endocrinologist",
      specialty: "Advanced Endocrine Disorders & Diabetes Technology"
    },
    {
      id: "dr-marcus-chen",
      name: "Dr. Marcus Chen, MD",
      role: "Lead Diabetologist & Clinical Researcher",
      specialty: "Type 2 Diabetes Reversal & Cardiovascular Health"
    },
    {
      id: "sarah-jenkins-rd",
      name: "Sarah Jenkins, MS, RD, CDCES",
      role: "Chief Diabetes Educator & Nutritionist",
      specialty: "Nutritional Therapy & Behavioral Support"
    }
  ]
};
