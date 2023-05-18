<script setup lang="ts">
defineProps<{
  /** `ID` виджета Яндекс.Карт */
  widgetId: string | undefined
}>()
</script>

<template>
  <iframe
    allowfullscreen="true"
    class="map-widget"
    height="100%"
    :src="`https://yandex.ru/map-widget/v1/-/${widgetId}`"
    width="100%"
  ></iframe>
</template>

<style scoped>
.map-widget {
  border: none;
}
</style>
