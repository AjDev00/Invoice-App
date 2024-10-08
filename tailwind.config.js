/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // vibes: ["Great Vibes"],
        // kurale: ["Kurale"],
        "eb-garamond": ["Garamond"],
        "open-sans": ["Open Sans"],
      },
    },
  },
  plugins: [],
};
