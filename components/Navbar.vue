<template>
    <header class="fixed inset-0 z-40 flex justify-between items-center px-10 bg-primary h-20 w-full">
        <div class="flex justify-center items-center gap-5">
            <div @click="handleSetHambuger" class="cursor-pointer">
                <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.195068" y="0.5" width="25" height="2" rx="1" fill="#FFF" />
                    <rect x="0.195068" y="8.5" width="25" height="2" rx="1" fill="#FFF" />
                    <rect x="0.195068" y="16.5" width="25" height="2" rx="1" fill="#FFF" />
                </svg>
            </div>
            <NuxtLink to="/" class="flex gap-2 items-center">
                <img src="/logo.svg" alt="logo" class="w-32">
            </NuxtLink>
        </div>
            <!-- <img src="" alt=""> -->

        <ul class="justify-between space-x-6 text-black hidden lg:flex">
            <li class="text-white border  hover:bg-primaryDark duration-500 transition ease-in rounded-md py-2 px-4"> 
                <NuxtLink to="/dashboard/home" class="flex"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: white;transform: ;msFilter:;"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"></path><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path></svg>
                &nbsp; Post ads</NuxtLink> </li>
            <li class="rounded-md bg-black  hover:bg-gray-800 duration-500 transition ease-in  py-2 px-4 text-white "> 
                <NuxtLink to="/signup" class="flex"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: white;transform: ;msFilter:;"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                </svg> &nbsp; Account
                </NuxtLink> </li>
        </ul>
    </header>
   <ul class="sm:hidden bottom-0 left-0 fixed flex justify-between w-screen px-10 py-4  bg-zinc-900 text-white">
            <li>Home</li>
            <li>Post ads</li>
            <li>Account</li>
        </ul>
        
</template>

<script setup>
const emit = defineEmits(['setHambuger'])
defineProps({
    setHamburger: Boolean
})
// const route = useRoute()
// if (route.path.includes('dashboard')) hamburger.value = true

const handleSetHambuger = () => {
    console.log('et')
    emit('setHambuger')
}
// export default {
//     setup(props, {emit}) {

        
//         const handleSetHamburger = () => {
//             console.log('Emitting')
//         }
//         return { handleSetHamburger }

//     }
// }

</script>