<script setup lang="ts">
import { watch } from "vue"

const props = defineProps<{
  /** Локализация виджета */
  locale?: string
  /** `ID` виджета Яндекс.Карт */
  widgetId: string | undefined
}>()

/** Ссылка на карту */
const mapURL = new URL("https://yandex.ru/map-widget/v1/-/" + props.widgetId)

watch(
  [props],
  () => {
    // Если передана локализация
    if (props.locale) {
      // Выставляем параметр lang
      mapURL.searchParams.set("lang", props.locale)
    } else {
      mapURL.searchParams.delete("lang")
    }
  },
  {
    immediate: true,
  },
)

// Выставляем параметр z
mapURL.searchParams.append("z", "16")
</script>

<template>
  <iframe
    allowfullscreen="true"
    class="map-widget"
    height="100%"
    :src="mapURL.href"
    title="map"
    width="100%"
  ></iframe>
</template>

<style scoped>
.map-widget {
  border: none;
}
</style>
