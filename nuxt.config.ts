import eslint from 'vite-plugin-eslint'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt'],
  components: true,
  typescript: {
    typeCheck: false,
  },
  vite: {
    plugins: [eslint()],
  },
})
