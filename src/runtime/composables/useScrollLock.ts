import { onMounted, onUnmounted } from "vue"

/**
 * Данная функция используется для блокирования скролла при открытие открытии модальных окон.
 *
 * Она выполняет две вещи:
 * - Блокирует скролл при монтировании компонента.
 * - Разблокирует скролл при размонтированнии компонента.
 *
 * @see https://pacific-agency.github.io/nuxt-utils/composables/use-scroll-lock.html
 * @example
 * При монтировании компонента с этой функцией в `script setup`, скролл будет заблокирован.
 * ```vue
 * <script setup>
 * useScrollLock()
 * </script>
```
 */
export default function useScrollLock(): void {
  onMounted(() => {
    /** Блокировка скролла при монтировании модального окна */
    document.documentElement.style.overflow = "hidden"
    document.documentElement.style.touchAction = "none"
  })

  onUnmounted(() => {
    /** Разблокирование скролла при размонтировании модального окна */
    document.documentElement.style.overflow = ""
    document.documentElement.style.touchAction = ""
  })
}
