<template>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-5 mx-8 lg:mx-20 mt-28 mb-7">
        <div class="col-span-2 rounded-md">
            <img src="../assets/imgs/lenovot450.jpg"  alt="ads-img" class="w-full rounded-md mb-5">
        <div class=" col-span-2 rounded-md bg-white px-5 py-5"> 
            <p class="text-3xl font-bold">Lenovo thinkPad 8GB RAM and 1TB HDD</p>
            <div>
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgb(0, 0, 0); user-select: auto;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" style="user-select: auto;"></path><path d="M13 7h-2v6h6v-2h-4z" style="user-select: auto;"></path></svg>
                </p>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgb(0, 0, 0); user-select: auto;"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z" style="user-select: auto;"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z" style="user-select: auto;"></path></svg>
                </p>
            </div>
        </div>

        </div>
        <div class="col-span-2 md:col-span-1 flex-col">
            <div class=" bg-white  rounded-md px-5 py-5 mb-5">
                <p class="text-4xl font-bold text-black">&#8358; 186,000</p>
            </div>
            <div class=" bg-white  rounded-md px-5 py-5 mb-5">
                <div class="flex items-center gap-5">
                    <img src="../assets/sals.jpg" class="rounded-md w-16" alt="">
                    <div>
                        <p class="font-bold text-xl flex">Salscode &nbsp; 
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-primary" width="24" height="24" style="fill: rgba(85, 52, 165, 1);transform: ;msFilter:;">
                            <path d="M19.965 8.521C19.988 8.347 20 8.173 20 8c0-2.379-2.143-4.288-4.521-3.965C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.035C6.138 3.712 4 5.621 4 8c0 .173.012.347.035.521C2.802 9.215 2 10.535 2 12s.802 2.785 2.035 3.479A3.976 3.976 0 0 0 4 16c0 2.379 2.138 4.283 4.521 3.965C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.035C17.857 20.283 20 18.379 20 16c0-.173-.012-.347-.035-.521C21.198 14.785 22 13.465 22 12s-.802-2.785-2.035-3.479zm-9.01 7.895-3.667-3.714 1.424-1.404 2.257 2.286 4.327-4.294 1.408 1.42-5.749 5.706z"></path>
                            </svg>
                            </p>
                        <p class="px-2 text-sm">Reply ASAP</p>
                    </div>
                </div>
                <button 
                @click="showSellerPhone = true"
                class="flex 
                justify-center 
                bg-primary 
                hover:bg-primaryDark 
                duration-500 
                transition ease-in 
                px-10 py-3 
                mx-auto mt-5 
                w-full 
                rounded-md 
                text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: white;transform: ;msFilter:;">
                        <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"></path>
                    </svg>
                    &nbsp; {{showSellerPhone ? '08060508036' : 'Show phone'}}
                </button>
            </div>
            <div class=" bg-white  rounded-md px-5 py-5 mb-5">
                <img src="../assets/map.png" alt="">
            </div>

        <div class="col-span-2 md:col-span-1 px-5 py-5 bg-white">NOTE: warning about naijlist</div>
            
        </div>
        
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup () {
        const showSellerPhone = ref(false)
        return {
            showSellerPhone
        }
    }
}
</script>
<style scoped>

</style>