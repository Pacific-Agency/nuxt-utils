<script setup lang="ts">
import { vMaska } from "maska/vue"

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
     *
     * @default `phone`
     */
    id?: string
    /**
     * Подпись поля ввода.
     *
     * Создает `label` и задает ему необходимый `id`.
     */
    label?: string // eslint-disable-line vue/require-default-prop
    /**
     * Плейсхолдер поля.
     *
     * Задает параметр `placeholder`.
     *
     * @default `+7 999 888-77-66`
     */
    placeholder?: string
    /**
     * Является ли поле обязательным для заполнения.
     *
     * Выставляет атрибут `required`.
     *
     * @default `true`
     */
    required?: boolean
  }>(),
  {
    id: "phone",
    placeholder: "+7 999 888-77-66",
    required: true,
  }
)

/** Текущий текст поля */
const modelValue = defineModel<string>()

/** Маска для ввода телефона */
const mask = "+7 ### ###-##-##"
</script>

<template>
  <div class="utils-phone-container utils-form-container">
    <label
      v-if="label"
      class="utils-phone-label utils-form-label"
      :for="id"
      v-text="label"
    />
    <input
      :id
      v-model="modelValue"
      v-maska="mask"
      autocomplete="tel"
      class="utils-phone-input utils-form-input"
      :disabled
      maxlength="16"
      :name="id"
      pattern="\+\d \d{3} \d{3}-\d{2}-\d{2}"
      :placeholder
      :required
      type="text"
    />
  </div>
</template>
