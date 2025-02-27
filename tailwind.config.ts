import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        w95fa: ["W95FA", "sans-serif"], // Adiciona a fonte personalizada no Tailwind
      },
      colors: {
        win95: "#008080",
      },
    },
  },
  plugins: [],
};

export default config;