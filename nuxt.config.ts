import eslint from "vite-plugin-eslint";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  typescript: {
    typeCheck: true,
  },
  vite: {
    plugins: [eslint()],
  },
});
