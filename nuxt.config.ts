// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "nuxt-swiper",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "nuxt-svgo",
    "@nuxtjs/i18n"
  ],
  app: {
    head: {
      title: "Trend Mobile",
      charset: "utf-8",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover"
        },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "format-detection", content: "telephone=no" },
        { name: "description", content: "Trend Mobile landing page" }
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/icons/logo-black.svg"
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        }
      ]
    }
  },
  css: ["swiper/css", "swiper/css/navigation", "swiper/css/pagination", "~/assets/scss/style.scss"],
  devServer: { port: 5000, host: "*" },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_BASE_URL
    }
  },
  svgo: {
    componentPrefix: "icon",
    defaultImport: "component"
  },
  piniaPluginPersistedstate: {
    storage: "localStorage"
  },
  i18n: {
    locales: [
      { code: "ru", name: "ru", file: "ru.json" },
      { code: "en", name: "en", file: "en.json" }
    ],
    defaultLocale: "ru",
    langDir: "../app/locales",
    strategy: "no_prefix",

    detectBrowserLanguage: {
      fallbackLocale: "ru",
      useCookie: true,
      cookieKey: "locale",
      alwaysRedirect: true
    }
  }
});
