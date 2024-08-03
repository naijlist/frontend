<template>
  <main class="bg-bgColor w-screen max-w-screen overflow-hidden">
    <AppNavber />
    <div class="w-[100%] max-w-[100% overflow-hidden]">
      <router-view />
    </div>
    <!-- <AppFooter /> -->
  </main>
</template>

<script setup lang="ts">
import AppNavber from '../components/Shared/AppNavber.vue'
import AppFooter from '../components/Shared/AppFooter.vue'
</script>

<style scoped></style>
