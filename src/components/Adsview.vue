<template>
<v-container fluid>
<v-col cols="12">
    <v-row>
    <v-col cols="12" md="6" sm="12">
        <v-carousel hide-delimiter-background cycle>
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            ></v-carousel-item>
        </v-carousel>
    </v-col>
    <v-col cols="12" md="6" sm="12">
        <div class="healine">Product Details</div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi veniam a nobis vel ullam sequi iure tempore? Animi consequuntur tempora veritatis, numquam distinctio, iste illum, vero perspiciatis accusantium saepe vel!</p>
    </v-col>
</v-row>
</v-col>
</v-container>
</template>
<script>
export default {
    data(){
        return{
            items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          },
        ]
        }
    },
    methods:{
        
    },
    mounted(){
        console.log(this.$router.history.current.params.id);
        
    }
}
</script>