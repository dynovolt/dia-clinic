import * as React from "react";
import { cn } from "@/lib/utils";

interface MaxWidthProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-8xl",
  full: "max-w-full",
};

export function MaxWidth({
  as: Component = "div",
  size = "lg",
  className,
  children,
  ...props
}: MaxWidthProps) {
  return (
    <Component
      className={cn(sizes[size], "mx-auto w-full", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
