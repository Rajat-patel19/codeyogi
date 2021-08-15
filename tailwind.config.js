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
                    bgPrimary: "#eaf1ff",
                    warning: "#e2a03f",
                    bgWarning: "#fff9ed",
                    success: "#1abc9c",
                    bgSuccess: "#ddf5f0",
                    info: "#2196f3",
                    bgInfo: "#e7f7ff",
                    errorBlack: "#3b3f5c",
                    bgErrorBlack: "#e3e4eb",
                    errorRed: "#e7515a",
                    bgErrorRed: "#fff5f5",
                    cyan: colors.cyan,
                    bgDark: "#0e1726",
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
               borderRadius: {
                    50: "50%",
               },
               inset: {
                    one: "1%",
                    five: "5%",
               },
          },
     },
     variants: {
          extend: { cursor: ["disabled"] },
     },
     plugins: [],
};
