import type { UseFetchOptions } from "#app"
import { useCookie, useFetch, useRequestHeaders } from "#imports"
import { defu } from "defu"

/** Параметры useFetch */
type FetchParams = Parameters<typeof useFetch>
/** Тип ответа от useFetch */
type FetchReturn<TResponse> = Promise<ReturnType<typeof useFetch<TResponse>>>

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
  url: FetchParams[0],
  options: UseFetchOptions<TResponse> = {}
): FetchReturn<TResponse> {
  const defaults: UseFetchOptions<TResponse> = {
    credentials: "include",
    headers: {
      // Выставляем `csrftoken` из `cookie` в заголовок
      "X-CSRFToken": useCookie("csrftoken").value ?? "",
      // Проксим `cookie` клиента на сервер
      cookie: useRequestHeaders(["cookie"]).cookie ?? "",
    },
  }

  /**
   * Параметры для функции.
   *
   * Для работы их как дефолтных используется `defu`.
   */
  const params = defu(defaults, options)

  // @ts-expect-error - неправильная автоматическая типизация
  return useFetch(url, params)
}
