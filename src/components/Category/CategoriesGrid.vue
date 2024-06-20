<template>
  <div class="flex flex-col w-11/12 py-5 container mt-10 mx-auto">
    <div class="flex justify-between items-center font-nunito text-textColor mb-3">
      <span class="text-xl">Categories</span>
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
    <div
      class="flex sm:justify-center items-center overflow-x-scroll hide-scroll-bar bg-white lg:h-[150px] rounded-md py-3 sm:py-0"
    >
      <div class="flex flex-nowrap">
        <div
          v-for="(category, index) in categories"
          :key="`${index + 1}: ${category?.title}`"
          class="inline-block sm:px-[15px] px-[10px]"
        >
          <CategoryItem :category="category" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CategoryItem from './CategoryItem.vue'

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
