# Утилиты Nuxt

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/pacific-agency/nuxt-utils)

## Установка

```bash
pnpm add @pacific-agency/nuxt-utils
```

```bash
npm add @pacific-agency/nuxt-utils
```

```bash
yarn add @pacific-agency/nuxt-utils
```

## Использование

Для использования необходимо добавить `@pacific-agency/nuxt-utils` в файл `nuxt.config.ts` в поле `modules`:

```ts
export default defineNuxtConfig({
  modules: [
    "@pacific-agency/nuxt-utils",
  ]
})
```

## Разработка

Создание заглушек типов и подготовка разработки

```bash
pnpm dev:prepare
```

Запуск сервера разработки

```bash
pnpm dev
```

Билд папки `playground`

```bash
pnpm dev:build
```

### Линт

Запуск ESLint

```bash
pnpm lint
```

Запуск Prettier

```bash
pnpm prettier
```

### Тестирование

Запуск тестов

```bash
pnpm test
```
