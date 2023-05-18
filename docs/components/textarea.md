# UtilsTextarea

Данный компонент выводит многострочное текстовое поле.

::: warning

Для работы данного компонента необходимо обновить Vue до версии `3.3`, а также включить `defineModel`.

::: details Как включить `defineModel`
Для того, чтобы включить `defineModel` необходимо добавить в `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  vite: {
    vue: {
      script: {
        defineModel: true,
      },
    },
  },
})
```

:::

## Пропсы

- `id` — идентификатор поля ввода. Устанавливает `id` и `name`, которые используются в `formData`.

- `label` — плейсхолдер для поля. Задает параметр `placeholder`.

- `placeholder` — плейсхолдер для поля. Задает параметр `placeholder`.

- `required` — является ли поле обязательным для заполнения. Выставляет атрибут `required`.

  **По умолчанию:** `true`.

- `rows` — тип поля.

  **По умолчанию:** `3`.

## Стилизация

Для стилизации компонента подготовлены классы:

- `utils-textarea-container`. Его стилизация влияет на контейнер, в котором находится текстовое поле.
- `utils-textarea-label`. Его стилизация влияет на `label`.
- `utils-textarea-textarea`. Его стилизация влияет на `textarea`.

При этом `label` и `textarea` можно стилизовать просто используя их селекторы.

## Использование

```vue
<script setup lang="ts">
const text = ref("")
</script>

<template>
  <UtilsTextarea
    v-model="text"
    id="test-field"
    :rows="5"
  />
</template>
```