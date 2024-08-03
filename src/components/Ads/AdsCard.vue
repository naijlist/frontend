<template>
  <div class="lg:w-[270px] w-[120px] min-w-[170px] bg-opacity-[100%] rounded-xl mb-0">
    <router-link :to="`/preview/${adsData}`" class="flex flex-col gap-0">
      <img src="@/assets/ads-sample.svg" class="aspect-square object-cover w-full" alt="" />
      <div class="flex justify-end">
        <span class="-mt-5 pr-5">
          <svg
            width="39"
            height="38"
            viewBox="0 0 39 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.179932" width="38" height="38" rx="18" fill="white" />
            <path
              opacity="0.53"
              d="M19.1799 30.25C17.5034 30.25 16.5371 29.5348 14.6043 28.1043C4.45708 20.5936 5.45252 11.6912 9.85173 8.99269C13.2038 6.93654 16.1295 7.76514 17.8869 9.08501C18.6077 9.6262 18.9679 9.89679 19.1799 9.89679C19.3919 9.89679 19.7522 9.6262 20.4729 9.08501C22.2304 7.76514 25.1561 6.93654 28.5082 8.99269C30.6564 10.3105 31.9931 13.1078 31.6167 16.5"
              stroke="#575757"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M21.6799 25.25H31.6799M26.6799 20.25V30.25"
              stroke="#575757"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
      <div class="bg-white rounded-b-xl mt-0 px-5 py-3 flex flex-col gap-3">
        <div>
          <span
            class="font-josefineSans bg-white shadow-lg rounded-lg lg:text-xs text-[10px] text-textColor text-center px-2 py-[5px]"
            >Laptop</span
          >
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-nunito lg:text-[18px] text-[14px]">MacBook Pro</p>
          <p class="font-joesFinSans lg:text-xs text-[10px] font-semibold text-sc1">N 3,000.00</p>
          <p
            class="font-nunito lg:text-sm font-light text-textColor flex items-center gap-1 text-[10px]"
          >
            <span><img src="@/assets/location.svg" alt="" /></span> Lokogoma Abuja
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['adsData'])
</script>

<style scoped></style>
