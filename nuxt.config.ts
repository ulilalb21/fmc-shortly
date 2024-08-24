// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/fonts"],
  compatibilityDate: "2024-08-24",
  colorMode: {
    preference: "light",
  },
  fonts: {
    families: [{ name: "Poppins", provider: "google" }],
  },
});
