/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "open-sans": "var(--font-open-sans)",
        inter: "var(--font-inter)",
      },
      fontSize: {
        xLarge: "var(--xLarge-font)",
        medium: "var(--font-medium)",
        large: "var(--font-large)",
        small: "var(--font-small)",
        xSmall: "var(--font-xSmall)",
        "medium-icon": "var(--medium-icon)",
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        light: "var(--light-color)",
        gray: "var(--gray-color)",
        overlay: "var(--overlay-color)",
        'btn-primary': "var(--btn-primary)"
      },
    },
  },
  plugins: [nextui()],
};
