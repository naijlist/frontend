<script setup lang="ts">
import HeroComponent from '../components/Home/HeroComponent.vue'
import CategoriesGrid from '../components/Category/CategoriesGrid.vue'
import AdsGrid from './../components/Ads/AdsGrid.vue'
</script>

<template>
  <main class="pt-[80px] w-screen max-screen max-w-screen overflow-hidden">
    <HeroComponent />
    <CategoriesGrid />
    <AdsGrid :headerTitle="`Featured Ads`" :identity="`one`" />
    <AdsGrid :headerTitle="`Gadgets`" :identity="`two`" />
    <AdsGrid :headerTitle="`Properties`" :identity="`three`" />
  </main>
</template>
