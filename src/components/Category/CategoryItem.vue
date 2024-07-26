<template>
  <div>
    <router-link :to="`/categories/${category.title}`">
      <div
        class="w-20 h-20 max-w-xs overflow-hidden sm:px-2 px-3 py-2 rounded-md hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
      >
        <img :src="category.icon" :alt="category.title" class="aspect-auto" />
      </div>
      <div class="w-20 mt-2">
        <p class="text-black text-center break-words sm:text-xs text-[10px]">
          {{ category.title }}
        </p>
      </div>
      <CarouselContent>
        <CarouselItem v-for="(_, index) in 10" :key="index" class="md:basis-1/2 lg:basis-1/3">
          <div class="p-1">
            <Card>
              <CardContent class="flex aspect-square items-center justify-center p-6">
                <span class="text-3xl font-semibold">{{ index + 1 }}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { CarouselContent, CarouselItem } from '@/components/ui/carousel'
</script>

<style scoped></style>
