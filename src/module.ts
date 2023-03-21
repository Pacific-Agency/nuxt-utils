import {
  addComponentsDir,
  addImportsDir,
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

    const components = resolve("./runtime/components")
    const composables = resolve("./runtime/composables")

    addComponentsDir({ path: components })
    addImportsDir(composables)
  },
})
