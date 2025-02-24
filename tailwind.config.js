import forms from "@tailwindcss/forms";
/** @type {import('tailwindcss').Config} */

export default {
  plugins: [forms],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        amazon_blue: "#131921",
        amazon_light: "#232F3E",
        amazon_yellow: "#febd69",
        lightText: "#ccc",
        quantity_box: "#F0F2F2",
        footerBottom: "#131A22",
        footerBg: "#232F3E",
        blackTransparent: "rgba(0, 0, 0, 0.5)",
      },
    },
    screens: {
      mobile: { max: "640px" },
      tablet: { min: "641px", max: "1024px" },
      laptop: { min: "1025px" },
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  extend: {},
};
