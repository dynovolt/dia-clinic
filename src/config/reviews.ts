export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  date: string;
}

export interface ReviewsConfig {
  testimonials: TestimonialItem[];
}

export const reviewsConfig: ReviewsConfig = {
  testimonials: [
    {
      id: "testimonial-1",
      name: "Robert K.",
      role: "Type 2 Management Patient",
      content: "The personalized coaching and continuous monitoring panel reversed my fasting glucose spikes within 3 months. Invaluable medical support.",
      rating: 5,
      date: "2026-05-12"
    },
    {
      id: "testimonial-2",
      name: "Clara M.",
      role: "Gestational Care Patient",
      content: "Highly professional team. The lab results were returned within 4 hours, and Dr. Vance immediately tuned my insulin ratios.",
      rating: 5,
      date: "2026-06-20"
    },
    {
      id: "testimonial-3",
      name: "David T.",
      role: "Metabolic Coaching Client",
      content: "Sarah's low-glycemic plans are actionable and easy to maintain. I've sustained a 12% weight reduction without feeling fatigued.",
      rating: 5,
      date: "2026-07-02"
    }
  ]
};
