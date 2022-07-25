<template>
    <header class="fixed flex justify-between items-center px-10 bg-primary h-20 w-full">
        <router-link to="/">
            <h3 class="text-white font-bold text-2xl" >Naijlist</h3>
        </router-link>
            <!-- <img src="" alt=""> -->

        <ul class="flex justify-between space-x-6 text-black hidden lg:flex">
            <li class="text-white border border-2 rounded-md py-2 px-4"> <router-link to="create-ads"> <i class="fa fa-plus"></i>&nbsp; Post ads</router-link> </li>
            <li class="rounded-md bg-black  hover:bg-gray-800 duration-500 transition ease-in  py-2 px-4 text-white "> <router-link to="/signup"> <i class="fa fa-user"></i>&nbsp; Account</router-link> </li>
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