import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // App-specific colors scheme.
      colors: {
        'app-color': '#4c46f5',
        'app-dark':'#121212',
      },
      
      // App-specific component outline size.
      outlineWidth: {
        3:'3px'
      }
    },
  },
  plugins: [],
};
export default config;
