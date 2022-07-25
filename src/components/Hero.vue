<template>
        <div class="hero--container flex justify-center items-center bg-blend-multiply  bg-primary px-10 sm:px-0 py-10 sm:pt-10 mt-20  sm:mt-20 ">
      <!-- Search input -->
      <div class="w-full max-w-screen-sm">
        <h1 class="text text-center  text-white text-semibold text-2xl font-bold  sm:text-5xl pb-4">Google of classified ads</h1>
        <p class="text-white sm:text-base text-sm text-semibold text-center">Buy And Sell Everything From Used Cars To Mobile Phones And Computers, Or Search For Property, Jobs And More.</p>
        <div class="flex justify-center items-center py-5 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        </svg>
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
          <i
          @click="searchAds" 
          class="
          cursor-pointer
          bg-black
          hover:bg-gray-800
          transition ease-in
          duration-500
          text-white
          px-4
          flex
          items-center
          rounded-tr-md
          rounded-br-md
          fa fa-search"></i>
          
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