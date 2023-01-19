/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        success: '#2BC105',
        error: '#CC1212',
        yellow: '#FFC553',
        white: '#ffffff',
      },
    },
    screens: {
      md: '768px',
      lg: '1024px',
      xl: '1366px',
      xxl: '1920px',
    },
  },
  plugins: [],
}