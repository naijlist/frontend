<template>
  <div>
    <router-link :to="`/categories/${category.title}`">
      <div
        class="w-20 h-20 max-w-xs overflow-hidden sm:px-2 px-3 py-2 rounded-md hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
      >
        <img :src="category.icon" :alt="category.title" class="aspect-auto" />
      </div>
      <div class="w-20 mt-2">
        <p class="text-black text-center break-words sm:text-xs text-[10px]">
          {{ category.title }}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['category'])
</script>

<style scoped></style>
