# useFetchAuth

Функция для работы с эдпоинтами с авторизацией.

Решает 3 задачи:

- Проксит `cookie` клиента в серверные запросы при `SSR`
- Проксит `cookie` из серверных запросов на клиент
- Добавляет заголовок `X-CSRFToken` со значением из `cookie` `csrftoken`

::: info Что нужно для правильной работы авторизации

- Нужно выставить значение `csrftoken` в `cookie`
- В `cookie` нужно передавать `maxAge`, так как поле `expires` удаляется
:::

## Параметры

- `url` - `URL` для запроса
- `event` - событие запроса `h3`
- `options` - параметры запроса

## Возвращаемый объект

Функция возвращает объект с двумя параметрами:

- `data` - данные, полученные от API
- `error` - ошибка, возникшая при запросе

## Использование

```ts
const event = useRequestEvent()

const { data } = await useFetchAuth("/auth/csrf/", event, {
  baseURL: useRuntimeConfig().public.apiBase
})
```
