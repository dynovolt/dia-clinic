import * as React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen flex flex-col relative bg-background text-foreground">
        {/* Scroll Progress Bar (aesthetic detail) */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-[100] pointer-events-none">
          <div className="h-full bg-primary w-0 transition-all duration-300" id="scroll-progress-bar" />
        </div>

        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
