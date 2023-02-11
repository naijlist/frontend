<template>
    <div class="items-center justify-center w-11/12  container mx-auto">
        <h1 class="px-1 pt-10 pb-5 lg:text-2xl text-base sm:text-3xl">{{title}}</h1>
        <!-- Grid start-->
        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-14">
            <!--Card-->
            <div v-for="(i, index) in 8" :key="index" class="card focus:bg-gray-100 hover:bg-gray-100 duration-500 transition ease-in  cursor-pointer ">
                
                    <div class="pt-0 px-0 rounded-md flex flex-col">
                    <!--Image start-->
                    <router-link :to="`/ads-details/${index}`">
                        <div class="rounded-md overflow-hidden">
                            <img src="/imgs/canon.jpg" alt="">
                        </div>
                    </router-link>
                    <!--Image end-->
                    <div class="flex justify-between -mt-4 px-2 ">
                       
                       
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 p-1 rounded-full bg-white text-red hover:bg-gray-300 duration-500 transition ease-in " style="fill: rgb(0, 0, 0); user-select: auto;"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z" style="user-select: auto;"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 p-1 rounded-full bg-white text-red hover:bg-gray-300 duration-500 transition ease-in " style="fill: rgb(0, 0, 0); user-select: auto;"><path d="M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2zm0 16.553-6-3.428-6 3.428V4h12v14.553z" style="user-select: auto;"></path></svg>
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