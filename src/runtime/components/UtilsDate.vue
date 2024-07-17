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
     * @defaultValue `false`
     */
    enableTimePicker?: boolean
    /**
     * Идентификатор поля ввода.
     *
     * Устанавливает `id` и `name`, которые используются в `formData`.
     *
     * @defaultValue `date`
     */
    id?: string
    /**
     * Подпись поля ввода.
     *
     * Создает `label` и задает ему необходимый `id`.
     */
    label?: string
    // eslint-disable-line vue/require-default-prop
    /**
     * Локализация календаря.
     *
     * Выставляет атрибут `locale`.
     *
     * @defaultValue `ru`
     */
    locale?: string
    // eslint-disable-line vue/require-default-prop
    /**
     * Плейсхолдер поля.
     *
     * Задает параметр `placeholder`.
     *
     * @defaultValue `Выберите дату`
     */
    placeholder?: string
    /**
     * Позиционирование календаря.
     *
     * Выставляет атрибут `position`.
     *
     * @defaultValue `left`
     */
    position?: "left" | "right" | "center"
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
    enableTimePicker: false,
    id: "date",
    locale: "ru",
    placeholder: "Выберите дату",
    position: "left",
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
      v-model="modelValue"
      class="utils-date-picker"
      :enable-time-picker="enableTimePicker"
      :locale="locale"
      :position="position"
    >
      <template #dp-input="{ value }">
        <input
          :id="id"
          class="utils-date-input utils-form-input"
          :disabled="disabled"
          :name="id"
          :placeholder="placeholder"
          :required="required"
          :value="value"
        />
      </template>
    </VueDatePicker>
  </div>
</template>
