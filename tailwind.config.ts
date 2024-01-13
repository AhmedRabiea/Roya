import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./containers/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        bunker: {
          DEFAULT: "hsl(var(--bunker-950))",
          50: "hsl(var(--bunker-50))",
          100: "hsl(var(--bunker-100))",
          200: "hsl(var(--bunker-200))",
          300: "hsl(var(--bunker-300))",
          400: "hsl(var(--bunker-400))",
          500: "hsl(var(--bunker-500))",
          600: "hsl(var(--bunker-600))",
          700: "hsl(var(--bunker-700))",
          800: "hsl(var(--bunker-800))",
          900: "hsl(var(--bunker-900))",
          950: "hsl(var(--bunker-950))",
        },

        clementine: {
          DEFAULT: "hsl(var(--clementine-600))",
          50: "hsl(var(--clementine-50))",
          100: "hsl(var(--clementine-100))",
          200: "hsl(var(--clementine-200))",
          300: "hsl(var(--clementine-300))",
          400: "hsl(var(--clementine-400))",
          500: "hsl(var(--clementine-500))",
          600: "hsl(var(--clementine-600))",
          700: "hsl(var(--clementine-700))",
          800: "hsl(var(--clementine-800))",
          900: "hsl(var(--clementine-900))",
          950: "hsl(var(--clementine-950))",
        },

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  corePlugins: {
    preflight: false,
  },
} satisfies Config;

export default config;
