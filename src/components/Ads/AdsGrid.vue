<template>
  <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-14 w-[90%] mx-auto">
    <AdsCard v-for="ads in [1, 2, 3, 4, 5]" :key="ads" />
  </div>
</template>

<script setup lang="ts">
import AdsCard from './AdsCard.vue'
</script>

<style scoped></style>
