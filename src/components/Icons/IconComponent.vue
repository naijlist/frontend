<template>
  <div v-html="svgContent"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { icons } from './IconsItems'

const props = defineProps({
  icon: String
})
const icon: any = props.icon
const svgContent = computed(() => {
  return icons[icon] || ''
})
</script>

<style scoped></style>
