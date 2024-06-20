<template>
  <div v-html="svgContent"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { icons } from './IconsItems'

const props = defineProps({
  icon: {
    type: String
  }
})

const svgContent = computed(() => {
  return icons[props.icon] || ''
})
</script>

<style scoped></style>
