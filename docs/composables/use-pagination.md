# usePagination

Функция для работы с пагинацией.

::: tip Ответ от API должен приходить в следующем формате

```ts
interface Pagination<TResponse> {
  /** Количество результатов */
  count: number
  /** Следующая страница */
  next: string | null
  /** Предыдущая страница */
  previous: string | null
  /** Результаты запроса */
  results: TResponse
}
```

:::

## Параметры

- `url` - `URL` для запроса
- `options` - параметры запроса. Присутствует параметр `auth`, который позволяет выполнять запросы используя `useFetchAuth`.

## Возвращаемый объект

Функция возвращает объект с методами для работы с пагинацией.

- `increasePage` - функция для увеличения номера страницы.
- `isPageLast` - возвращает `true` если текущая страница последняя.
- `results` - массив с результатами запроса.
- `refresh` - функция для обновления запроса.

## Использование

```ts
const {
  increasePage,
  isPageLast,
  results: doctors,
} = await usePagination<DoctorCard>("/doctors/", {
  baseURL: useRuntimeConfig().public.apiBase,
})
```
