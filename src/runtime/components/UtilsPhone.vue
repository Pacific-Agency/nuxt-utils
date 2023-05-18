<!-- eslint-disable jsdoc/check-tag-names -->
<script setup lang="ts">
import { vMaska } from "maska"

withDefaults(
  defineProps<{
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
    required: true,
  }
)

/** Маска для ввода телефона */
const mask = "+7 ### ###-##-##"

/** Текущий текст поля */
const modelValue = defineModel<string>()
</script>

<template>
  <div class="utils-phone-container">
    <label v-if="label" class="utils-phone-label" :for="id" v-text="label" />
    <input
      :id="id"
      v-model="modelValue"
      v-maska
      autocomplete="tel"
      class="utils-phone-input"
      :data-maska="mask"
      maxlength="16"
      :name="id"
      pattern="\+\d \d{3} \d{3}-\d{2}-\d{2}"
      placeholder="+7 999 888-77-66"
      :required="required"
      type="text"
    />
  </div>
</template>
