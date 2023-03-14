import { addImportsDir, createResolver, defineNuxtModule } from "@nuxt/kit"

export default defineNuxtModule({
  meta: {
    configKey: "nuxt-utils",
    name: "nuxt-utils",
  },
  setup() {
    const { resolve } = createResolver(import.meta.url)

    const composables = resolve("./runtime/composables")

    addImportsDir(composables)
  },
})
