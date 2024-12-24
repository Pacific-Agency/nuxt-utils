import type { UseFetchOptions } from "#app"

import { useFetch } from "#imports"
import { hash } from "ohash"

import authHeaders from "../utils/authHeaders"

/** Параметры useFetch */
type FetchParams = Parameters<typeof useFetch>
/**
 * Тип ответа от useFetch
 *
 * @template TResponse Тип данных, возвращаемых сервером.
 */
type FetchReturn<TResponse> = Promise<ReturnType<typeof useFetch<TResponse>>>

/**
 * Функция для работы с эдпоинтами с авторизацией.
 *
 * Решает 3 задачи:
 * - Проксит `cookie` клиента в серверные запросы при `SSR`
 * - Добавляет заголовок `X-CSRFToken` со значением из `cookie` `csrftoken`
 * - В `dev`-режиме добавляет заголовок `Authorization` со значением из `.env`.
 *
 * @template TResponse Тип данных, возвращаемых сервером.
 * @param url - `URL` для запроса.
 * @param options - параметры запроса.
 * @returns Ответ от API, формат как у useFetch.
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
  options: UseFetchOptions<TResponse> = {},
): FetchReturn<TResponse> {
  /** Параметры для функции */
  const params = authHeaders(options)

  // Выставляем ключ состоящий из параметров
  params.key = hash({
    params,
    url,
  })

  // @ts-expect-error - неправильная автоматическая типизация
  return useFetch(url, params)
}
