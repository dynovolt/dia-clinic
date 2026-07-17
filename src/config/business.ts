export interface BusinessStats {
  value: string;
  label: string;
  description: string;
}

export interface WorkingHours {
  weekday: string;
  weekend: string;
  sunday: string;
}

export interface BusinessConfig {
  name: string;
  legalName: string;
  tagline: string;
  subTagline: string;
  foundedYear: number;
  stats: BusinessStats[];
  workingHours: WorkingHours;
}

export const businessConfig: BusinessConfig = {
  name: "Dia-Clinic",
  legalName: "Dia-Clinic Advanced Diabetes & Diagnostics Center LLC",
  tagline: "Precision Diagnostics. Specialized Diabetes Care.",
  subTagline: "Integrating advanced laboratory analytics with custom metabolic therapies to empower your path to wellness.",
  foundedYear: 2008,
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
  workingHours: {
    weekday: "Monday - Friday: 7:30 AM - 7:30 PM",
    weekend: "Saturday: 8:00 AM - 4:00 PM",
    sunday: "Sunday: Closed (Emergency Hotline Active)"
  }
};
