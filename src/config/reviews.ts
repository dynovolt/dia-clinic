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
      name: "Verified Patient",
      role: "Diabetes & Thyroid Clinic Visitor",
      content: "Doctor is very humble and listens carefully to patients.",
      rating: 5,
      date: "Verified Review"
    },
    {
      id: "testimonial-2",
      name: "Verified Patient",
      role: "Local Google Reviewer",
      content: "Excellent doctor and pays attention to patients.",
      rating: 5,
      date: "Verified Review"
    },
    {
      id: "testimonial-3",
      name: "Verified Patient",
      role: "Local Visitor",
      content: "Affordable consultation. Highly recommended.",
      rating: 5,
      date: "Verified Review"
    },
    {
      id: "testimonial-4",
      name: "Verified Patient",
      role: "Local resident",
      content: "Trusted local diabetes specialist.",
      rating: 5,
      date: "Verified Review"
    }
  ]
};
