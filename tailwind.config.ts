import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        space: "url('/background.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
