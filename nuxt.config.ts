// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui', "@nuxthub/core", "nuxt-auth-utils"],
  hub: {
    database: true,
  },
})