<template>
  <main class="bg-bgColor">
    <AppNavber />
    <div>
      <router-view />
    </div>
    <AppFooter />
  </main>
</template>

<script setup lang="ts">
import AppNavber from '../components/Shared/AppNavber.vue'
import AppFooter from '../components/Shared/AppFooter.vue'
</script>

<style scoped></style>
