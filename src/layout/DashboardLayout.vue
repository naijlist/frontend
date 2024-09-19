<template>
  <main class="bg-bgColor w-full max-w-full h-full overflow-hidden no-scrollbar">
    <AppNavber />

    <div class="w-full max-w-full pt-[80px] h-full overflow-hidden flex gap-5 px-5 lg:px-0">
      <!-- Sidebar Section -->
      <div class="sticky top-0 h-screen hidden lg:block">
        <SideBar />
      </div>

      <!-- Main Content Section -->
      <div class="flex-1 overflow-y-scroll h-screen no-scrollbar">
        <router-view />
      </div>
    </div>
    <!-- <AppFooter /> -->
  </main>
</template>

<script setup lang="ts">
import AppNavber from '../components/Shared/AppNavber.vue'
import SideBar from '../components/Shared/Sidebar.vue'
// import AppFooter from '../components/Shared/AppFooter.vue'
</script>

<style scoped></style>
