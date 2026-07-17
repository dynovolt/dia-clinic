import { HeartPulse } from "lucide-react";
import { businessConfig } from "@/config/business/business";

export function HeroContent() {
  return (
    <div className="space-y-6 text-left max-w-2xl">
      {/* Accent Badge */}
      <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase border border-primary/20">
        <HeartPulse className="w-4 h-4 text-primary animate-pulse" />
        <span>Accredited Diagnostics & Care</span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15] font-heading">
        {businessConfig.tagline}
      </h1>

      {/* Supporting Copy */}
      <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
        {businessConfig.description}
      </p>
    </div>
  );
}
