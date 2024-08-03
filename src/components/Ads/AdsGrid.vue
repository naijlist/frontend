<template>
  <div class="my-16 w-screen max-w-screen">
    <div class="mt-[50px] mb-5 w-[94%] mx-auto flex justify-between items-center">
      <span class="font-nunito font-extrabold text-lg text-primary">{{ headerTitle }}</span>
      <div class="flex gap-2.5 items-center">
        <button @click="triggerPrev">
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="32"
              height="32"
              rx="16"
              transform="matrix(-1 0 0 1 32.8999 0)"
              fill="#DADADA"
            />
            <path
              d="M19.3999 11L14.3999 16L19.3999 21"
              stroke="#575757"
              stroke-width="2"
              stroke-miterlimit="16"
            />
          </svg>
        </button>
        <button @click="triggerNext">
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
        </button>
      </div>
    </div>
    <Carousel class="relative w-[95%] mx-auto" :opts="{ align: 'start' }">
      <CarouselContent>
        <CarouselItem
          v-for="(_, index) in 10"
          :key="index"
          class="md:basis-1/4 lg:basis-1/5 basis-1/2 aspect-square"
        >
          <div class="p-1">
            <AdsCard />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious :id="`prev-${props.identity}`" class="hidden" />
      <CarouselNext :id="`next-${props.identity}`" class="hidden" />
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import AdsCard from './AdsCard.vue'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { identity } from '@vueuse/core'

const props = defineProps(['headerTitle', 'identity'])
function triggerPrev() {
  document.getElementById(`prev-${props.identity}`)?.click()
  // console.log(props.identity)
}

function triggerNext() {
  document.getElementById(`next-${props.identity}`)?.click()
}
</script>

<style scoped></style>
