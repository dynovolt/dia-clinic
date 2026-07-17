import { ArrowRight, MessageCircle } from "lucide-react";
import { businessConfig } from "@/config/business/business";
import { navigationConfig } from "@/config/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <a
        href={navigationConfig.ctaButton.href}
        className={cn(
          buttonVariants({ variant: "default", size: "lg" }),
          "rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto px-8"
        )}
      >
        {navigationConfig.ctaButton.text}
        <ArrowRight className="w-5 h-5 ml-2" />
      </a>
      
      <a
        href={businessConfig.whatsApp}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "rounded-full w-full sm:w-auto px-8 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 flex items-center justify-center gap-2"
        )}
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span>Chat on WhatsApp</span>
      </a>
    </div>
  );
}
