/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: "#1F1F1F",
      blue: "#007AFF",
      "blue-opacity-20": "#007aff33",
      yellow: "#FBCE50",
      "primary-grey": "#808083",
      "secondary-grey": "#BFBFBF",
      "tertiary-grey": "#F1F1F1",
      white: "#FFFFFF",
    },
    fontFamily: {
      heading: ["Archivo", "sans-serif"],
      body: ["Poppins", "sans-serif"],
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      md: "1.125",
      lg: "1.25rem",
      xl: "1.5rem",
      h2: "2.25rem",
      xxl: "2.5rem",
      h1: "3rem",
    },
    fontWeight: {
      regular: "400",
      md: "500",
      "semi-bold": "600",
      bold: "700",
      "extra-bold": "800",
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#007AFF",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
