export interface OpenGraphMeta {
  title: string;
  description: string;
  type: string;
  locale: string;
  url: string;
}

export interface TwitterMeta {
  card: "summary" | "summary_large_image";
  title: string;
  description: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  openGraph: OpenGraphMeta;
  twitter: TwitterMeta;
}

export const seoConfig: SEOConfig = {
  title: "Dia-Clinic | Advanced Diabetes Care & Diagnostics",
  description: "Pioneering diagnostics & personalized diabetes therapies. Explore our continuous glucose monitoring profiles, specialized endocrine panels, and clinical nutrition coaches.",
  keywords: ["diabetes care", "endocrine diagnostics", "continuous glucose monitoring", "HbA1c tests", "metabolic coaching", "Boston diabetes clinic"],
  author: "Dia-Clinic Specialist Team",
  openGraph: {
    title: "Dia-Clinic | Advanced Diabetes Care & Diagnostics",
    description: "Integrating advanced laboratory analytics with custom metabolic therapies.",
    type: "website",
    locale: "en_US",
    url: "https://dia-clinic.com"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dia-Clinic | Advanced Diabetes Care & Diagnostics",
    description: "Precision diagnostics and customized treatment plans for metabolic longevity."
  }
};
