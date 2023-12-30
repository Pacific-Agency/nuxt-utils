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
     */
    id: string
    /**
     * Подпись поля ввода.
     *
     * Создает `label` и задает ему необходимый `id`.
     */
    label?: string // eslint-disable-line vue/require-default-prop
    /**
     * Позволяет задать маску, которой будет соответствовать значение элемента формы
     *
     * Устанавливает атрибут `data-maska` у `input`.
     */
    mask: string
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
     * Регулярное выражение, которому должно соответствовать значение у `input`.
     *
     * Устанавливает атрибут `pattern` у `input`.
     */
    pattern?: string // eslint-disable-line vue/require-default-prop
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
     * Тип поля.
     *
     * @defaultValue `text`
     */
    type?: "number" | "text"
  }>(),
  {
    required: true,
    type: "text",
  }
)

/** Текущий текст поля */
const modelValue = defineModel<number | string>()
</script>

<template>
  <div class="utils-input-masked-container utils-form-container">
    <label
      v-if="label"
      class="utils-input-masked-label utils-form-label"
      :for="id"
      v-text="label"
    />
    <input
      :id="id"
      v-model="modelValue"
      v-maska
      class="utils-input-masked-input utils-form-input"
      :data-maska="mask"
      :disabled="disabled"
      :maxlength="maxlength"
      :minlength="minlength"
      :name="id"
      :pattern="pattern"
      :placeholder="placeholder"
      :required="required"
      :type="type"
    />
  </div>
</template>
