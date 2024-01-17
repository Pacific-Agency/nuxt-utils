# Sitemap

Данный серверный эндпоинт нужен для генерации Sitemap.

Он делает запрос на эндпоинт с бекенда, преобразует данные в формат для Sitemap и возвращает список страниц.

::: warning
Для правильной работы функции необходимо правильно [подготовить данные с бекенда](#бекенд).
:::

## Использование

- Подготовить эндпоинт с бекенда

- Добавить в `nuxt.config.ts`:

  ```ts
  import useSitemap from "./composables/useSitemap"

  export default defineNuxtConfig({
    sitemap: {
      sources: ["/api/sitemap-routes"],
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
  { "_i18nTransform": "true", "loc": "entity/test-slug" },
  { "_i18nTransform": "true", "loc": "entity/test-slug" },
  { "_i18nTransform": "true", "loc": "second-entity/test-slug" },
  { "_i18nTransform": "true", "loc": "second-entity/test-slug" }
]
```
