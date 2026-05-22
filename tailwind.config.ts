import type { Config } from "tailwindcss";
export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'","serif"],
        sans: ["'DM Sans'","system-ui","sans-serif"],
      },
      colors: {
        caramel:{DEFAULT:"#C4752A",l:"#E8A55A",d:"#8B4A15"},
        choco:{DEFAULT:"#3D1F0D",mid:"#6B3A1A",deep:"#2A1506"},
        berry:"#E8526A",pistachio:"#4ABFA0",
        cream:"#FFF8F0",sand:"#F5E6D0",vanilla:"#F9EDD3",gold:"#D4AF37",
      },
    },
  },
  plugins: [],
} satisfies Config;
