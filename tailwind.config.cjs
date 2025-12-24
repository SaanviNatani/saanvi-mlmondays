/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        hive: {
          900: "#0b0b0f",
          800: "#121217",
          600: "#6d28d9",
        },
      },
    },
  },
  plugins: [],
};
