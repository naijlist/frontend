<template>
    <div class="items-center justify-center w-11/12  container mx-auto">
        <h1 class="px-1 pt-10 pb-5 lg:text-2xl text-base sm:text-3xl">{{title}}</h1>
        <!-- Grid start-->
        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-14">
            <!--Card-->
            <div v-for="(ads, index) in adverts" :key="index" class="card focus:bg-gray-100 lg:hover:bg-gray-100 duration-500 transition ease-in  cursor-pointer ">
                
                    <div class="pt-0 px-0 rounded-md flex flex-col">
                    <!--Image start-->
                    <router-link :to="`/ads-details/${index}`">
                        <div class="rounded-md overflow-hidden">
                            <img :src="`/${ads?.img}`" alt="">
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
                            <h5 class="sm:text-sm text-xs pl-4 -mt-3  py-4 ">{{ ads.name }}</h5>
                            <h5 class="sm:text-sm text-xs pl-4 -mt-4  sm:-mt-3 sm:pr-4 py-1"><b>NGN {{ ads.price }}</b></h5>
                            <span class="flex gap-2 items-center pl-3 sm:pr-4 py-2 ">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.50008 7.99992C8.86675 7.99992 9.18075 7.86925 9.44208 7.60792C9.70297 7.34703 9.83341 7.03325 9.83341 6.66658C9.83341 6.29992 9.70297 5.98592 9.44208 5.72459C9.18075 5.4637 8.86675 5.33325 8.50008 5.33325C8.13341 5.33325 7.81964 5.4637 7.55875 5.72459C7.29741 5.98592 7.16675 6.29992 7.16675 6.66658C7.16675 7.03325 7.29741 7.34703 7.55875 7.60792C7.81964 7.86925 8.13341 7.99992 8.50008 7.99992ZM8.50008 12.8999C9.85563 11.6555 10.8612 10.5248 11.5167 9.50792C12.1723 8.49147 12.5001 7.58881 12.5001 6.79992C12.5001 5.58881 12.1139 4.59703 11.3414 3.82459C10.5694 3.05259 9.6223 2.66659 8.50008 2.66659C7.37786 2.66659 6.43052 3.05259 5.65808 3.82459C4.88608 4.59703 4.50008 5.58881 4.50008 6.79992C4.50008 7.58881 4.82786 8.49147 5.48341 9.50792C6.13897 10.5248 7.14452 11.6555 8.50008 12.8999ZM8.50008 14.6666C6.71119 13.1444 5.37519 11.7304 4.49208 10.4246C3.60853 9.11925 3.16675 7.91103 3.16675 6.79992C3.16675 5.13325 3.70297 3.80547 4.77541 2.81659C5.84741 1.8277 7.08897 1.33325 8.50008 1.33325C9.91119 1.33325 11.1527 1.8277 12.2247 2.81659C13.2972 3.80547 13.8334 5.13325 13.8334 6.79992C13.8334 7.91103 13.3919 9.11925 12.5087 10.4246C11.6252 11.7304 10.289 13.1444 8.50008 14.6666Z" fill="black"/>
                                </svg>
                                <h5 class="sm:text-sm text-xs text-slate-400 "> {{ ads.location }}</h5>
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

<script setup>
// export default {
//     props: ['title'],
//     setup (props) {
        

//         return {
//             title: props.title,
//         }
//     },

//     mounted() {
//         console.log(this.title)
//     },
// }
const props = defineProps({
    title: String
})

const title = computed(()=>props?.title)
const adverts = [
    {
        img: "speaker.svg",
        name: "2 Sonic vib. mega speaker c12",
        price: "₦76,000",
        location: "Gwarimpa, Abuja"
    },
    {
        img: "laptop.svg",
        name: "Hp 16gb ram 256gb core i7",
        price: "₦176,000",
        location: "Lokogoma, Abuja"
    },
    {
        img: "car.svg",
        name: "mini car 2016",
        price: "₦500,000",
        location: "wuse 2, Abuja"
    },
    {
        img: "macbook2020.svg",
        name: "Mac book pro 2020",
        price: "400,000",
        location: "Gwarimpa, Abuja"
    },
    {
        img: "macbook2019.svg",
        name: "Mac book laptop 2019",
        price: "350,000",
        location: "Gwarimpa, Abuja"
    },
    {
        img: "small_speaker.svg",
        name: "JBL Speaker",
        price: "160,000",
        location: "Gwarimpa, Abuja"
    },
]
</script>

<style scoped>

</style>