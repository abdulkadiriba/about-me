// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", 'nuxt-icon', '@nuxtjs/device', 'shadcn-nuxt'],
  devtools: { enabled: true },
  components: ["~/components"],
  build: {
    transpile: ['vue-toastification']
  },
  css: ['vue-toastification/dist/index.css'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  googleFonts: {
    download: true,
    preconnect: true,
    prefetch: true,
    families: {
      Inter: true,
    },
  },

});