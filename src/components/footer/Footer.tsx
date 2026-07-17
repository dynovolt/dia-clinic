import Link from "next/link";
import { Activity, Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/40 border-t border-border mt-auto" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground font-heading">
                {siteConfig.business.name}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {siteConfig.footer.description}
            </p>
          </div>

          {/* Contact Details & Hours */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact & Hours
            </h3>
            <ul className="space-y-3" role="list">
              <li className="flex items-start text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                <span>{siteConfig.location.address}</span>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0 mr-3" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-foreground transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0 mr-3" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-foreground transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start text-sm text-muted-foreground">
                <Clock className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Clinic Hours:</p>
                  <p className="text-xs">{siteConfig.footer.openingHours.weekday}</p>
                  <p className="text-xs">{siteConfig.footer.openingHours.weekend}</p>
                  <p className="text-xs text-destructive/80 font-medium">{siteConfig.footer.openingHours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground" role="list">
              {siteConfig.footer.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.navigation.ctaButton.href}
                  className="hover:text-foreground transition-colors font-medium text-primary"
                >
                  {siteConfig.navigation.ctaButton.name}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {siteConfig.business.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
