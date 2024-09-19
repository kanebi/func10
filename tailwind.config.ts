import type { Config } from "tailwindcss";

const config: Config = {
  daisyui: {
    themes: [
      {
        mytheme: {
          
"primary": "#111827",
          
"secondary": "#6b7280",
          
"accent": "#d6d3d1",
          
"neutral": "#f3f4f6",
          
"base-100": "#f3f4f6",
          
"info": "#bae6fd",
          
"success": "#a7f3d0",
          
"warning": "#fcd34d",
          
"error": "#f87171",
          },
        },
      ],
    },

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    
  },
  plugins: [require("daisyui")], // Ensure daisyui is added as a plugin
};
export default config;
