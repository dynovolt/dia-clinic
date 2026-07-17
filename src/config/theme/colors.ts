export interface ColorPalette {
  primary: string;
  primaryHover: string;
  secondary: string;
  accent: string;
  success: string;
  warning: string;
  background: string;
  surface: string;
  foreground: string;
  muted: string;
  mutedForeground: string;
  border: string;
}

export const colors: ColorPalette = {
  primary: "oklch(0.38 0.12 195)",
  primaryHover: "oklch(0.28 0.10 195)",
  secondary: "oklch(0.95 0.01 195)",
  accent: "oklch(0.93 0.02 140)",
  success: "oklch(0.68 0.18 140)",
  warning: "oklch(0.79 0.15 75)",
  background: "oklch(0.99 0.005 200)",
  surface: "oklch(1 0 0)",
  foreground: "oklch(0.18 0.02 215)",
  muted: "oklch(0.96 0.008 200)",
  mutedForeground: "oklch(0.48 0.02 215)",
  border: "oklch(0.91 0.01 200)",
};
