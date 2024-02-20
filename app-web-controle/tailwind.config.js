/** @type {import('tailwindcss').Config} */
module.exports = {
  enabled: 
    process.env.WEBPACK_DEV_SERVER === 'true' &&
    process.argv.join(' ').indexOf("build") !== -1,

  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

