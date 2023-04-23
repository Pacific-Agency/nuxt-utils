import { useCookie, useRequestHeaders } from "#imports"
import type { H3Event } from "h3"
import { appendHeader } from "h3"

/** Параметры запроса */
type FetchParams = Parameters<typeof $fetch.raw>

/**
 * Функция для работы с эдпоинтами с авторизацией.
 *
 * Решает 3 задачи:
 * - Проксит `cookie` клиента в серверные запросы при `SSR`
 * - Проксит `cookie` из серверных запросов на клиент
 * - Добавляет заголовок `X-CSRFToken` со значением из `cookie` `csrftoken`
 * @param url - `URL` для запроса
 * @param event - событие запроса `h3`
 * @param options - параметры запроса
 * @returns Объект с параметрами `data` и `error`
 * @see https://pacific-agency.github.io/nuxt-utils/composables/use-fetch-auth.html
 * @example
 * ```ts
 * const event = useRequestEvent()
 *
 * const { data } = await useFetchAuth("/auth/csrf/", event, {
 *   baseURL: useRuntimeConfig().public.apiBase
 * })
 * ```
 */
export default async function <TResponse>(
  url: FetchParams[0],
  event?: H3Event,
  options?: FetchParams[1]
) {
  try {
    /** Ответ от эндпоинта */
    const response = await $fetch.raw<TResponse>(url, {
      credentials: "include",
      headers: {
        // Выставляем `csrftoken` из `cookie` в заголовок
        "X-CSRFToken": useCookie("csrftoken").value ?? "",
        // Проксим `cookie` клиента на сервер
        cookie: useRequestHeaders(["cookie"]).cookie ?? "",
      },
      ...options,
    })

    /** `cookie` из ответа */
    const cookies = (response.headers.get("set-cookie") ?? "")
      .replace(/expires=.[^;]*;/g, "") // Удаление `expires`, чтобы правильно сработал `split`. Это можно сделать, так как передается `maxAge`
      .split(", ") // Разбиение полученной строки на отдельные `cookie`

    // Запись `cookie` в ответ
    for (const cookie of cookies) {
      // На клиенте event будет `undefined`, поэтому присутствует проверка на это
      if (event) {
        // Добавляем `cookie` в ответ
        appendHeader(event, "set-cookie", cookie)
      }
    }

    // Возвращаем ответ от API
    return { data: response._data }
  } catch (error) {
    // Ловим ошибку
    console.error(error) // Выводим в консоль
    return { error: error } // Возвращаем в объект `error`
  }
}
