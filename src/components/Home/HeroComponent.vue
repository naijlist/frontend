<template>
  <div
    class="bg-primary w-screen grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-white font-nunito sm:py-5 lg:py-10 lg:px-[100px] p-10"
  >
    <div class="w-full flex flex-col justify-between">
      <h1 class="w-full font-bold lg:text-[45px] md:text-[40px] text-[25px]">
        Google of Classified Ads
      </h1>
      <h4
        class="font-light lg:text-[14px] md:text-[12px] text-[10px] w-full lg:max-w-md max-w-sm mt-2"
      >
        Buy and sell anything, from used cars to mobile phones and computers. Or explore properties,
        job opportunities, and more. <br />
        Your one-stop shop for all your needs
      </h4>
      <form
        class="bg-white rounded-2xl text-textColor flex py-[2px] w-full font-josefineSans pl-0 mt-10"
      >
        <input
          type="text"
          class="focus:outline-none w-full rounded-2xl px-5 lg:text-base text-xs"
          placeholder="Search for products  e.g phones, cars"
        />
        <button
          class="bg-black text-white flex items-center gap-2 lg:py-[10px] py-[5px] lg:px-6 px-3 rounded-2xl text-xs"
        >
          Search
          <span>
            <Icon icon="search" />
          </span>
        </button>
      </form>
    </div>
    <div class="p-10 hidden lg:flex justify-end">
      <img src="@/assets/hero_img.svg" alt="" class="aspect-auto" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '../Icons/IconComponent.vue'
</script>

<style scoped></style>
