# UtilsPassword

Данный компонент выводит поле для ввода пароля. Его основной функционал заключается в кнопке показа и скрытия пароля.

Компонент может быть использован несколькими способами:

1. Можно использовать в форме с помощью `formData`. Для этого в компоненте предусмотрен пропс `id`
1. Можно использовать через `v-model`.

::: warning

Для работы данного компонента необходимо установить модуль `nuxt-icon`, так как с помощью него выводится иконка для показа/скрытия пароля.

:::

## Пропсы

- `autocomplete` — задает атрибут `autocomplete`. Может быть полезен, когда необходимо вывести поля «Старый пароль» и «Новый пароль».

- `id` — идентификатор поля ввода. Устанавливает `id` и `name`, которые используются в `formData`.

  **По умолчанию:** `password`.

- `label` — плейсхолдер для поля. Задает параметр `placeholder`.

- `placeholder` — плейсхолдер для поля. Задает параметр `placeholder`.

- `disabled` — является ли поле выключенным. Задает параметр `disabled`.

- `minlength` — определяет минимальную длину инпута. Задает параметр `minlength`.

  **По умолчанию:** `4`.

- `maxlength` — определяет максимальную длину инпута. Задает параметр `maxlength`.

- `required` — является ли поле обязательным для заполнения. Выставляет атрибут `required`.

  **По умолчанию:** `true`.

## Стилизация

Для стилизации компонента подготовлены классы:

- `utils-input-container`. Его стилизация влияет на контейнер, в котором находится текстовое поле.
- `utils-input-label`. Его стилизация влияет на `label`.
- `utils-input-input`. Его стилизация влияет на `input`.
- `utils-password-icon`. Его стилизация влияет на иконку показа/скрытия пароля.

При этом `label` и `input` можно стилизовать просто используя их селекторы.

::: info
Также для стилизации можно использовать глобальные классы, которые стилизуют все компоненты формы.

- `utils-form-container`. Его стилизация влияет на контейнер, в котором находится текстовое поле.
- `utils-form-label`. Его стилизация влияет на `label`.
- `utils-form-input`. Его стилизация влияет на поле ввода.
:::

## Использование

```vue
<script setup lang="ts">
const text = ref("")
</script>

<template>
  <UtilsPassword
    v-model="text"
    id="test-field"
    placeholder="Тестовый плейсхолдер"
  />
</template>
```
