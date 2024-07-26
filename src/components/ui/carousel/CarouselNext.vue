<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { useCarousel } from './useCarousel'
import type { WithClassAsProps } from './interface'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollNext, scrollNext } = useCarousel()
</script>

<template>
  <Button
    :disabled="!canScrollNext"
    :class="
      cn(
        'touch-manipulation absolute h-8 w-8 rounded-full p-0',
        orientation === 'horizontal'
          ? '-right-12 top-1/2 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        props.class
      )
    "
    variant="outline"
    @click="scrollNext"
  >
    <slot>
      <svg
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.899902" width="32" height="32" rx="16" fill="#DADADA" />
        <path
          d="M14.3999 11L19.3999 16L14.3999 21"
          stroke="#575757"
          stroke-width="2"
          stroke-miterlimit="16"
        />
      </svg>
      <span class="sr-only">Next Slide</span>
    </slot>
  </Button>
</template>
