# UtilsPhone

Данный компонент выводит поле для ввода номера телефона.

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

  **По умолчанию:** `phone`.

- `label` — плейсхолдер для поля. Задает параметр `placeholder`.

- `required` — является ли поле обязательным для заполнения. Выставляет атрибут `required`.

  **По умолчанию:** `true`.

## Стилизация

Для стилизации компонента подготовлены классы:

- `utils-phone-container`. Его стилизация влияет на контейнер, в котором находится текстовое поле.
- `utils-phone-label`. Его стилизация влияет на `label`.
- `utils-phone-input`. Его стилизация влияет на `input`.

При этом `label` и `input` можно стилизовать просто используя их селекторы.

## Использование

```vue
<script setup lang="ts">
const phone = ref("")
</script>

<template>
  <UtilsPhone
    v-model="phone"
  />
</template>
```