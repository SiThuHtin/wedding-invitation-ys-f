

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        champagne: {
          light: '#f2cfc6',
          DEFAULT: '#d49a8f',
          dark: '#b97f74',
        },
        charcoal: '#45312e',
        cream: '#faf1ea',
      },
      fontFamily: {
        satisfy: "var(--font-satisfy)",
        playfair: "var(--font-playfair)",
        montserrat: "var(--font-montserrat)",
      },
    },
  },
  plugins: [],
};
