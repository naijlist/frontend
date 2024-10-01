<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.store'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

import Icon from '../Icons/IconComponent.vue'

const { currentRoute } = useRouter()
console.log(currentRoute.value.path)
const dashboardRoutes = [
  { link: '/dashboard', title: 'Overview', icon: 'dashboard' },
  { link: '/my-ads', title: 'My Ads', icon: 'ads' },
  { link: '/messages', title: 'Messages', icon: 'message' },
  { link: '/wallet', title: 'Wallet', icon: 'wallet' }
]

const authStore = useAuthStore()
const user = computed(() => authStore.user)
</script>
<template>
  <div
    class="bg-white h-full overflow-hidden w-[250px] text-textColor shadow-lg flex flex-col px-6"
  >
    <div class="flex flex-col justify-center items-center mt-10">
      <img
        src="@/assets/sals.jpeg"
        alt="User picture"
        class="rounded-full w-[120px] max-w-[120px] aspect-square object-cover"
      />
      <h2 class="font-sora text-[#FFB765] text-[2rem]">My Shop</h2>
      <h3 class="font-inter font-light text-[1rem] text-[#727272]">@{{ user?.name }}</h3>
    </div>

    <div class="my-14">
      <ul class="flex flex-col justify-center gap-6">
        <li v-for="route in dashboardRoutes" :key="route.title">
          <router-link
            :to="route.link"
            :class="`flex items-center gap-4 hover:bg-[#DADADA] ${currentRoute.path == route.link ? 'bg-[#DADADA]' : ''} text-[#575757] rounded-lg px-3 py-2 cursor-pointer`"
          >
            <Icon :icon="route.icon" /> {{ route.title }}
          </router-link>
        </li>
      </ul>
    </div>

    <div class="absolute bottom-0">
      <img src="@/assets/sidebar_footer_img.svg" alt="" />
      <span class="text-xs text-center">2024 copyright. All rights Reserved</span>
    </div>
  </div>
</template>

<style scoped></style>
