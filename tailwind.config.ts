import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "modal-logo": "url('/logos/techletics-metal.svg')",
        "hero-img":
          "url('https://dnbca6q7do6n.cloudfront.net/media/techletics24/hero-img.webp')",
        "college-img":
          "https://dnbca6q7do6n.cloudfront.net/media/techletics24/college.png",
      },
      colors: {
        primary: "#DFFF1B",
        secondary: "#FFFFFF",
        tertiary: "#030402",
        quarternary: "rgba(255, 255, 255, 0.2)",
      },
      fontFamily: {
        primary: ["var(--font-cakra)"],
        secondary: ["var(--font-turret-road)"],
      },
      fontSize: {
        big: "184px",
        xxl: "256px",
      },
    },
    backgroundPosition: {
      center: "center",
    },
  },
  plugins: [],
};
export default config;
