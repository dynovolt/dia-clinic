export interface TypographyConfig {
  fontSans: string;
  fontHeading: string;
  letterSpacing: {
    tighter: string;
    tight: string;
    normal: string;
    wide: string;
  };
  fontWeights: {
    normal: string;
    medium: string;
    semibold: string;
    bold: string;
    extrabold: string;
  };
  headingScale: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    body: string;
  };
}

export const typography: TypographyConfig = {
  fontSans: "var(--font-sans)",
  fontHeading: "var(--font-heading)",
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
  },
  fontWeights: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },
  headingScale: {
    h1: "text-4xl sm:text-5xl lg:text-6xl",
    h2: "text-3xl sm:text-4xl",
    h3: "text-2xl sm:text-3xl",
    h4: "text-xl sm:text-2xl",
    body: "text-base",
  },
};
