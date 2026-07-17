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
  title: "Dia Speciality Diabetes & Thyroid Centre | Endocrinology & Diagnostics",
  description: "Pioneering clinical endocrinology, advanced thyroid screening, and metabolic diabetes care. Explore continuous glucose profiling, HbA1c tests, and customized metabolic therapies.",
  keywords: ["diabetes care", "endocrine diagnostics", "thyroid screening", "continuous glucose monitoring", "HbA1c tests", "metabolic coaching", "Boston diabetes clinic", "endocrinologist Boston"],
  author: "Dia Speciality Team",
  openGraph: {
    title: "Dia Speciality Diabetes & Thyroid Centre | Endocrinology & Diagnostics",
    description: "Providing world-class endocrine diagnostics, advanced thyroid screenings, and customized metabolic therapies.",
    type: "website",
    locale: "en_US",
    url: "https://dia-centre.com"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dia Speciality Diabetes & Thyroid Centre | Endocrinology & Diagnostics",
    description: "Pioneering diagnostics & specialized treatment plans for metabolic and thyroid wellness."
  }
};
