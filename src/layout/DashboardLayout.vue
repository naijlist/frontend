<template>
  <main class="bg-bgColor w-full max-w-full h-full overflow-hidden no-scrollbar">
    <AppNavbar />

    <div class="w-full max-w-full pt-[80px] h-full overflow-hidden flex px-5 lg:px-0">
      <!-- Sidebar Section -->
      <div class="sticky top-0 h-screen hidden lg:block">
        <SidebarComponent />
      </div>

      <!-- Main Content Section -->
      <div class="flex-1 overflow-y-scroll h-screen no-scrollbar mt-10">
        <router-view />
      </div>
    </div>
    <!-- <AppFooter /> -->
  </main>
</template>

<script setup lang="ts">
import AppNavbar from '../components/Shared/AppNavbar.vue'
import SidebarComponent from '../components/Shared/SidebarComponent.vue'
// import AppFooter from '../components/Shared/AppFooter.vue'
</script>

<style scoped></style>
