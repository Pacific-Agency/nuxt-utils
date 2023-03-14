# Frontend composables for Nuxt

## Установка модуля в проект

1. Добавить `frontend-composables` в зависимости

```bash
# Using pnpm
pnpm add @pacific-agency/frontend-composables
```

1. Добавить `frontend-composables` в `nuxt.config.ts` в поле `modules`

```js
export default defineNuxtConfig({
  modules: [
    "@pacific-agency/frontend-composables"
  ]
})
```

## Разработка

```bash
# Установка зависимостей
pnpm install

# Создание заглушек типов и подготовка разработки
pnpm dev:prepare

# Запуск сервера разработки
pnpm dev

# Билд папки `playground`
pnpm dev:build

# Запуск `eslint`
pnpm lint

# Запуск тестов
pnpm test
pnpm test:watch

# Релиз новой версии
pnpm release
```
