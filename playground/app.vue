<script setup lang="ts">
import { usePhoneFormatter, usePriceFormatter } from "#imports"
</script>

<template>
  <div>
    <div>
      <h2>Компоненты</h2>
      <MapWidget widget-id="widget-id" />
    </div>
    <div>
      <h2>Composables</h2>
      <p>{{ usePriceFormatter(10000) }}</p>
      <p>{{ usePhoneFormatter("+79998887766") }}</p>
    </div>
  </div>
</template>
