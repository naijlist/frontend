<template>
    <header class="fixed z-40 flex justify-between items-center px-10 bg-primary h-20 w-full">
        <router-link to="/" class="flex gap-2 items-center">
            <img src="../assets/list.png" alt="logo" class="w-8">
            <h3 class="text-white font-semibold text-2xl" >Naijlist</h3>
        </router-link>
            <!-- <img src="" alt=""> -->

        <ul class="justify-between space-x-6 text-black hidden lg:flex">
            <li class="text-white border  hover:bg-primaryDark duration-500 transition ease-in rounded-md py-2 px-4"> 
                <router-link to="/dashboard" class="flex"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: white;transform: ;msFilter:;"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"></path><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path></svg>
                &nbsp; Post ads</router-link> </li>
            <li class="rounded-md bg-black  hover:bg-gray-800 duration-500 transition ease-in  py-2 px-4 text-white "> 
                <router-link to="/signup" class="flex"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: white;transform: ;msFilter:;"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                </svg> &nbsp; Account
                </router-link> </li>
        </ul>
        
    </header>
   <ul class="sm:hidden bottom-0 left-0 fixed flex justify-between w-screen px-10 py-4  bg-zinc-900 text-white">
            <li>Home</li>
            <li>Post ads</li>
            <li>Account</li>
        </ul>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>