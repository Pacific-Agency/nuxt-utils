import { defineNuxtModule, createResolver, addImportsDir } from "@nuxt/kit"

export default defineNuxtModule({
  meta: {
    configKey: "pacific-frontend-composables",
    name: "nuxt-pacific-frontend-composables",
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const composables = resolve("./runtime/composables")

    addImportsDir(composables)
  },
})
