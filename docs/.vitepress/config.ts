import { defineConfig } from "vitepress"

export default defineConfig({
  base: "/nuxt-utils/",
  description: "Утилиты Nuxt от Pacific Agency",
  lang: "ru-RU",
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { link: "/", text: "Главная" },
      { link: "/components/map-widget", text: "Компоненты" },
      { link: "/composables/use-fetch-auth", text: "Composables" },
    ],
    sidebar: [
      {
        items: [{ link: "/installation", text: "Установка и настройка" }],
      },
      {
        items: [
          { link: "/components/input", text: "UtilsInput" },
          { link: "/components/map-widget", text: "UtilsMapWidget" },
          { link: "/components/phone", text: "UtilsPhone" },
          { link: "/components/textarea", text: "UtilsTextarea" },
        ],
        text: "Компоненты",
      },
      {
        items: [
          {
            link: "/composables/use-fetch-auth",
            text: "useFetchAuth",
          },
          {
            link: "/composables/use-phone-formatter",
            text: "usePhoneFormatter",
          },
          {
            link: "/composables/use-price-formatter",
            text: "usePriceFormatter",
          },
          {
            link: "/composables/use-scroll-lock",
            text: "useScrollLock",
          },
          {
            link: "/composables/use-submit-form",
            text: "useSubmitForm",
          },
        ],
        text: "Composables",
      },
      {
        items: [{ link: "/api/sitemap", text: "Sitemap" }],
        text: "Серверные эндпоинты",
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/Pacific-Agency/nuxt-utils" },
    ],
  },
  title: "Утилиты Nuxt",
})
