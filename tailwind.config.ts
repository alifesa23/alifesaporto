import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Mengaktifkan dark mode berbasis class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
      },
      transitionProperty: {
        "background-color": "background-color",
        "color": "color",
      },
    },
  },
  plugins: [],
};

export default config;
