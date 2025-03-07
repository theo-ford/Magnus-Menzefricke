/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        12: "repeat(12, minmax(0, 1fr))",
        48: "repeat(48, minmax(0, 1fr))"
      },
      width: {
        25: "calc(25% - 6.5px)",
        65: "65px"
      },

      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"]
      },
      fontSize: {
        sm: ["12px", { lineHeight: "110%", letterSpacing: "0.2px;" }],
        base: ["16px", { lineHeight: "110%", letterSpacing: "-0.4px;" }],
        lrg: ["24px", { lineHeight: "110%", letterSpacing: "-0.4px;" }]
      }
    }
  },
  plugins: []
};
