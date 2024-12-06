import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalStyles = defineGlobalStyles({
  "@font-face": {
    fontFamily: "Georgia",
    src: "url('/fonts/DistantGalaxy.woff') format('woff')",
    fontWeight: "normal",
    fontStyle: "normal",
    fontDisplay: "swap"
  },
  body: {
    backgroundColor: '#0B001A',
    color:'#fff',
    padding:'1.25rem',
    fontFamily: 'Montserrat, system-ui, sans-serif',
    scrollSnapType: 'y mandatory',
  },
  '.scroll-snap-container': {
    scrollSnapType: 'y mandatory',
    overflowY: 'scroll',
  },
  '.scroll-snap-child': {
    scrollSnapAlign: 'center',
  },
});


export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fontSizes: {
          base:{
            "display": { value: "6.25rem" },    // was 3xl - 100px
            "heading": { value: "3.125rem" },   // was 2xl - 50px
            "title": { value: "2rem" },         // was xl - 32px
            "subtitle": { value: "1.5rem" },    // was lg - 24px
            "body": { value: "1.375rem" },      // was sm - 22px
            "small": { value: "0.875rem" },     // 14px
          }
        },
        letterSpacings: {
          tight: { value: '-0.05em' }
        },
        colors: {
          lavenderLight: { value: "#E9DEFF" },
          purpleDark: { value: "#1E0044" },
          purpleBase: { value: "#0B001A" },
          primary: { value: "#8338EC" },
          secondary: { value: "#B923FF" },
          accent: { value: "#9C2EF5" },
          shadowBase: { value: "#A22DF71A" }
        },
        gradients: {
          primary: {
            value: "linear-gradient(93deg, #8338EC 49.3%, #B923FF 87.76%)"
          },
          secondary: {
            value: "linear-gradient(93.26deg, #8338EC 10.4%, #9C2EF5 101.06%)"
          },
          border: {
            value: "linear-gradient(0deg, #0B001A, #0B001A), linear-gradient(93.26deg, #8338EC 10.4%, #B923FF 101.06%)",
          }
        },
        borders:{
          bottomSide: { value: '1px solid #17003466' }
        },
        shadows: {
          all: { 
            value: `0px 0px 3.15px 0px #A22DF71A,
                   0px 0px 6.52px 0px #A22DF71A,
                   0px 0px 13px 0px #A22DF71A,
                   0px 0px 25.48px 0px #A22DF71A,
                   0px 0px 46.85px 0px #A22DF71A,
                   0px 0px 19px 9px #A22DF71A`
          },
        },
        radii: {
          sm: { value: "1.198rem" },    // 19.17px
          md: { value: "1.25rem" },     // 20px
          lg: { value: "2.5rem" }       // 40px
        },
        lineHeights: {
          display: { value: "6.25rem" },  // 100px
          base: { value: "1.8rem" },       // 28.8px
          snug: { value: "1.4rem" },      // 22.4px
        }
      }
    },
  },

  outdir: "styled-system",
  globalCss: globalStyles,
});
