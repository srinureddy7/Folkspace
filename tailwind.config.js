/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: "#1E1DE5",
        themeLight: "#FFEAF4",
        themeBlue: "#DFF4FF",
        themeGray: "#F4F4F5",
        facebook: "#3b5998",
        twitter: "#00acee",
        linkedin: "#0072b1",
        instagram: "#BD33B5",
        whatsapp: "#25d366",
        youtube: "#cd201f",
        pinterest: "#E60023",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-2deg)",
          },
          "50%": {
            transform: "rotate(2deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
