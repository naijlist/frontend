<template>
    
<div class="flex">
    <div v-if="showDrawer" class="fixed w-52 mr-10 py-20 h-screen" >
   <div class="overflow-y-auto h-screen py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <ul class="space-y-2 flex flex-col">
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span class="ml-3">My shop</span>
            </a>
         </li>
         <li>
           <router-link to="/my-ads" >
            <a
               class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                  </path>
               </svg>
               <span class="flex-1 ml-3 whitespace-nowrap">My adverts</span>
               <!-- <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> -->
            </a>
           </router-link>
         </li>
         <li class="mb-auto">
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
               <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
            </a>
         </li>
         <!-- <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Products</span>
            </a>
         </li> -->
      </ul>
   </div>
</div>
<div class=" py-28 z-10 px-72 grid lg:grid-cols-3 gap-16 text-lg leading-10">
   <div class="hover:scale-105 ease-out transition-300 cursor-pointer bg-gradient-to-r from-secondary to-dashboardPrimary w-52 h-40 rounded-md text-white px-5 py-5">
      <div class="flex justify-start">
         <div class="bg-white w-10 h-10 rounded-lg">
            <img src="../assets/check.png" class="w-10 h-10" />
         </div>
      </div>
      Active ads
         
         <div class="flex justify-end">
            <p class="text-4xl">10</p>
         </div>
   </div>
   <div class="bg-gradient-to-r from-dashboardPreNursery to-primary max-w-52 w-52 h-40 rounded-md text-white px-5 py-5">
      <div class="flex justify-start">
         <div class="bg-white w-9 h-9 rounded-sm flex justify-center items-center">
            <img src="../assets/hourglass.png" class="w-5 h-5" />
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
            <img src="../assets/remove.png" class="w-10 h-10" />
         </div>
      </div>
      Declined ads
      
      <div class="flex justify-end">
         <p class="text-4xl">3</p>
      </div>
   </div>
</div>
</div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup () {
        const showDrawer = ref(true )

        return {showDrawer}
    }
}
</script>

<style lang="scss" scoped>

</style>