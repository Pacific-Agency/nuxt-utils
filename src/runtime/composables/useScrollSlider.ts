import type { ComputedRef, Ref } from "vue"

import { computed, onMounted, onUnmounted, ref } from "#imports"

/**
 * Данная функция позволяет скроллить контейнер вправо либо влево на ширину контейнера
 *
 * @param sliderRef - `ref` контейнера, который нужно скроллить
 * @returns объект, с функциями скролла вправо и влево, а также реактивные переменные для определения крайней левой и крайней правой точки
 * @see https://pacific-agency.github.io/nuxt-utils/composables/use-scroll-slider.html
 */
export default function useScrollSlider(
  sliderRef: Ref<HTMLElement | undefined>,
): {
  isLeftCorner: ComputedRef<boolean>
  isRightCorner: ComputedRef<boolean>
  scrollLeft: () => void
  scrollRight: () => void
} {
  const sliderScrollLeft = ref(0)

  /** Проскроллен ли контейнер полностью влево */
  const isLeftCorner = computed(() => !sliderScrollLeft.value)

  /** Проскроллен ли контейнер полностью вправо */
  const isRightCorner = computed(() => {
    if (sliderRef.value) {
      return (
        sliderScrollLeft.value + sliderRef.value.offsetWidth ===
        sliderRef.value.scrollWidth
      )
    }
    return false
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
    isLeftCorner,
    isRightCorner,
    scrollLeft,
    scrollRight,
  }
}
