<template>
  <div class="flex flex-col h-screen max-h-screen">
    <Navbar />
  <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components:{
    Navbar
  }
}
</script>

