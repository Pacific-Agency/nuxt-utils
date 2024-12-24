<script setup lang="ts">
withDefaults(
  defineProps<{
    /**
     * Является ли поле выключенным.
     *
     * Задает параметр `disabled`.
     */
    disabled?: boolean
    /**
     * Идентификатор поля ввода.
     *
     * Устанавливает `id` и `name`, которые используются в `formData`.
     */
    id: string
    /**
     * Подпись поля ввода.
     *
     * Создает `label` и задает ему необходимый `id`.
     */
    label?: string // eslint-disable-line vue/require-default-prop
    /**
     * Ограничитель максимального количества символов.
     *
     * Устанавливает атрибут `maxlength` у `input`.
     */
    maxlength?: number // eslint-disable-line vue/require-default-prop
    /**
     * Ограничитель минимального количества символов.
     *
     * Устанавливает атрибут `minlength` у `input`.
     */
    minlength?: number // eslint-disable-line vue/require-default-prop
    /**
     * Плейсхолдер для поля.
     *
     * Задает параметр `placeholder`.
     */
    placeholder?: string // eslint-disable-line vue/require-default-prop
    /**
     * Является ли поле обязательным для заполнения.
     *
     * Выставляет атрибут `required`.
     *
     * @default `true`
     */
    required?: boolean
    /**
     * Тип поля.
     *
     * @default `text`
     */
    type?: "date" | "email" | "number" | "password" | "search" | "text"
  }>(),
  {
    required: true,
    type: "text",
  },
)

/** Текущий текст поля */
const modelValue = defineModel<Date | number | string>()
</script>

<template>
  <div class="utils-input-container utils-form-container">
    <label
      v-if="label"
      class="utils-input-label utils-form-label"
      :for="id"
      v-text="label"
    />
    <input
      :id
      v-model="modelValue"
      class="utils-input-input utils-form-input"
      :disabled
      :maxlength
      :minlength
      :name="id"
      :placeholder
      :required
      :type
    />
  </div>
</template>
