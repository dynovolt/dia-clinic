"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";

interface AccordionContextType {
  value?: string | string[];
  type?: "single" | "multiple";
  collapsible?: boolean;
  onItemSelect: (itemValue: string) => void;
  isItemOpen: (itemValue: string) => boolean;
}

const AccordionContext = React.createContext<AccordionContextType | null>(null);

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "single" | "multiple";
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: any) => void;
  collapsible?: boolean;
}

export function Accordion({
  type = "single",
  defaultValue,
  value: controlledValue,
  onValueChange,
  collapsible = false,
  className,
  children,
  ...props
}: AccordionProps) {
  const [localValue, setLocalValue] = React.useState<string | string[]>(() => {
    return defaultValue ?? (type === "multiple" ? [] : "");
  });

  const value = controlledValue !== undefined ? controlledValue : localValue;

  const onItemSelect = React.useCallback(
    (itemValue: string) => {
      let newValue: string | string[];
      if (type === "single") {
        if (value === itemValue) {
          newValue = collapsible ? "" : itemValue;
        } else {
          newValue = itemValue;
        }
      } else {
        const currentValues = Array.isArray(value) ? value : [];
        if (currentValues.includes(itemValue)) {
          newValue = currentValues.filter((v) => v !== itemValue);
        } else {
          newValue = [...currentValues, itemValue];
        }
      }

      if (controlledValue === undefined) {
        setLocalValue(newValue);
      }
      onValueChange?.(newValue);
    },
    [type, value, collapsible, controlledValue, onValueChange]
  );

  const isItemOpen = React.useCallback(
    (itemValue: string) => {
      if (type === "single") {
        return value === itemValue;
      }
      return Array.isArray(value) ? value.includes(itemValue) : false;
    },
    [type, value]
  );

  return (
    <AccordionContext.Provider value={{ value, type, collapsible, onItemSelect, isItemOpen }}>
      <div className={cn("flex w-full flex-col", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const AccordionItemContext = React.createContext<string | null>(null);

export function AccordionItem({ value, className, children, ...props }: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={value}>
      <div className={cn("border-b border-border/60 py-2", className)} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
  const context = React.useContext(AccordionContext);
  const itemValue = React.useContext(AccordionItemContext);

  if (!context || !itemValue) {
    throw new Error("AccordionTrigger must be used within AccordionItem");
  }

  const isOpen = context.isItemOpen(itemValue);

  return (
    <button
      type="button"
      onClick={() => context.onItemSelect(itemValue)}
      aria-expanded={isOpen}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-left font-medium transition-all hover:underline [&[aria-expanded=true]>svg]:rotate-180 cursor-pointer w-full",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </button>
  );
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  const context = React.useContext(AccordionContext);
  const itemValue = React.useContext(AccordionItemContext);

  if (!context || !itemValue) {
    throw new Error("AccordionContent must be used within AccordionItem");
  }

  const isOpen = context.isItemOpen(itemValue);

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "overflow-hidden text-sm transition-all pb-4 pt-0 text-muted-foreground animate-in fade-in slide-in-from-top-1 duration-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
