import { onMounted, onUnmounted } from "vue"

/**
 * Функция блокирует скролл при монтировании компонента на страницу,
 * либо разблокирует его при размонтированнии компонента.
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
