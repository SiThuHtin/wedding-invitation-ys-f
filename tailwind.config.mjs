

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
        beige: '#f8f4f0', // background color
        brown: '#5e2b1c', 
        olive: '#45581f'
      },
      fontFamily: {
        pacifico: ['var(--font-pacifico)', 'cursive'],
        bonheur: ['var(--font-bonheur-royale)', 'cursive'],
        greatvibes: "var(--font-great-vibes)",
        parisienne: "var(--font-parisienne)",
        satisfy:"var(--font-satisfy)",
        playfairdisplay: "var(--font-playfair-display)",
      },
    },
  },
  plugins: [],
};
