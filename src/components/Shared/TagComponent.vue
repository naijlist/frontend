<script setup lang="ts">
import { cn } from '@/lib/utils'

defineProps<{
  color: string
  title: string
}>()
</script>
<template>
  <div class="flex items-center gap-3 font-plusJakarta font-semibold text-[1.2rem]">
    <div :class="cn('h-8 w-4 rounded-md', color)" />
    <span>{{ title }}</span>
  </div>
</template>
