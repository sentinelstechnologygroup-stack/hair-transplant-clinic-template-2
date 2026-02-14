import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        aurora: {
          950: "#050a14",
          900: "#0b1223",
          800: "#121b33",
          200: "#c7d2fe",
          100: "#e6eaff",
          50: "#f6f7ff"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
