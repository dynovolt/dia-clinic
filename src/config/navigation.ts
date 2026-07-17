export interface NavLink {
  name: string;
  href: string;
}

export interface NavigationConfig {
  headerLinks: NavLink[];
  footerLinks: NavLink[];
  ctaButton: {
    text: string;
    href: string;
  };
}

export const navigationConfig: NavigationConfig = {
  headerLinks: [
    { name: "Services", href: "#services" },
    { name: "Technology", href: "#tech" },
    { name: "Medical Team", href: "#team" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ],
  footerLinks: [
    { name: "Services", href: "#services" },
    { name: "Technology", href: "#tech" },
    { name: "Medical Team", href: "#team" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ],
  ctaButton: {
    text: "Book Appointment",
    href: "#booking"
  }
};
