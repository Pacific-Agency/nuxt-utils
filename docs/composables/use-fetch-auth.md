# useFetchAuth

::: tip Для правильной работы функции нужно:

- Выставить значение `csrftoken` в `cookie`
:::

Функция для работы с эдпоинтами с авторизацией. В ней используется `useFetch`, поэтому используется она один в один.

Решает 2 задачи:

- Проксит `cookie` клиента в серверные запросы при `SSR`
- Добавляет заголовок `X-CSRFToken` со значением из `cookie` `csrftoken`

::: warning
Если `cookie` будут переданы в серверный запрос, то функция не проксирует их на клиент.

Соответственно, если есть задачи при первом входе пользователя на страницу выставить ему `cookie`, нужно решать эту задачу отдельно, и делать запрос на клиенте.
:::

## Параметры

- `url` - `URL` для запроса
- `options` - параметры запроса

## Возвращаемый объект

Функция возвращает тоже самое, что и `useFetch`.

## Использование

Функция используется один в один как `useFetch`.

```ts
const { data, error } = await useFetch<Response>("/auth/csrf/", {
  baseURL: useRuntimeConfig().public.apiBase
})
```
