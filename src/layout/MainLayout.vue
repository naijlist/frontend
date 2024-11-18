<template>
  <main class="bg-bgColor w-full max-w-full overflow-hidden">
    <AppNavbar />
    <div class="fixed z-[1000] sm:hidden block">
      <BottomNavigation />
    </div>
    <div class="w-full max-w-full pt-[40px]">
      <router-view />
    </div>
    <!-- <AppFooter /> -->
  </main>
</template>

<script setup lang="ts">
import AppNavbar from '../components/Shared/AppNavbar.vue'
import BottomNavigation from '@/components/Shared/BottomNavigation.vue'
// import AppFooter from '../components/Shared/AppFooter.vue'
</script>

<style scoped></style>
