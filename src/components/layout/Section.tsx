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
        muted ? "py-20 lg:py-28 bg-muted/45 border-y border-border" : "py-20 lg:py-28",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
