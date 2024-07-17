import type { UseFetchOptions } from "#app"

import {
  useCookie,
  useFetch,
  useRequestHeaders,
  useRuntimeConfig,
} from "#imports"
import { defu } from "defu"
import { hash } from "ohash"

/** Параметры useFetch */
type FetchParams = Parameters<typeof useFetch>
/** Тип ответа от useFetch */
type FetchReturn<TResponse> = Promise<ReturnType<typeof useFetch<TResponse>>>

/**
 * Функция для работы с эдпоинтами с авторизацией.
 *
 * Решает 3 задачи:
 * - Проксит `cookie` клиента в серверные запросы при `SSR`
 * - Добавляет заголовок `X-CSRFToken` со значением из `cookie` `csrftoken`
 * - В `dev`-режиме добавляет заголовок `Authorization` со значением из `.env`.
 *
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
      // Токен авторизации из .env
      Authorization: useRuntimeConfig().public.authToken as string,
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
  const params = defu(options, defaults)

  // Выставляем ключ состоящий из параметров
  params.key = hash({
    params,
    url,
  })

  // @ts-expect-error - неправильная автоматическая типизация
  return useFetch(url, params)
}
