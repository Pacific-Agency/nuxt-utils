import {
  addComponentsDir,
  addImportsDir,
  addPlugin,
  addServerHandler,
  createResolver,
  defineNuxtModule,
  hasNuxtModule,
} from "@nuxt/kit"
import { consola } from "consola"

/** Параметры модуля `@pacific-agency/nuxt-utils` */
export interface ModuleOptions {
  /**
   * Добавить авторизацию для запросов с помощью Nuxt Open Fetch.
   * Авторизация работает по такому же принципу, как в `useFetchAuth`.
   *
   * Для работы данной функции необходимо установить и настроить плагин `nuxt-open-fetch`.
   *
   * @default false
   * @see https://pacific-agency.github.io/nuxt-utils/composables/use-fetch-auth.html
   */
  authNuxtOpenFetch: boolean
}

export default defineNuxtModule<ModuleOptions>({
  defaults: {
    authNuxtOpenFetch: false,
  },
  meta: {
    configKey: "nuxtUtils",
    name: "@pacific-agency/nuxt-utils",
  },
  setup(moduleOptions, { options: nuxtOptions }) {
    const { resolve } = createResolver(import.meta.url)

    /** Компоненты */
    const components = resolve("./runtime/components")
    void addComponentsDir({ path: components })

    /** Composables */
    const composables = resolve("./runtime/composables")
    addImportsDir(composables)

    /** Серверные эндпоинты */
    addServerHandler({
      handler: resolve("./runtime/api/sitemap-routes"),
      route: "/api/sitemap-routes",
    })

    /** Плагины */
    if (moduleOptions.authNuxtOpenFetch) {
      if (hasNuxtModule("nuxt-open-fetch")) {
        // @ts-expect-error - свойство openFetch появляется после установки `nuxt-open-fetch`
        nuxtOptions.openFetch ||= {}
        // @ts-expect-error - свойство openFetch появляется после установки `nuxt-open-fetch`
        nuxtOptions.openFetch.disableNuxtPlugin = true

        addPlugin(resolve("./runtime/plugins/openFetch"))
      } else {
        consola.warn(
          "Плагин `nuxt-open-fetch` не установлен. Для работы данной функции необходимо установить и настроить плагин `nuxt-open-fetch`."
        )
      }
    }
  },
})
