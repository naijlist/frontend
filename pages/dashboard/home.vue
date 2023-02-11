<template>
    
<NuxtLayout name="dashboard">
   
      <div class=" py-28 z-10 lg:px-72 px-40 grid grid-cols-2 lg:grid-cols-3 gap-16  lg:text-lg text-md leading-10">
         <div
            class="hover:scale-105 ease-out transition-300 cursor-pointer bg-gradient-to-r from-secondary to-dashboardPrimary w-52 h-40 rounded-md text-white px-5 py-5">
            <div class="flex justify-start">
               <div class="bg-white w-10 h-10 rounded-lg">
                  <img src="/check.png" class="w-10 h-10" />
               </div>
            </div>
            Active ads
   
            <div class="flex justify-end">
               <p class="text-4xl">10</p>
            </div>
         </div>
         <div
            class="bg-gradient-to-r from-dashboardPreNursery to-primary max-w-52 w-52 h-40 rounded-md text-white px-5 py-5">
            <div class="flex justify-start">
               <div class="bg-white w-9 h-9 rounded-sm flex justify-center items-center">
                  <img src="/hourglass.png" class="w-5 h-5" />
               </div>
            </div>
            Reviewing ads
   
            <div class="flex justify-end">
               <p class="text-4xl">6</p>
            </div>
         </div>
         <div class="bg-gradient-to-r from-secondary to-primary max-w-52 w-52 h-40 rounded-md  text-white px-5 py-5">
            <div class="flex justify-start">
               <div class="bg-white w-10 h-10 rounded-lg">
                  <img src="/remove.png" class="w-10 h-10" />
               </div>
            </div>
            Declined ads
   
            <div class="flex justify-end">
               <p class="text-4xl">3</p>
            </div>
         </div>
      </div>
</NuxtLayout>
</template>

<script>
import {ref} from 'vue'
export default {
    setup () {
      const layout = 'dashboard'
        const showDrawer = ref(true )

      return { showDrawer, layout }
    }
}
</script>

<style lang="scss" scoped>

</style>