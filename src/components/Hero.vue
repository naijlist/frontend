<template>
        <div class="hero--container flex justify-center items-center bg-blend-multiply  bg-primary px-10 sm:px-0 py-10 sm:pt-10 mt-20  sm:mt-20 ">
      <!-- Search input -->
      <div class="w-full max-w-screen-sm">
        <h1 class="text text-center  text-white text-semibold text-2xl font-bold  sm:text-5xl pb-4">Google of classified ads</h1>
        <p class="text-white sm:text-base text-sm text-semibold text-center">Buy And Sell Everything From Used Cars To Mobile Phones And Computers, Or Search For Property, Jobs And More.</p>
        <div class="flex justify-center items-center py-5 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: white; user-select: auto;"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z" style="user-select: auto;"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z" style="user-select: auto;"></path></svg>
        <div class="bg-black  hover:bg-gray-800 transition ease-in duration-500 px-2 rounded-md">
          <select class="py-2   text-white bg-black  hover:bg-gray-800 duration-500 transition ease-in    focus:outline-none">
            <option>Abuja</option>
            <option>Kaduna</option>
            <option>Lagos</option>
        </select>
        </div>

        </div>
        <div class="flex">
          <input 
          v-model="query"
          class="flex-1 
          py-3 px-2
          rounded-tl-md rounded-bl-md 
          focus:outline-none"
          type="text" 
          placeholder="Search for anything in Nigeria">
          <svg xmlns="http://www.w3.org/2000/svg" @click="searchAds"  class="h-12 w-12 px-3 py-3 cursor-pointer flex items-center rounded-tr-md rounded-br-md  bg-black text-red hover:bg-gray-800 duration-500 transition ease-in " width="24" height="24" style="fill: white; user-select: auto;">
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" style="user-select: auto;"></path>
          </svg>
          
        </div>
      </div>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup () {
        const query = ref('')
        function searchAds() {

        }
        return {
            query,
            searchAds
        }
    }
}
</script>

<style scoped>
    .hero--container {
        height: 330px;
        background: #5534A5;
        background-image: url('../../public/bg001.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: left, right;
        
    }
     @media (max-width: 480px) {
            .hero--container {
                background-image: none;
            }
        }
</style>