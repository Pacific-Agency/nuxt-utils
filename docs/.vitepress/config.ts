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
      { link: "/composables/use-phone-formatter", text: "Composables" },
    ],
    sidebar: [
      {
        items: [{ link: "/components/map-widget", text: "MapWidget" }],
        text: "Компоненты",
      },
      {
        items: [
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
        ],
        text: "Composables",
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/Pacific-Agency/nuxt-utils" },
    ],
  },
  title: "Утилиты Nuxt",
})
