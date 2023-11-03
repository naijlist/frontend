<template>
        <div
          class="hero--container flex justify-center items-center bg-blend-multiply  bg-primary px-10 sm:px-0 py-10 sm:pt-10 mt-20  sm:mt-20 ">
          <!-- Search input -->
          <div class="w-full max-w-screen-sm">
            <h1 class="text text-center  text-white text-semibold text-3xl font-semibold  sm:text-5xl pb-4">Google of classified ads
            </h1>
            <p class="text-white sm:text-base text-sm text-semibold text-center">Buy And Sell Everything From Used Cars To
              Mobile Phones And Computers, Or Search For Property, Jobs And More.</p>
            <div class="flex gap-1 justify-center items-center py-5 ">
              <svg width="25" height="24" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.50008 7.99992C8.86675 7.99992 9.18075 7.86925 9.44208 7.60792C9.70297 7.34703 9.83341 7.03325 9.83341 6.66658C9.83341 6.29992 9.70297 5.98592 9.44208 5.72459C9.18075 5.4637 8.86675 5.33325 8.50008 5.33325C8.13341 5.33325 7.81964 5.4637 7.55875 5.72459C7.29741 5.98592 7.16675 6.29992 7.16675 6.66658C7.16675 7.03325 7.29741 7.34703 7.55875 7.60792C7.81964 7.86925 8.13341 7.99992 8.50008 7.99992ZM8.50008 12.8999C9.85563 11.6555 10.8612 10.5248 11.5167 9.50792C12.1723 8.49147 12.5001 7.58881 12.5001 6.79992C12.5001 5.58881 12.1139 4.59703 11.3414 3.82459C10.5694 3.05259 9.6223 2.66659 8.50008 2.66659C7.37786 2.66659 6.43052 3.05259 5.65808 3.82459C4.88608 4.59703 4.50008 5.58881 4.50008 6.79992C4.50008 7.58881 4.82786 8.49147 5.48341 9.50792C6.13897 10.5248 7.14452 11.6555 8.50008 12.8999ZM8.50008 14.6666C6.71119 13.1444 5.37519 11.7304 4.49208 10.4246C3.60853 9.11925 3.16675 7.91103 3.16675 6.79992C3.16675 5.13325 3.70297 3.80547 4.77541 2.81659C5.84741 1.8277 7.08897 1.33325 8.50008 1.33325C9.91119 1.33325 11.1527 1.8277 12.2247 2.81659C13.2972 3.80547 13.8334 5.13325 13.8334 6.79992C13.8334 7.91103 13.3919 9.11925 12.5087 10.4246C11.6252 11.7304 10.289 13.1444 8.50008 14.6666Z" fill="white"/>
                  </svg>
              <div class="bg-black hover:bg-gray-800 transition ease-in duration-500 px-2 rounded-md">
                <select
                  class="py-2 text-white text-sm bg-black  hover:bg-gray-800 duration-500 transition ease-in focus:outline-none">
                  <option>Abuja</option>
                  <option>Kaduna</option>
                  <option>Lagos</option>
                </select>
              </div>
        
            </div>
            <div>
              <form class="flex" @submit="searchAds">
                <input 
                v-model="query" 
                class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none text-textColor" 
                type="text" 
                placeholder="Search for anything in Nigeria">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12 px-3 py-3 cursor-pointer flex items-center rounded-tr-md rounded-br-md  bg-black text-red hover:bg-gray-800 duration-500 transition ease-in "
                    width="24" height="24" style="fill: white; user-select: auto;">
                    <path
                      d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
                      style="user-select: auto;"></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
</template>

<script setup>
  const query = ref()
  const router = useRouter()
  const searchAds = (e) => {
    e.preventDefault();
    console.log(query)
    router.push({path: `/search/${query.value}`})
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