export interface TrustBadge {
  id: string;
  label: string;
  authority: string;
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
  iconName: "Shield" | "Clock" | "Zap" | "Award";
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface FeaturesConfig {
  trustBadges: TrustBadge[];
  differentiators: Differentiator[];
  gallery: GalleryItem[];
}

export const featuresConfig: FeaturesConfig = {
  trustBadges: [
    { id: "badge-1", label: "CLIA Certified", authority: "Federal Laboratory Standards" },
    { id: "badge-2", label: "CAP Accredited", authority: "College of American Pathologists" },
    { id: "badge-3", label: "ADA Recognized", authority: "American Diabetes Association Education" },
    { id: "badge-4", label: "HIPAA Compliant", authority: "Patient Data Protection Guard" }
  ],
  differentiators: [
    {
      id: "diff-1",
      title: "Real-Time Care Alignment",
      description: "Direct telemetry connection to CGM devices ensures our clinicians adjust insulin protocols before spikes occur.",
      iconName: "Zap"
    },
    {
      id: "diff-2",
      title: "Same-Day Blood Chemistry",
      description: "Our certified in-house lab returns standard lipid and endocrinology reports within 4 hours.",
      iconName: "Clock"
    },
    {
      id: "diff-3",
      title: "Accredited Specialists",
      description: "Our board-certified endocrinologists have active molecular endocrinology research credentials.",
      iconName: "Award"
    },
    {
      id: "diff-4",
      title: "Encrypted Portal Security",
      description: "Your genomic mappings and lab files are protected by high-standard AES-256 local compliance standards.",
      iconName: "Shield"
    }
  ],
  gallery: [
    {
      id: "gallery-1",
      title: "Endocrine Testing Laboratory",
      description: "Equipped with Roche Cobas analyzers for exact metabolic metrics.",
      imageUrl: "/gallery/lab.jpg"
    },
    {
      id: "gallery-2",
      title: "Consultation Suites",
      description: "Private spaces where nutrition specialists construct low-glycemic plans.",
      imageUrl: "/gallery/consultation.jpg"
    },
    {
      id: "gallery-3",
      title: "CGM Fitting & Training Bay",
      description: "Dedicated calibration spaces for real-time monitoring devices.",
      imageUrl: "/gallery/training.jpg"
    }
  ]
};
