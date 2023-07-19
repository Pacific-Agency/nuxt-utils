<!-- eslint-disable jsdoc/check-tag-names -->
<script setup lang="ts">
import { ref } from "vue";

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
     * @defaultValue `password`
     */
    id?: string // eslint-disable-line vue/require-default-prop
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
     * @defaultValue `true`
     */
    required?: boolean
  }>(),
  {
    id: "password",
    minlength: 4,
    required: true
  },
)

/** Текущий текст поля */
const modelValue = defineModel<string>({
  local: true,
})

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
        :id="id"
        v-model="modelValue"
        :autocomplete="autocomplete"
        class="utils-password-input utils-form-input"
        :disabled="disabled"
        :maxlength="maxlength"
        :minlength="minlength"
        :name="id"
        :placeholder="placeholder"
        :required="required"
        :type="isPasswordShown ? 'text' : 'password'"
      />
      <Icon class="utils-password-icon" :name="isPasswordShown ? 'heroicons:eye' : 'heroicons:eye-slash'" @click="isPasswordShown = !isPasswordShown" />
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
