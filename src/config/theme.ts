export interface ColorPalette {
  primary: string;
  primaryHover: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
}

export interface FontConfig {
  sans: string;
  mono: string;
}

export interface ThemeConfig {
  mode: "light" | "dark" | "system";
  colors: ColorPalette;
  fonts: FontConfig;
  borderRadius: string;
}

export const themeConfig: ThemeConfig = {
  mode: "system",
  colors: {
    primary: "oklch(0.205 0 0)",
    primaryHover: "oklch(0.145 0 0)",
    secondary: "oklch(0.97 0 0)",
    accent: "oklch(0.97 0 0)",
    background: "oklch(1 0 0)",
    foreground: "oklch(0.145 0 0)"
  },
  fonts: {
    sans: "var(--font-geist-sans)",
    mono: "var(--font-geist-mono)"
  },
  borderRadius: "0.625rem"
};
