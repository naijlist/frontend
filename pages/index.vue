<template>
    <!-- <div v-if="isLoading" class="mt-[100px] flex flex-col justify-center items-center">Loading... </div> -->
    <div>
        <Hero />
        <Categories :categories="categories" />
        <AdsList title="Featured ads" />
        <AdsList title="Popular ads" />
    </div>
</template>

<script setup>
import { useQuery } from "vue-query"
import {useGET} from "../hooks/useGET.ts"

// const {data: categories, isLoading} = useGET({url: 'http://localhost:5000/categories', enabled: true})

</script>