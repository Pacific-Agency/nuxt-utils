# Установка и настройка

Для работы необходимо установить расширение и добавить его в конфигурацию.

## Установка

::: code-group

```bash [pnpm]
pnpm add @pacific-agency/nuxt-utils
```

```bash [npm]
npm install @pacific-agency/nuxt-utils
```

```bash [yarn]
yarn add @pacific-agency/nuxt-utils
```

```bash [bun]
bun add @pacific-agency/nuxt-utils
```

:::

## Использование

Для использования необходимо добавить `@pacific-agency/nuxt-utils` в файл `nuxt.config.ts` в поле `modules`.

```ts
export default defineNuxtConfig({
  modules: [
    "@pacific-agency/nuxt-utils", // [!code ++]
  ]
})
```

## Конфигурация

Изменять конфигурацию можно в файле `nuxt.config.ts` в поле `nuxtUtils`.

```ts
export default defineNuxtConfig({
  nuxtUtils: {
    // ...
  }
})
```

### `authNuxtOpenFetch`

::: warning
Для работы данной функции необходимо установить и настроить плагин `nuxt-open-fetch`.
:::

Добавить ли авторизацию для запросов с помощью Nuxt Open Fetch. Авторизация работает по такому же принципу, как в [`useFetchAuth`](/composables/use-fetch-auth).

**По умолчанию:** `false`
