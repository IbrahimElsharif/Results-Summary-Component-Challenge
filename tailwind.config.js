/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    screens: {
      mobile: {"max": "769px"},
      md: "769px",
      desktop: "1440px"
    },
    extend: {
      colors: {
        lightRed: "hsl(0, 100%, 67%)",
        lightRedTrans: "hsla(0, 100%, 67%, 0.1)",
        orangeyYellow: "hsl(39, 100%, 56%)",
        orangeyYellowTrans: "hsla(39, 100%, 56%, 0.1)",
        greenTeal: "hsl(166, 100%, 37%)",
        greenTealTrans: "hsla(166, 100%, 37%, 0.1)",
        cobaltBlue: "hsl(234, 85%, 45%)",
        cobaltBlueTrans: "hsla(234, 85%, 45%, 0.1)",
        lightSlateBlue: "hsl(252, 100%, 67%)",
        lightRoyalBlue: "hsl(241, 81%, 54%)",
        violetBlue: "hsla(256, 71%, 46%, 1)",
        presianBlue: "hsla(241, 72%, 46%, 0)",
        paleBlue: "hsl(221, 100%, 96%)",
        lightLavender: "hsl(241, 100%, 89%)",
        darkGrayBlue: "hsl(224, 30%, 27%)"
      },
      fontFamily: {
        hankenGrotesk: "'Hanken Grotesk', sans-serif;"
      }
    },
  },
  plugins: [],
}

