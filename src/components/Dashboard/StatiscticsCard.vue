<script setup lang="ts">
import IconComponent from '../Icons/IconComponent.vue'
import { Badge } from '@/components/ui/badge'
defineProps<{ icon: string; title: string; count: number; duration?: string }>()
</script>

<template>
  <div class="flex flex-col gap-2 items-center text-textColor font-sora">
    <IconComponent :icon="icon" />
    <span class="font-normal text-[1rem]">{{ title }}</span>
    <span class="font-semibold text-[1.2rem]">{{ count }}</span>
    <Badge class="bg-[#FFB765] text-white" v-if="duration">{{ duration }}</Badge>
  </div>
</template>
