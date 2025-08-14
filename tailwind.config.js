/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      // sm: "640px",
      // md: { min: "768px", max: "1023px" },
      // lg: "1024px",
      // xl: "1100px",
      "mobile-portrait": { max: "768px" },
      "mobile-landscape": { min: "375px", max: "1024px" }
    },
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
        sans: ["NeueHaasUnica", "Arial", "sans-serif"]
      },
      fontSize: {
        sm: ["12px", { lineHeight: "110%", letterSpacing: "0.2px;" }],
        base: ["16px", { lineHeight: "110%", letterSpacing: "-0.4px;" }],
        lrg: ["24px", { lineHeight: "110%", letterSpacing: "-0.4px;" }]
      }
    }
  },
  plugins: [
    // plugin(function ({ addVariant }) {
    //   // Adds a variant that works just like sm:, md:, etc.
    //   addVariant(
    //     "mobile-landscape",
    //     "@media (max-width: 64rem) and (orientation: landscape)"
    //   );
    // })
  ]
};
