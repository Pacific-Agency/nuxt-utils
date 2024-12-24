import type { UseFetchOptions } from "#app"

import { useCookie, useRequestHeaders, useRuntimeConfig } from "#imports"
import { defu } from "defu"

/**
 * Функция добавляет заголовки для авторизации к параметрам `useFetch`.
 *
 * Решает 3 задачи:
 * - Проксит `cookie` клиента в серверные запросы при `SSR`
 * - Добавляет заголовок `X-CSRFToken` со значением из `cookie` `csrftoken`
 * - В `dev`-режиме добавляет заголовок `Authorization` со значением из `.env`.
 *
 * @template TResponse - ответ сервера
 * @param options - параметры запроса
 * @returns параметры запроса с добавленными заголовками
 */
export default function <TResponse>(options: UseFetchOptions<TResponse>) {
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
  } as const satisfies UseFetchOptions<TResponse>

  return defu(options, defaults)
}
