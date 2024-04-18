<!-- eslint-disable jsdoc/check-tag-names -->
<script setup lang="ts">
import { vMaska } from "maska"

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
     * @defaultValue `phone`
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
     * @defaultValue `+7 999 888-77-66`
     */
    placeholder?: string
    /**
     * Является ли поле обязательным для заполнения.
     *
     * Выставляет атрибут `required`.
     *
     * @defaultValue `true`
     */
    required?: boolean
  }>(),
  {
    id: "phone",
    placeholder: "+7 999 888-77-66",
    required: true,
  }
)

/** Маска для ввода телефона */
const mask = "+7 ### ###-##-##"

/** Текущий текст поля */
const modelValue = defineModel<string>()
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
      :id="id"
      v-model="modelValue"
      v-maska
      autocomplete="tel"
      class="utils-phone-input utils-form-input"
      :data-maska="mask"
      :disabled="disabled"
      maxlength="16"
      :name="id"
      pattern="\+\d \d{3} \d{3}-\d{2}-\d{2}"
      :placeholder="placeholder"
      :required="required"
      type="text"
    />
  </div>
</template>
