<script setup lang="ts">
import { ref } from "vue"

withDefaults(
  defineProps<{
    /**
     * Параметр `autocomplete`.
     */
    autocomplete?: "current-password" | "new-password" // eslint-disable-line vue/require-default-prop
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
     * @default `password`
     */
    id?: string
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
    minlength?: number
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
  }>(),
  {
    id: "password",
    minlength: 4,
    required: true,
  }
)

/** Текущий текст поля */
const modelValue = defineModel<string>()

/** Показан ли пароль */
const isPasswordShown = ref(false)
</script>

<template>
  <div class="utils-password-container utils-form-container">
    <label
      v-if="label"
      class="utils-password-label utils-form-label"
      :for="id"
      v-text="label"
    />
    <div class="utils-password-inner-container">
      <input
        :id
        v-model="modelValue"
        :autocomplete
        class="utils-password-input utils-form-input"
        :disabled
        :maxlength
        :minlength
        :name="id"
        :placeholder
        :required
        :type="isPasswordShown ? 'text' : 'password'"
      />
      <Icon
        class="utils-password-icon"
        :name="isPasswordShown ? 'heroicons:eye' : 'heroicons:eye-slash'"
        @click="isPasswordShown = !isPasswordShown"
      />
    </div>
  </div>
</template>

<style>
.utils-password-inner-container {
  position: relative;
}

.utils-password-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>
