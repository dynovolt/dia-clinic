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

export interface DoctorConfig {
  doctors: DoctorMember[];
}

export const doctorConfig: DoctorConfig = {
  doctors: [
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
  ]
};
