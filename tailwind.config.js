/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        success: '#2BC105',
        error: '#CC1212',
        yellow: '#FFC553',
        white: '#ffffff',
        primary1: '#DD2476',
        primary2: '#FF7527',
        gradient:
          'linear-gradient(90deg, #DD2476 0%, #FF512F 81.25%, #FF7527 100%)',
        background1: '#F8F6FB',
        background2: '#FAFAFA',
        background3: '#FFFFFF',
        theme_1: 'rgba(26, 26, 26, 0.9)',
        theme_2: '#FF7527',
        theme_3: 'rgba(193, 193, 193, 0.8)',
        theme_4: '#E7408A',
        chart_red: {
          100: '#F1076F',
          76: 'rgba(241, 7, 111, 0.76)',
          80: 'rgba(241, 7, 111, 0.8)',
          50: 'rgba(241, 7, 111, 0.5)',
          40: 'rgba(241, 7, 111, 0.4)',
          24: 'rgba(241, 7, 111, 0.24)',
          10: 'rgba(241, 7, 111, 0.1)',
          4: 'rgba(241, 7, 111, 0.04)',
        },
        chart_blue: {
          100: '#52A0FC',
          80: 'rgba(82, 160, 252, 0.8)',
          20: 'rgba(82, 160, 252, 0.2)',
        },
        chart_word: '#F1076F',
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
