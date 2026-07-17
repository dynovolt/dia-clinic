export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: "Activity" | "Heart" | "TrendingUp" | "Dna";
  price: string;
  duration: string;
  details: string[];
}

export interface ServicesConfig {
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
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
  ]
};
