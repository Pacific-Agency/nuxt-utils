# Sitemap

Данный серверный эндпоинт нужен для генерации Sitemap.

Он делает запрос на эндпоинт с бекенда, преобразует данные в формат для Sitemap и возвращает список страниц.

## Использование

- Подготовить эндпоинт с бекенда
- Создать функцию `useSitemap.ts` с содержимым:

  ```ts
  export default async () => {
    return await $fetch("/api/sitemap-routes")
  }
  ```

- Добавить в `nuxt.config.ts`:

  ```ts
  import useSitemap from "./composables/useSitemap"

  export default defineNuxtConfig({
    sitemap: {
      routes: useSitemap,
    },
  })
  ```

## Бекенд

Для правильной работы данного эндпоинта необходимы:

- Эндоинт на бекенде должен открываться по ссылке: `https://<BASE_URL>/sitemap/`
- Правильная структура данных, возвращаемая с бекенда

```json
{
  "entity": [
    {
      "slug": "test-slug"
    },
    {
      "slug": "test-slug"
    }
  ],
  "second-entity": [
    {
      "slug": "test-slug"
    },
    {
      "slug": "test-slug"
    }
  ]
}
```

## Выходные данные

```json
[
  "entity/test-slug",
  "entity/test-slug",
  "second-entity/test-slug",
  "second-entity/test-slug"
]
```
