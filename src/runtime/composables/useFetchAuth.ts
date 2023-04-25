import { useCookie, useFetch, useRequestHeaders } from "#imports"

/** Параметры запроса от useFetch */
type FetchParams<TResponse> = Parameters<typeof useFetch<TResponse>>

/**
 * Функция для работы с эдпоинтами с авторизацией.
 *
 * Решает 2 задачи:
 * - Проксит `cookie` клиента в серверные запросы при `SSR`
 * - Добавляет заголовок `X-CSRFToken` со значением из `cookie` `csrftoken`
 * @param url - `URL` для запроса
 * @param options - параметры запроса
 * @returns Ответ от API, формат как у useFetch
 * @see https://pacific-agency.github.io/nuxt-utils/composables/use-fetch-auth.html
 * @example
 * ```ts
 * const { data, error } = await useFetchAuth<Response>("/auth/csrf/", {
 *   baseURL: useRuntimeConfig().public.apiBase
 * })
 * ```
 */
export default async function <TResponse>(
  url: FetchParams<TResponse>[0],
  options?: FetchParams<TResponse>[1]
) {
  return useFetch<TResponse>(url, {
    credentials: "include",
    headers: {
      // Выставляем `csrftoken` из `cookie` в заголовок
      "X-CSRFToken": useCookie("csrftoken").value ?? "",
      // Проксим `cookie` клиента на сервер
      cookie: useRequestHeaders(["cookie"]).cookie ?? "",
    },
    ...options,
  })
}
