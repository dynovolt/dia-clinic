import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  muted?: boolean;
}

export function Section({
  as: Component = "section",
  className,
  muted = false,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        muted ? "design-section-muted" : "design-section",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
