import type { Plugin } from "nuxt/app"

import {
  // @ts-expect-error - функция есть в итоговом проекте при установке соответствующего модуля
  createOpenFetch,
  defineNuxtPlugin,
  useCookie,
  useRequestFetch,
  useRequestHeaders,
  useRuntimeConfig,
} from "#imports"
import { defu } from "defu"

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
          /** Параметры по умолчанию */
          const defaults = {
            credentials: "include",
            headers: {
              // Токен авторизации из .env
              Authorization: useRuntimeConfig().public.authToken as string,
              // Проксим `cookie` клиента на сервер
              cookie: useRequestHeaders(["cookie"]).cookie ?? "",
              // Выставляем `csrftoken` из `cookie` в заголовок
              "X-CSRFToken": useCookie("csrftoken").value ?? "",
            },
          } as const

          /**
           * Параметры для функции.
           *
           * Для работы их как дефолтных используется `defu`.
           */
          const params = defu(options, defaults)

          return [name, createOpenFetch(params, localFetch)]
        })
      ),
    }
  },
}) as Plugin
