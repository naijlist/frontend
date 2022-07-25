<template>
    <div class="items-center justify-center w-11/12  container mx-auto">
        <h1 class="px-1 pt-10 pb-5 text-2xl text-base sm:text-3xl">{{title}}</h1>
        <!-- Grid start-->
        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-14">
            <!--Card-->
            <div v-for="(i, index) in 8" :key="index" class="card focus:bg-gray-100 hover:bg-gray-100 duration-500 transition ease-in  cursor-pointer ">
                
                    <div class="pt-0 px-0 rounded-md flex flex-col">
                    <!--Image start-->
                    <router-link :to="`/ads-details/${index}`">
                        <div class="rounded-md overflow-hidden">
                            <img src="../assets/imgs/canon.jpg" alt="">
                        </div>
                    </router-link>
                    <!--Image end-->
                    <div class="flex justify-between -mt-4 px-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 p-1 rounded-full bg-white text-red hover:bg-gray-300 duration-500 transition ease-in " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 p-1 bg-white rounded-full hover:bg-gray-300 duration-500 transition ease-in " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                    </div>
                   <div class="flex justify-between items-center">
                    <router-link :to="`/ads-details/${index}`">
                       <div>
                            <h5 class="sm:text-sm text-xs text-semibold pl-4 -mt-3  py-4 ">Canon Camera 50px</h5>
                            <h5 class="sm:text-sm text-xs text-semibold pl-4 -mt-4  sm:-mt-3 sm:pr-4 py-1"><b>NGN 50000</b></h5>
                            <span class="flex pl-3 sm:pr-4 py-2 ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                </svg>
                                <h5 class="sm:text-sm text-xs text-slate-400 text-semibold "> Abuja</h5>
                            </span>
                        </div>
                    </router-link>
                   <!-- <router-link to="/"> <button>View</button> </router-link> -->
                   </div>
                    <!-- <p class=" text-slate-500 text-sm mt-5 px-4 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> -->
                    
                </div>
            </div>
            <!--Card end-->
        </div>
        <!-- Grid end-->
    </div>
</template>

<script>
export default {
    props: ['title'],
    setup (props) {
        

        return {
            title: props.title,
        }
    },

    mounted() {
        console.log(this.title)
    },
}
</script>

<style scoped>

</style>