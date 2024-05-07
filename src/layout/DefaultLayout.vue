<template>
  <div>
    <AppNavber />
    <router-view />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppNavber from '../components/Shared/AppNavber.vue'
import AppFooter from '../components/Shared/AppFooter.vue'
</script>

<style scoped></style>
