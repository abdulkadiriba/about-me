// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts",'nuxt-headlessui'],
  devtools: { enabled: true },
  components: ["~/components", "~/components/layout", "~/components/modals"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },
  googleFonts: {
    download: true,
    preconnect: true,
    prefetch: true,
    families: {
      Inter: true,
    },
  },
      // Optionally change the default prefix.
      headlessui: {
        prefix: 'Headless'
    }
});
