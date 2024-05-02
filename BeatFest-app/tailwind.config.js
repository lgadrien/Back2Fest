/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", 
  "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        '100': '25rem',  // 400px
        '104': '26rem',  // 416px
        '108': '27rem',  // 432px
        '112': '28rem',  // 448px
        '116': '29rem',  // 464px
        '120': '30rem',  // 480px
        '124': '31rem',  // 496px
        '128': '32rem',  // 512px
        '132': '33rem',  // 528px
        '136': '34rem',  // 544px
        '140': '35rem',  // 560px
    },
  },
  plugins: [],
}}
