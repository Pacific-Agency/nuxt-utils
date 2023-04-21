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

:::

## Использование

Для использования необходимо добавить `@pacific-agency/nuxt-utils` в файл `nuxt.config.ts` в поле `modules`.

```ts [nuxt.]
export default defineNuxtConfig({
  modules: [
    "@pacific-agency/nuxt-utils", // [!code ++]
  ]
})
```
