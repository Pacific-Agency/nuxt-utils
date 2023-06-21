<script setup lang="ts">
import { usePhoneFormatter, usePriceFormatter } from "#imports"

import { UtilsInput } from "#components"
</script>

<template>
  <div>
    <div>
      <h2>Компоненты</h2>
      <UtilsMapWidget widget-id="widget-id" />
    </div>
    <div>
      <h2>Composables</h2>
      <p>{{ usePriceFormatter(10000) }}</p>
      <p>{{ usePhoneFormatter("+79998887766") }}</p>
    </div>
    <div class="inputs-container">
      <div>
        <p>Инпут с маской</p>
        <UtilsInput id="with-maska" data-maska="###-###" />
      </div>
      <div>
        <p>Инпут без маски</p>
        <UtilsInput id="without-maska" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.inputs-container {
  display: flex;
  row-gap: 1.5rem;
  flex-direction: column;
}
</style>
