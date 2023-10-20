# useSanitize

::: warning
Для использования необходимо добавить в `nuxt.config.ts`.

```ts
vite: {
  optimizeDeps: {
    include: ["isomorphic-dompurify"]
  }
}
```

:::

Данная функция нужна для очистки HTML-кода, полученного от API.

Благодаря ей код можно использовать в `v-html`, не боясь XSS-атаки.

## Параметры

- `html` — HTML-код, который необходимо очистить.

## Использование

```ts
useSanitize("<p>HTML-код, который необходимо очистить</p>")
```
