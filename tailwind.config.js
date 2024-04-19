/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    fontFamily: {
      titleFont: ["Josefin Sans", "sans-serif"],
    },

    extend: {
      fontSize: {
        "2xl": "2rem",
        "2.2xl": "2.2rem",
        "2.5xl": "2.5rem",
        "3xl": "3rem",
        "5xl": "5rem",
      },
      colors: {
        light: "rgba(255, 255, 255, 0.87)",
        dark: "#242424",
        navy: "#0d3b66",
        yellow: "#fff26a",
        maroon: "#860c46",
        voilet: "#4f036b",
        bronze: "#cd7f32",
        orange: "#ee964b",
        red: "#f95738",
        lime: "#aefd6c",
        "form-color": "#FBEED0",
        "orange-red": "#ff4500",
        "deep-black": "#050203",
        "pink-brown": "#87314e",
        "bright-pink-brown": "#df405a",
      },
    },
  },
  plugins: [],
};
