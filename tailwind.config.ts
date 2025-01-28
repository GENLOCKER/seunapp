import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0a192f",
        primary: "#66FFDB", // Custom text-primary color
        secondary: "#0B1A32", // Custom text-secondary color
        info: "#CBD5F6", // Custom text-info color
        warning: "#8892AF", // Custom text-warning color
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
