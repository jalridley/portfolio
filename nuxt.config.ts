// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
          ? { preset: ['default', { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },
  modules: ['@nuxtjs/google-fonts', '@nuxt/image', 'nuxt-icon'],
  image: { provider: 'netlify' },
  googleFonts: {
    display: 'swap',
    families: {
      Besley: [600, 700],
      Raleway: [400, 500],
    },
  },
})
