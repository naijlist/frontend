<template>
  <div class="pt-[100px] px-16">
    <div class="flex items-center gap-2 font-plusJakarta text-textColor">
      <span class="bg-white rounded-md px-2 py-1">All Categories</span> /
      <span class="bg-white rounded-md px-2 py-1">Gadgets</span> /
      <span class="bg-white rounded-md px-2 py-1">Laptop</span> /
      <span class="text-black bg-white rounded-md px-2 py-1">Mac book pro</span>
    </div>

    <div class="flex justify-center gap-10 w-full px-[50px] mt-10">
      <div class="w-[68%] bg-white rounded-md px-10 py-5">
        <div class="bg-[#DADADA] rounded-md">
          <Carousel>
            <Slide v-for="slide in 5" :key="slide">
              <!-- <div
                class="h-[200px] w-[80%] bg-sc2 text-txtColor rounded-lg flex items-center justify-center text-2xl"
              ></div> -->
              <img
                src="@/assets/laptop-detail1.svg"
                class="aspect-square object-cover w-[70%]"
                alt=""
              />
            </Slide>

            <template #addons>
              <div class="">
                <Navigation />
                <Pagination />
              </div>
            </template>
          </Carousel>
        </div>
        <div class="flex gap-5 mt-5 justify-center items-center">
          <div class="bg-[#DADADA] p-5 rounded-md">
            <img
              src="@/assets/laptop-detail1.svg"
              alt="Laptop"
              class="aspect-square object-cover w-[100px]"
            />
          </div>
          <div class="bg-[#DADADA] p-5 rounded-md">
            <img
              src="@/assets/laptop-detail3.svg"
              alt="Laptop"
              class="aspect-square object-cover w-[100px]"
            />
          </div>
          <div class="bg-[#DADADA] p-5 rounded-md">
            <img
              src="@/assets/laptop-detail4.svg"
              alt="Laptop"
              class="aspect-square object-cover w-[100px]"
            />
          </div>
          <div class="bg-[#DADADA] p-5 rounded-md">
            <img
              src="@/assets/laptop-detail5.svg"
              alt="Laptop"
              class="aspect-square object-cover w-[100px]"
            />
          </div>
        </div>
        <div class="mt-10">
          <h2 class="font-plusJakarta font-bold text-3xl mb-5">Specification</h2>
          <Divider />
          <div class="flex justify-between font-plusJakarta font-semibold mt-5 text-base">
            <div class="flex gap-3">
              <Icon icon="category" />
              <p class="">CATEGORY: <span>Gadgets</span></p>
            </div>
            <div class="flex gap-3">
              <Icon icon="tag" />
              <p class="">BRAND: <span>Apple</span></p>
            </div>
            <div class="flex gap-3">
              <Icon icon="condition" />
              <p class="">CONDITION: <span>Brand New</span></p>
            </div>
          </div>
          <div class="flex flex-col font-plusJakarta text-[16px] my-10">
            <div class="flex justify-between">
              <div class="flex">
                <span>MODEL:</span>
                <span class="text-textColor">2023 M3 Pro 14-inch</span>
              </div>
              <div class="flex">
                <span>TYPE:</span>
                <span class="text-textColor">Laptop</span>
              </div>
              <div class="flex">
                <span>SUBTYPE:</span>
                <span class="text-textColor">Ultrabook</span>
              </div>
            </div>

            <div class="flex justify-between">
              <div class="flex">
                <span>MODEL:</span>
                <span class="text-textColor">2023 M3 Pro 14-inch</span>
              </div>
              <div class="flex">
                <span>TYPE:</span>
                <span class="text-textColor">Laptop</span>
              </div>
              <div class="flex">
                <span>SUBTYPE:</span>
                <span class="text-textColor">Ultrabook</span>
              </div>
            </div>

            <div class="flex justify-between">
              <div class="flex">
                <span>MODEL:</span>
                <span class="text-textColor">2023 M3 Pro 14-inch</span>
              </div>
              <div class="flex">
                <span>TYPE:</span>
                <span class="text-textColor">Laptop</span>
              </div>
              <div class="flex">
                <span>SUBTYPE:</span>
                <span class="text-textColor">Ultrabook</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white w-[32%] rounded-md px-5 py-7 flex flex-col gap-2">
        <div class="flex justify-between items-center">
          <Icon icon="promoteBadge" class="h-10" />
          <Icon icon="fav" />
        </div>
        <h2 class="font-nunito font-medium text-5xl">MacBook Pro</h2>
        <div class="font-plusJakarta">
          <h3 class="text-sm font-medium mb-1">Description</h3>
          <p class="text-xs text-textColor">
            The MacBook Pro redefines performance and portability, equipped with the powerful M1
            chip for lightning-fast processing. Featuring a stunning Retina display, long battery
            life, and robust security features.
          </p>
        </div>
        <div class="flex justify-evenly items-center font-light text-xs text-textColor my-6">
          <span class="flex items-center gap-1"><Icon icon="clock" /> Posted 1 hour ago</span>
          <span class="flex items-center gap-1"><Icon icon="location" /> Gwarinpa, Abuja.</span>
          <span class="flex items-center gap-1"><Icon icon="eyeOpen" />80 views</span>
        </div>
        <Divider />
        <div class="flex items-center justify-between mt-5 mb-3">
          <div class="flex gap-4">
            <p class="text-3xl text-sc1 font-medium">
              &#8358; <span class="text-black font-josefineSans ml-2 font-medium">70, 000</span>
            </p>
          </div>

          <span class="bg-ac px-2 py-1 rounded-md text-xs font-plusJakarta">Negotiable</span>
        </div>
        <Divider />
        <div class="flex items-center gap-4 mt-5">
          <img
            src="@/assets/sals.jpeg"
            alt="User picture"
            class="rounded-full aspect-square w-[70px] object-cover"
          />
          <div class="flex flex-col gap-1 font-plusJakarta">
            <span class="text-base font-semibold">Salscodes</span>
            <div class="flex gap-2 text-sm font-medium">
              <Icon icon="starYellow" />
              <p>4.8 <span class="text-textColor">(12)</span></p>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between font-plusJakarta text-xs font-medium mt-5">
          <button class="border border-[#DADADA] flex items-center gap-2 rounded-md px-7 py-[6px]">
            <Icon icon="chat" /> Chat Seller
          </button>

          <button class="bg-black text-white flex px-7 py-[6px] rounded-md items-center gap-2">
            <Icon icon="phone" />Call Seller
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import Icon from '../../../../components/Icons/IconComponent.vue'
import Divider from '../../../../components/Shared/DividerComponent.vue'
</script>

<style scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
