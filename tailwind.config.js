const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },

      outline: {
        blue: "2px solid #eef2ff",
        primary: "2px solid #eef2ff",
      },

      cursor: {
        auto: "auto",
        default: "default",
        pointer: "pointer",
        wait: "wait",
        text: "text",
        move: "move",
        "not-allowed": "not-allowed",
        crosshair: "crosshair",
        "zoom-in": "zoom-in",
      },

      colors: {
        brand: {
          "primary-100": "#eef2ff",
          "primary-200": "#818cf8",
          "primary-400": "#651fff",
          "primary-700": "#6200ea",
          "primary-900": "#1c0352",
        },
      },
      spacing: {
        7: "1.75rem",
        9: "2.25rem",
        28: "7rem",
        80: "20rem",
        96: "24rem",
      },
      height: {
        97: "97%",
      },
      maxHeight: {
        0: "0",
        xl: "36rem",
      },
      scale: {
        30: ".3",
      },
      boxShadow: {
        outline: "0 0 0 3px rgba(101, 31, 255, 0.4)",
      },
    },
  },

  variants: {
    extend: {
      scale: ["responsive", "hover", "focus", "group-hover"],
      textColor: ["responsive", "hover", "focus", "group-hover"],
      opacity: ["responsive", "hover", "focus", "group-hover"],
      backgroundColor: ["responsive", "hover", "focus", "group-hover"],
      animation: ["responsive", "motion-safe", "motion-reduce"],
      outline: ["hover", "active", "focus", "focus-within"],
    },
  },
  plugins: [],
};
