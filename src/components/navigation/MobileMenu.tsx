"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="text-muted-foreground hover:text-foreground p-2 rounded-md focus-visible:outline-2 focus-visible:outline-primary"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Open main menu</span>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div
          className="absolute top-16 left-0 right-0 bg-background border-b border-border p-4 space-y-3 shadow-md z-50 animate-in fade-in slide-in-from-top-5 duration-200"
          id="mobile-menu"
        >
          {siteConfig.navigation.headerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={siteConfig.navigation.ctaButton.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full rounded-full"
              )}
            >
              {siteConfig.navigation.ctaButton.name}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
