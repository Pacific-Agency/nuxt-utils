import { defineConfig } from "vitepress"

export default defineConfig({
  base: "/nuxt-utils/",
  description: "Утилиты Nuxt от Pacific Agency",
  lang: "ru-RU",
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { link: "/", text: "Главная" },
      { link: "/components/input", text: "Компоненты" },
      { link: "/composables/use-fetch-auth", text: "Composables" },
    ],
    sidebar: [
      {
        items: [{ link: "/installation", text: "Установка и настройка" }],
      },
      {
        items: [
          { link: "/components/date", text: "UtilsDate" },
          { link: "/components/input", text: "UtilsInput" },
          { link: "/components/input-masked", text: "UtilsInputMasked" },
          { link: "/components/map-widget", text: "UtilsMapWidget" },
          { link: "/components/password", text: "UtilsPassword" },
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
            link: "/composables/use-highlighted-text",
            text: "useHighlightedText",
          },
          {
            link: "/composables/use-pagination",
            text: "usePagination",
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
            link: "/composables/use-sanitize",
            text: "useSanitize",
          },
          {
            link: "/composables/use-scroll-lock",
            text: "useScrollLock",
          },
          {
            link: "/composables/use-submit-form",
            text: "useSubmitForm",
          },
          {
            link: "/composables/use-scroll-slider",
            text: "useScrollSlider",
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
