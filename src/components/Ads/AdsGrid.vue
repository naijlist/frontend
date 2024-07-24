<template>
  <div class="mt-[50px] w-[90%] mx-auto">
    <div class="flex items-center justify-between my-6">
      <span class="font-nunito font-extrabold text-lg text-primary">{{ headerTitle }}</span>
      <div class="flex gap-2.5 items-center">
        <button>
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
        <button>
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
    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 sm:gap-14">
      <AdsCard v-for="(ads, index) in [1, 2, 3, 4, 5]" :key="ads" :adsData="index" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AdsCard from './AdsCard.vue'

defineProps(['headerTitle'])
</script>

<style scoped></style>
