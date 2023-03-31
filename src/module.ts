import {
  addComponentsDir,
  addImportsDir,
  addServerHandler,
  createResolver,
  defineNuxtModule,
} from "@nuxt/kit"

export default defineNuxtModule({
  meta: {
    configKey: "@pacific-agency/nuxt-utils",
    name: "@pacific-agency/nuxt-utils",
  },
  setup() {
    const { resolve } = createResolver(import.meta.url)

    /** Компоненты */
    const components = resolve("./runtime/components")
    void addComponentsDir({ path: components })

    /** Composables */
    const composables = resolve("./runtime/composables")
    addImportsDir(composables)

    /** Серверные эндпоинты */
    addServerHandler({
      handler: resolve("./runtime/api/sitemap-routes.ts"),
      lazy: true,
      route: "/api/sitemap-routes",
    })
  },
})
