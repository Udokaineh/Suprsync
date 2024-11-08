module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    boxShadow: {
      custom: "10px 10px 40px rgba(0, 0, 0, 0.08)",
    },
    screens: {
      "2xl": { min: "1536px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1280px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "820px" },
      // => @media (max-width: 820px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontSize: {
        12: "12px",
        14: "14px",
        18: "18px",
        10: "10px",
        13: "13px",
      },
      colors: {
        primary: "#00AD57",
        "primary-dark": "#2C9E96",
        "color-424": "#242424",
        "grey-600": "#A5A5A5",
        "black-500": "#242424",
        "base-color": "#9ee6e1",
        "base-dark": "#2aa69d",
        "color-3A3": "#A3A3A3",
        "color-A79": "#336A79",
        "color-333": "#333333",
        "calendar-weekend": "#fafafa",
        969: "#696969",
        353: "#C15353",
        767: "#676767",
        "080": "#808080",
        "grey-800": "#696969",
        "09B": "#67909B",
        C00: "#FFCC00",
        AAB: "#AE5AAB",
        "26E": "#5CB26E",
        242: "#9A4242",
        "6E6": "#E6E6E6",
        A5A: "#5A5A5A",
        "5F3": "#5175F3",
        558: "#004558",
        AFF: "#F7FAFF",
        555: "#555555",
        222: "#222222",
        171: "#FA7171",
        aaa: "#aaaaaa",
        777: "#777777",
        C8C: "#8C8C8C",
        F9D: "#ACFF9D",
        BB3: "#47A59E",
        787: "#8B8787",
        BC2: "#4ACBC2",
        "5F5": "#5F5F5F",
        "9A9": "#9A9A9A",
        "1F5": "#7491F5",
        D6D: "#6D6D6D",
        727: "#272727",
        878: "#787878",
        E7E: "#807E7E",
        CFA: "#E5FCFA",
        839: "#BD8839",
        "3F3": "#F3F3F3",
        AA1: "#2FAAA1",
        B1B: "#EC1B1B",
        "0A9": "#41B0A9",
        "060": "#606060",
      },
      boxShadow: {
        select: "10px 10px 40px rgba(0, 0, 0, 0.08);",
        "small-select": "0 2px 2px rgba(0, 0, 0, 0.08);",
        "shift-shadow": "10px 10px 40px rgba(0, 0, 0, 0.08);",
        "shift-shadow-small": "0px 0px 10px 2px rgba(0, 0, 0, 0.04);",
        "live-shadow": "0px 0px 20px 4px rgba(0, 0, 0, 0.06)",
        0: "0px",
      },
      backgroundColor: {
        primary: "#00AD57",
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        558: "#004558",
        BEB: "#EBEBEB",
        "2F2": "#FAF2F2",
        "7FF": "#F5F7FF",
        "5A5": "#A5A5A5",
        "0F2": "#EBF0F2",
        "6E6": "#E6E6E6",
        "7F7": "#F7F7F7",
        "FEE": "#F7FFEE",
        424: "#242424",
        "4FE": "#F1F4FE",
        "4F4": "#F4F4F4",
        "0F5": "#F0F0F5",
        "5F5": "#F5F5F5",
        "9F1": "#E0F9F1",
        DED: "#FEEDED",
        FED: "#F6FFED",
        BED: "#FFFBED",
        BFF: "#EDFBFF",
        FEF: "#EFEFEF",
        "6E0": "#F9F6E0",
        "9E0": "#F9E9E0",
        "1E0": "#F9E1E0",
        "3D3": "#FFD3D3",
        777: "#777777",
        F9D: "#ACFF9D",
        BC2: "#4ACBC2",
        "8FF": "#F6F8FF",
        CF6: "#F4FCF6",
        "1F5": "#7491F5",
        "5F3": "#5175F3",
        CFA: "#E5FCFA",
        "6EE": "#FFF6EE",
        "59E": "#47A59E",
        "9F9": "#F9F9F9",
        DFD: "#F1FDFD",
        C0C: "#D20C0C",
        "30C": "#D2B30C",
        "2AF": "#0CD2AF",
        "base-color": "#47A59E",
        "btn-color": "#6CD5CD",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
        5: "5px",
      },
      borderColor: {
        primary: "#00AD57",
        "grey-500": "#E6E6E6",
        "grey-600": "#A5A5A5",
        "9FD": "#E4E9FD",
        353: "#C15353",
        "6E6": "#E6E6E6",
        "5A5": "#A5A5A5",
        "0E0": "#E0E0E0",
        BC2: "#4ACBC2",
        "5F5": "#F5F5F5",
        "9F0": "#E3E9F0",
        "4F9": "#F0F4F9",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern": "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
      },
    },
  },
  plugins: [],
};


