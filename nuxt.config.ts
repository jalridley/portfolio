// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/google-fonts', '@nuxt/image', 'nuxt-icon'],
  image: { dir: 'assets/images' },
  googleFonts: {
    families: {
      Besley: [600, 700],
      Raleway: [400, 500],
    },
  },
})
