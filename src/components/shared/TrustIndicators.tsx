import { Star, Shield, Users, Award } from "lucide-react";
import { businessConfig } from "@/config/business/business";

export function TrustIndicators() {
  const trustStats = [
    {
      id: "stat-rating",
      icon: Star,
      value: `${businessConfig.googleRating} ★`,
      label: "Google Rating",
      desc: "Top rated healthcare diagnostic center"
    },
    {
      id: "stat-exp",
      icon: Award,
      value: "18+ Years",
      label: "Accredited Experts",
      desc: "Clinical molecular research credentials"
    },
    {
      id: "stat-patients",
      icon: Users,
      value: "15,000+",
      label: "Patients Served",
      desc: "Metabolic health metrics reversed"
    },
    {
      id: "stat-care",
      icon: Shield,
      value: "Affordable Care",
      label: "ADA Standards",
      desc: "Full commercial insurance integrations"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-t border-border/80 mt-12">
      {trustStats.map((item) => {
        const IconComponent = item.icon;
        return (
          <div key={item.id} className="text-left p-5 rounded-2xl bg-card border border-border/60 shadow-xs group hover:border-primary/30 transition-all duration-300">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
              <IconComponent className="w-4 h-4" />
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight mb-1 font-heading">
              {item.value}
            </p>
            <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wide">
              {item.label}
            </p>
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}
