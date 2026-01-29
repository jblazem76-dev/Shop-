import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0f14",
        mist: "#f5f6f7",
        slate: "#5a6675",
        pine: "#0f3d2e"
      },
      fontFamily: {
        sans: ["SF Pro Text", "Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
