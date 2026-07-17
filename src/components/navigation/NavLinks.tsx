import { navigationConfig } from "@/config/navigation";

export function NavLinks() {
  return (
    <nav className="flex items-center space-x-8" aria-label="Desktop navigation">
      {navigationConfig.headerLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-primary rounded-md px-2 py-1"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}
