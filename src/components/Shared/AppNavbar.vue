<template>
  <div
    class="bg-primary fixed z-10 flex w-screen items-center lg:justify-around font-nunito lg:px-0 px-10"
  >
    <div>
      <img src="@/assets/logo.svg" class="w-[120px] h-[80px]" alt="" />
    </div>
    <div class="lg:flex items-center gap-10 text-white hidden">
      <router-link to="/about">About</router-link>
      <router-link to="/offers">Offers</router-link>
      <router-link to="/support">Support</router-link>
    </div>

    <div class="lg:flex hidden items-center lg:gap-10 gap-5">
      <router-link class="flex gap-3 border border-white rounded-md px-3 py-2" to="/post-ads">
        <span>
          <Icon icon="plus" />
        </span>
        post Ads</router-link
      >
      <AccountButton :isLoggedIn="isLoggedIn" />
      <router-link class="flex gap-3" to="/post-ads" v-if="isLoggedIn">
        <span>
          <Icon icon="wishList" />
        </span>
        Wishlist
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '../Icons/IconComponent.vue'
import AccountButton from './AccountButton.vue'
import { useAuthStore } from '../../stores/auth.store'
import { computed } from 'vue'

const authStore = useAuthStore()
const isLoggedIn = computed(() => authStore.loggedIn)
</script>

<style scoped></style>
