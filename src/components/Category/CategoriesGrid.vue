<template>
  <div class="mt-10">
    <div
      class="flex justify-between items-center font-nunito text-textColor mb-3 w-full max-w-[95%] md:max-w-[85%] mx-auto"
    >
      <span class="lg:text-xl">Categories</span>
      <button class="flex items-center">
        See all
        <span
          ><svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.75004 5L11.25 9.5L6.75 14"
              stroke="#575757"
              stroke-width="2"
              stroke-miterlimit="16"
            />
          </svg>
        </span>
      </button>
    </div>
    <Carousel
      class="relative w-full max-w-[95%] md:max-w-[85%] mx-auto mt-2 bg-white rounded-md"
      :opts="{ align: 'start' }"
      v-if="!isPending"
    >
      <CarouselContent>
        <CarouselItem
          v-for="(category, index) in categories?.data?.categories"
          :key="index"
          class="md:basis-[100px] basis-[80px] lg:basis-[150px] py-2"
        >
          <router-link :to="`/category-deteils/${category.name}`">
            <Card class="hover:shadow-xl border-none p-0 cursor-pointer">
              <CardContent class="flex aspect-square items-center justify-center p-0">
                <div class="flex flex-col justify-center items-center gap-3">
                  <img
                    :src="category.imageUrl"
                    :alt="category.name"
                    class="aspect-square lg:w-[60px] w-[40px]"
                  />
                  <span class="lg:text-xs text-[9px]">{{ category.name }}</span>
                </div>
              </CardContent>
            </Card>
          </router-link>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { useGET } from '@/hooks/useGET'

const { data: categories, isPending } = useGET({
  url: 'category',
  queryKey: ['GET_ALL_CATEGORIES_IN_CATEGORIES_GRID']
})
console.log(categories, '<<<<<<<')
</script>

<style scoped>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>
