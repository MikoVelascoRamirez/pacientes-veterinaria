/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.jsx"],
  theme: {
    extend: {},
    screens: {
      'xxs' : '160px',
      'xs' : '320px',
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024 px',
      'xl' : '1280px',
      '2xl' : '1536px'
    }
  },
  plugins: [],
}
