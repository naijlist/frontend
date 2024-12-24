<template>
  <button
    @click="goBack"
    class="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm text-sm font-medium text-gray-700 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class="w-4 h-4"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
    <span>Back</span>
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    // Navigate to the previous page in history
    router.back()
  } else {
    // Fallback to a default route if no history exists
    router.push('/')
  }
}
</script>
