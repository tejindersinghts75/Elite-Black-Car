import type { Config } from "tailwindcss";

export default {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: "#D7B65D",
        dark: "#192026",
        red: "#D7B65D"
      },
      backgroundImage: {
        'luxury-car': "url('/luxurycar.jpg')",
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '25px',
        '3xl': '50px',
        '4xl': '80px',
      }
    },
  },
  plugins: [],
} satisfies Config;
