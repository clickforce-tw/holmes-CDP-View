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
        primary: {
          1: '#DD2476',
          2: '#FF7527',
        },
        gradient: {
          1: '#DD2476',
          2: '#FF512F',
          3: '#FF7527',
        },
        background: {
          1: '#F8F6FB',
          2: '#FAFAFA',
          3: '#FFFFFF',
        },
        text: {
          main: '#525252',
          page_selected: '#FF7527',
          fillinbox_line: 'rgba(193, 193, 193, 0.8)',
          drop_down_menu: '#E7408A',
        },
        theme: {
          1: 'rgba(26, 26, 26, 0.9)',
          2: '#FF7527',
          3: 'rgba(193, 193, 193, 0.8)',
          4: '#E7408A',
        },
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
        chart_word: {
          red: '#DD2476',
          primary: '#FF7527',
          blue: '#52A0FC',
          yellow: '#FFC553',
        },
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
