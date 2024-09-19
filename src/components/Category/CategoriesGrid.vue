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
    >
      <CarouselContent>
        <CarouselItem
          v-for="(category, index) in categories"
          :key="index"
          class="md:basis-[100px] basis-[80px] lg:basis-[150px] py-2"
        >
          <router-link to="/">
            <Card class="hover:shadow-xl border-none p-0 cursor-pointer">
              <CardContent class="flex aspect-square items-center justify-center p-0">
                <div class="flex flex-col justify-center items-center gap-3">
                  <img
                    :src="category.icon"
                    :alt="category.title"
                    class="aspect-square lg:w-[60px] w-[40px]"
                  />
                  <span class="lg:text-xs text-[9px]">{{ category.title }}</span>
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
import CategoryItem from './CategoryItem.vue'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
const categories = [
  {
    title: 'phones',
    icon: 'https://res.cloudinary.com/dfeiu916l/image/upload/v1716824669/phone_kutnkd.png'
  },
  {
    title: 'laptops',
    icon: 'https://res.cloudinary.com/dfeiu916l/image/upload/v1716824671/laptop_fadurm.png'
  },
  {
    title: 'gadgets',
    icon: 'https://res.cloudinary.com/dfeiu916l/image/upload/v1716824673/gadget_wdib7t.png'
  },
  {
    title: 'properties',
    icon: 'https://res.cloudinary.com/dfeiu916l/image/upload/v1716824669/house_ecsqzs.png'
  },
  {
    title: 'fashion',
    icon: 'https://res.cloudinary.com/dfeiu916l/image/upload/v1716824673/fashion-design_iysmwy.png'
  },
  {
    title: 'funiture',
    icon: 'https://res.cloudinary.com/dfeiu916l/image/upload/v1716824672/furnitures_ho16la.png'
  },
  {
    title: 'pets',
    icon: 'https://res.cloudinary.com/dfeiu916l/image/upload/v1716824671/pets_xtz7i9.png'
  },
  {
    title: 'cars',
    icon: 'https://res.cloudinary.com/dfeiu916l/image/upload/v1716824672/car_kksnkj.png'
  },
  {
    title: 'bike',
    icon: 'https://res.cloudinary.com/dfeiu916l/image/upload/v1716824674/bike_z2hptm.png'
  },
  {
    title: 'job',
    icon: 'https://res.cloudinary.com/dfeiu916l/image/upload/v1716824671/job-seeker_p00xbj.png'
  },
  {
    title: 'jewerries',
    icon: 'https://res.cloudinary.com/dfeiu916l/image/upload/v1716824670/jewellery_c47pub.png'
  },
  {
    title: 'Health beauty ',
    icon: 'https://res.cloudinary.com/dfeiu916l/image/upload/v1716824669/shampoo_cljkdi.png'
  },
  {
    title: 'Sport outdoor',
    icon: 'https://res.cloudinary.com/dfeiu916l/image/upload/v1716824670/sport_rqxnhu.png'
  },
  {
    title: 'Food',
    icon: 'https://res.cloudinary.com/dfeiu916l/image/upload/v1716824671/wheat-sack_fn6mqm.png'
  }
]
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
