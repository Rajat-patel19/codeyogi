/** @format */

const colors = require("tailwindcss/colors");

module.exports = {
     purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
     darkMode: false, // or 'media' or 'class'
     theme: {
          fontFamily: {
               sans: "'Nunito'",
          },
          extend: {
               colors: {
                    silver: "#888EA8",
                    greyish: "#3B3F5C",
                    blueish: "#4361EE",
                    cyan: colors.cyan,
               },
               fontSize: {
                    40: "2.5rem",
               },
               lineHeight: {
                    48: "48px",
               },
               spacing: {
                    l: "48px",
               },
               backgroundImage: (theme) => ({
                    "hero-auth": "url('/src/images/Hero.png')",
               }),
               backgroundSize: {
                    75: "75%",
               },
          },
     },
     variants: {
          extend: {},
     },
     plugins: [],
};
