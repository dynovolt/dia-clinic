import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeading({
  title,
  subtitle,
  badge,
  align = "center",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 sm:mb-16",
        align === "center" && "mx-auto text-center",
        align === "right" && "ml-auto text-right",
        className
      )}
      {...props}
    >
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-primary/10 text-primary mb-4 border border-primary/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4 font-heading">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
