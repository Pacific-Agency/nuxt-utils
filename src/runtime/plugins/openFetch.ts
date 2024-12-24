import type { Plugin } from "nuxt/app"

import {
  // @ts-expect-error - функция есть в итоговом проекте при установке соответствующего модуля
  createOpenFetch,
  defineNuxtPlugin,
  useRequestFetch,
  useRuntimeConfig,
} from "#imports"

import authHeaders from "../utils/authHeaders"

export default defineNuxtPlugin({
  enforce: "pre",
  name: "nuxt-open-fetch-auth",
  setup() {
    const clients = useRuntimeConfig().public.openFetch as Record<
      string,
      object
    >
    const localFetch = useRequestFetch()

    return {
      provide: Object.fromEntries(
        Object.entries(clients).map(([name, options]) => {
          /** Параметры для функции */
          const params = authHeaders(options)

          return [name, createOpenFetch(params, localFetch)]
        }),
      ),
    }
  },
}) as Plugin
