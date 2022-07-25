<template>

    <Hero />
    <Categories />
    <AdsList title="Featured ads" />
    <AdsList title="Popular ads" />
</template>

<script>
// @ is an alias to /src

import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import AdsList from '@/components/AdsList'
export default {
  name: 'Home',
  components:{
    Hero,
    Categories,
    AdsList
  }
}
</script>
