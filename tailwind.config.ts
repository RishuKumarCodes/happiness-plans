// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00154B",
        secondary: "#F3D11C",
        accent: {
          blue: "#001B5E",
          yellow: "#F5D533",
        },
        neutral: {
          light: "#F3F4F6",
          dark: "#374151",
        },
      },
      fontFamily: {
        felipa: ["Felipa", "cursive"],
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
        accent: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [], // no @tailwindcss/postcss here!
};
