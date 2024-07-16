<!-- eslint-disable jsdoc/check-tag-names -->
<script setup lang="ts">
import Datepicker from "@vuepic/vue-datepicker"
import "@vuepic/vue-datepicker/dist/main.css"

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
    label?: string 
    /**
     * Локализация календаря.
     *
     * Выставляет атрибут `locale`.
     *
     * @defaultValue `ru`
     */
    locale?: string,
    // eslint-disable-line vue/require-default-prop
/**
 * Плейсхолдер поля.
 *
 * Задает параметр `placeholder`.
 *
 * @defaultValue `Выберите дату`
 */
    placeholder?: string,
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
    id: "date",
    locale: "ru",
    placeholder: "Выберите дату",
    required: true,
  }
)

/** Текущий текст поля */
const modelValue = defineModel<string>()
</script>

<template>
  <div class="utils-date-container utils-form-container">
    <label
      v-if="label"
      class="utils-date-label utils-form-label"
      :for="id"
      v-text="label"
    />
    <Datepicker
      :id="id"
      v-model="modelValue"
      class="utils-date-input utils-form-input"
      :disabled="disabled"
      :locale="locale"
      :name="id"
      :placeholder="placeholder"
      :required="required"
    />
  </div>
</template>
