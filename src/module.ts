import { addImportsDir, createResolver, defineNuxtModule } from "@nuxt/kit"

export default defineNuxtModule({
  meta: {
    configKey: "@pacific-agency/nuxt-utils",
    name: "@pacific-agency/nuxt-utils",
  },
  setup() {
    const { resolve } = createResolver(import.meta.url)

    const composables = resolve("./runtime/composables")

    addImportsDir(composables)
  },
})
