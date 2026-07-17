import * as React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative bg-background text-foreground">
      {/* Dynamic Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-[100] pointer-events-none">
        <div className="h-full bg-primary w-0 transition-all duration-300" id="scroll-progress-bar" />
      </div>

      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
