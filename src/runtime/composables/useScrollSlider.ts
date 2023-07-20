import { computed, onMounted, onUnmounted, ref } from "#imports"
import type { ComputedRef, Ref } from "vue"

/**
 * Данная функция позволяет скроллить контейнер вправо либо влево на ширину контейнера
 *
 * @param sliderRef - `ref` контейнера, который нужно скроллить
 * @returns - объект, с функциями скролла вправо и влево,
 * а также реактивные переменные для определения крайней левой и крайней правой точки
 */
export default function useScrollSlider(
  sliderRef: Ref<HTMLElement | undefined>
): {
  leftCorner: ComputedRef<boolean>
  rightCorner: ComputedRef<boolean | undefined>
  scrollLeft: () => void
  scrollRight: () => void
} {
  const sliderScrollLeft = ref(0)

  /** Проскроллен ли контейнер полностью влево */
  const leftCorner = computed(() => !sliderScrollLeft.value)

  /** Проскроллен ли контейнер полностью вправо */
  const rightCorner = computed(() => {
    if (sliderRef.value) {
      return (
        sliderScrollLeft.value + sliderRef.value.offsetWidth ===
        sliderRef.value.scrollWidth
      )
    }
  })

  /**
   * Функция для скролла влево
   */
  function scrollLeft() {
    if (sliderRef.value) {
      sliderRef.value.scrollLeft -= sliderRef.value.offsetWidth
    }
  }

  /**
   * Функция для скролла вправо
   */
  function scrollRight() {
    if (sliderRef.value) {
      sliderRef.value.scrollLeft += sliderRef.value.offsetWidth
    }
  }

  /**
   * Данная функция записывает значение scrollLeft в реактивную переменную sliderScrollLeft
   */
  function scrollHandler() {
    sliderScrollLeft.value = sliderRef.value?.scrollLeft ?? 0
  }

  onMounted(() => {
    sliderRef.value?.addEventListener("scroll", scrollHandler)
  })

  onUnmounted(() => {
    sliderRef.value?.removeEventListener("scroll", scrollHandler)
  })

  return {
    leftCorner,
    rightCorner,
    scrollLeft,
    scrollRight,
  }
}
