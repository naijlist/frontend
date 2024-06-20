<script setup lang="ts">
import HeroComponent from '../components/Home/HeroComponent.vue'
import CategoriesGrid from '../components/Category/CategoriesGrid.vue'
import AdsGrid from './../components/Ads/AdsGrid.vue'
</script>

<template>
  <main class="pt-[80px]">
    <HeroComponent />
    <CategoriesGrid />
    <AdsGrid :headerTitle="`Featured Ads`" />
    <AdsGrid :headerTitle="`Gadgets`" />
    <AdsGrid :headerTitle="`Properties`" />
  </main>
</template>
