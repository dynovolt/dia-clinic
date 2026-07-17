export interface ClinicStats {
  value: string;
  label: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: "Activity" | "Heart" | "TrendingUp" | "Dna";
  price: string;
  duration: string;
  details: string[];
}

export interface DoctorMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  education: string[];
  experienceYears: number;
  bio: string;
  availability: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TechItem {
  id: string;
  name: string;
  description: string;
  category: string;
}

export interface ClinicConfig {
  name: string;
  tagline: string;
  subTagline: string;
  contact: {
    phone: string;
    email: string;
    address: string;
    mapUrl: string;
    coordinates: { lat: number; lng: number };
  };
  workingHours: {
    weekday: string;
    weekend: string;
    sunday: string;
  };
  stats: ClinicStats[];
  services: ServiceItem[];
  team: DoctorMember[];
  faqs: FAQItem[];
  tech: TechItem[];
}

export const clinicConfig: ClinicConfig = {
  name: "Dia-Clinic",
  tagline: "Precision Diagnostics. Specialized Diabetes Care.",
  subTagline: "Integrating advanced laboratory analytics with custom metabolic therapies to empower your path to vibrant wellness.",
  contact: {
    phone: "+1 (800) 555-0199",
    email: "appointments@dia-clinic.com",
    address: "742 Medical Sciences Parkway, Suite 100, Boston, MA 02111",
    mapUrl: "https://maps.google.com",
    coordinates: { lat: 42.3501, lng: -71.0601 }
  },
  workingHours: {
    weekday: "Monday - Friday: 7:30 AM - 7:30 PM",
    weekend: "Saturday: 8:00 AM - 4:00 PM",
    sunday: "Sunday: Closed (Emergency Hotline Active)"
  },
  stats: [
    {
      value: "15,000+",
      label: "Patients Guided",
      description: "Successfully managing diabetes and metabolic health parameters."
    },
    {
      value: "99.8%",
      label: "Diagnostic Accuracy",
      description: "Certified state-of-the-art pathology and endocrine testing."
    },
    {
      value: "20+",
      label: "Specialist Experts",
      description: "Dedicated endocrinologists, nutritionists, and lab scientists."
    },
    {
      value: "100%",
      label: "Personalized Plans",
      description: "Dynamic therapies tailored to your genomic and metabolic profile."
    }
  ],
  services: [
    {
      id: "diabetes-management",
      title: "Comprehensive Diabetes Care",
      description: "Individualized treatment strategies for Type 1, Type 2, and Gestational Diabetes using modern continuous monitoring technology.",
      iconName: "Activity",
      price: "$120",
      duration: "45 mins",
      details: [
        "Continuous Glucose Monitor (CGM) calibration",
        "Insulin pump optimization & therapy tuning",
        "Comprehensive screening for neuropathy and retinopathy",
        "Dedicated diabetic ketoacidosis (DKA) prevention schemes"
      ]
    },
    {
      id: "precision-diagnostics",
      title: "Advanced Endocrine Diagnostics",
      description: "In-house advanced immunochemistry, blood chemistries, HbA1c profiling, and complete lipid and genetic panel testing.",
      iconName: "Dna",
      price: "$180",
      duration: "60 mins",
      details: [
        "Fast-turnaround HbA1c & microalbuminuria metrics",
        "Oral Glucose Tolerance Tests (OGTT)",
        "Comprehensive thyroid and adrenal hormone profiles",
        "Insulin resistance biomarkers & beta-cell function analysis"
      ]
    },
    {
      id: "lifestyle-nutrition",
      title: "Metabolic Coaching & Nutrition",
      description: "Scientifically structured carbohydrate control, weight-management regimens, and physical fitness coaching under clinical supervision.",
      iconName: "TrendingUp",
      price: "$95",
      duration: "30 mins",
      details: [
        "Personalized low-glycemic dietary planning",
        "Metabolic rate tracking and muscle-mass indexing",
        "Cardio-metabolic risk factor improvement sessions",
        "Behavioral coaching for long-term lifestyle adjustment"
      ]
    },
    {
      id: "cardio-diabetic-screening",
      title: "Cardio-Diabetic Screenings",
      description: "Early detection of cardiovascular complications associated with metabolic imbalances and long-term diabetes.",
      iconName: "Heart",
      price: "$150",
      duration: "50 mins",
      details: [
        "Echocardiogram and pulse wave velocity analysis",
        "Vascular endothelial function assessment",
        "Early atherosclerosis plaque screenings",
        "Hypertension management protocols for diabetics"
      ]
    }
  ],
  team: [
    {
      id: "dr-elizabeth-vance",
      name: "Dr. Elizabeth Vance, MD, PhD",
      role: "Medical Director & Senior Endocrinologist",
      specialty: "Advanced Endocrine Disorders & Diabetes Technology",
      education: [
        "MD - Harvard Medical School",
        "PhD in Molecular Endocrinology - Johns Hopkins University",
        "Fellowship - Mayo Clinic"
      ],
      experienceYears: 18,
      bio: "Dr. Vance is a globally recognized expert in continuous glucose monitoring integrations and artificial pancreas technology development.",
      availability: "Mon, Wed, Fri (Morning sessions)"
    },
    {
      id: "dr-marcus-chen",
      name: "Dr. Marcus Chen, MD",
      role: "Lead Diabetologist & Clinical Researcher",
      specialty: "Type 2 Diabetes Reversal & Cardiovascular Health",
      education: [
        "MD - Stanford University School of Medicine",
        "Residency - Massachusetts General Hospital",
        "Cardio-Metabolic Fellowship - UCSF"
      ],
      experienceYears: 14,
      bio: "Dr. Chen focuses on holistic metabolic reprogramming, integrating dietary therapy with modern pharmacotherapy to trigger Type 2 diabetes remission.",
      availability: "Tue, Thu, Sat (All-day availability)"
    },
    {
      id: "sarah-jenkins-rd",
      name: "Sarah Jenkins, MS, RD, CDCES",
      role: "Chief Diabetes Educator & Nutritionist",
      specialty: "Nutritional Therapy & Behavioral Support",
      education: [
        "MS in Clinical Nutrition - Tufts University",
        "Certified Diabetes Care and Education Specialist (CDCES)"
      ],
      experienceYears: 10,
      bio: "Sarah excels at designing realistic, low-glycemic meal guidelines that adapt to modern, busy schedules without sacrificing food enjoyment.",
      availability: "Mon - Fri (Afternoon sessions)"
    }
  ],
  tech: [
    {
      id: "dexcom-g7-pro",
      name: "Dexcom G7 & FreeStyle Libre 3 Systems",
      description: "Next-generation continuous glucose monitors that provide real-time updates and cloud sync directly to our medical dashboard.",
      category: "Patient Monitoring"
    },
    {
      id: "roche-cobas-c311",
      name: "Roche Cobas c311 Analyzer",
      description: "Clinical chemistry analyzer enabling ultra-precise, standardized, and high-throughput diagnostic results.",
      category: "Laboratory Diagnostics"
    },
    {
      id: "welch-allyn-retinavue",
      name: "Welch Allyn RetinaVue 700",
      description: "Advanced non-mydriatic fundus camera ensuring quick and painless diabetic retinopathy screening during routine appointments.",
      category: "Preventative Screening"
    }
  ],
  faqs: [
    {
      question: "Do I need a physician's referral to schedule a diagnostic test at Dia-Clinic?",
      answer: "No, a direct physician referral is not mandatory. You can self-schedule our comprehensive screening packages or book a direct consultation with our diabetologists and endocrinologists."
    },
    {
      question: "How long does it take to receive results for laboratory diagnostic tests?",
      answer: "Standard metabolic reports, lipid metrics, and HbA1c profiles are finalized within 4-6 hours. Specialized hormonal and genetic assays are typically reported within 24-48 hours via our secure patient portal."
    },
    {
      question: "Do you accept major health insurance carriers?",
      answer: "Yes, we accept most major commercial insurance providers, Medicare, and supplement plans. Please review the detailed insurance listings or call our reception desk to verify specific coverage criteria before your visit."
    },
    {
      question: "What is your clinic's cancellation and rescheduling policy?",
      answer: "We require a minimum of 24 hours' notice for cancellations or rescheduling. This allows us to offer the slot to patients requiring urgent consultations."
    }
  ]
};
