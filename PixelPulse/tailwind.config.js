/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Sora", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#2c5aa0",
          600: "#1e3f7a",
          700: "#1e40af",
          900: "#1e3a8a",
        },
      },
    },
  },
  plugins: [],
};
