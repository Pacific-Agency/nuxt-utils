<!-- eslint-disable jsdoc/check-tag-names -->
<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker"
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
     * Отображать ли время в календаре.
     *
     * @default `false`
     */
    enableTimePicker?: boolean
    /**
     * Формат отображение даты.
     *
     * Выставляет атрибут `format`.
     *
     * @default `dd.mm.yyyy`
     */
    format?: string
    /**
     * Идентификатор поля ввода.
     *
     * Устанавливает `id` и `name`, которые используются в `formData`.
     *
     * @default `date`
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
     * @default `Выберите дату`
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
    format: "dd.mm.yyyy",
    id: "date",
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
    <VueDatePicker
      v-bind="$attrs"
      v-model="modelValue"
      class="utils-date-picker"
      :format
    >
      <template #dp-input="{ value }">
        <input
          :id
          class="utils-date-input utils-form-input"
          :disabled
          :name="id"
          :placeholder
          :required
          :value
        />
      </template>
    </VueDatePicker>
  </div>
</template>
