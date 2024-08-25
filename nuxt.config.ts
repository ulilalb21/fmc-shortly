// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxtjs/google-fonts"],
  compatibilityDate: "2024-08-24",
  colorMode: {
    preference: "light",
  },
  googleFonts: {
    preload: true,
    display: "auto",
    families: {
      Poppins: [400, 500, 600, 700, 800],
    },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
});
