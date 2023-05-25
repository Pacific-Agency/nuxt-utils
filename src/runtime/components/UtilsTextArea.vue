<!-- eslint-disable jsdoc/check-tag-names -->
<script setup lang="ts">
withDefaults(
  defineProps<{
    // eslint-disable-line vue/require-default-prop
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
    label?: string
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
     * @defaultValue `true`
     */
    required?: boolean
    /**
     * Количество строк в поле.
     *
     * @defaultValue `3`
     */
    rows?: number
  }>(),
  {
    required: true,
    rows: 3,
  }
)

/** Текущий текст поля */
const modelValue = defineModel<string>({
  local: true,
})
</script>

<template>
  <div class="utils-textarea-container utils-form-container">
    <label
      v-if="label"
      class="utils-textarea-label utils-form-label"
      :for="id"
      v-text="label"
    />
    <textarea
      :id="id"
      v-model="modelValue"
      class="utils-textarea-textarea utils-form-input"
      :disabled="disabled"
      :name="id"
      :placeholder="placeholder"
      :required="required"
      :rows="rows"
    />
  </div>
</template>
