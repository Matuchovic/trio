import type { Config } from "tailwindcss";
export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Fredoka'","sans-serif"],
        sans: ["'Nunito'","system-ui","sans-serif"],
      },
      colors: {
        pink:{DEFAULT:"#FF6B9D",l:"#FFB3D1",bg:"#FFF0F6",d:"#E8527F"},
        coral:"#FF4757",yellow:{DEFAULT:"#FFD93D",l:"#FFF3B0"},
        mint:{DEFAULT:"#6BCB77",l:"#C8F5CC"},sky:"#4ECDC4",
        choco:{DEFAULT:"#5C3317",l:"#8B5E3C"},
        purple:{DEFAULT:"#C77DFF",l:"#EDD9FF"},
        orange:"#FF9F43",
        cream:"#FFF5E6",icecream:"#FFFBF7",
      },
      borderRadius: { "4xl":"2rem", "5xl":"3rem" },
      boxShadow: {
        "fun":"0 8px 32px rgba(255,107,157,0.25)",
        "fun-lg":"0 20px 60px rgba(255,107,157,0.3)",
        "choco":"0 8px 32px rgba(92,51,23,0.2)",
        "yellow":"0 8px 32px rgba(255,217,61,0.4)",
        "mint":"0 8px 32px rgba(107,203,119,0.3)",
      },
    },
  },
  plugins: [],
} satisfies Config;
