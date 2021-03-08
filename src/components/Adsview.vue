<template>
<v-container fluid>
<v-col cols="12">
    <v-row>
    <v-col cols="12" md="6" sm="12">
        <v-carousel hide-delimiter-background cycle v-model="model">
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            ></v-carousel-item>
        </v-carousel>
    </v-col>
    <v-col cols="12" md="6" sm="12">
        <div class="headline"><b>Product Details Product Details Product Details Product Details</b></div>
        <v-chip
          close-icon="mdi-map-marker"
          class="ma-2"
          close
          >
        Sokoto, Arkilla FED low cost
      </v-chip>
      <v-btn v-if="!showPhone" @click="togglePhone()" color="info" rounded dark><v-icon>mdi-phone</v-icon> show phone</v-btn>
       <v-chip
          v-if="showPhone"
          close-icon="mdi-phone"
          class="ma-2"
          close
          color="success"
          >
          08060508036
      </v-chip>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi veniam a nobis vel ullam sequi iure tempore? Animi consequuntur tempora veritatis, numquam distinctio, iste illum, vero perspiciatis accusantium saepe vel!</p>
        <p class="text-uppercase">Brand
        <v-chip
          label
          outlined
          >Apple
      </v-chip>
      </p>
        <p class="text-uppercase">model
          <v-chip
          label
          outlined
          >Macbook Air
      </v-chip>
        </p>
        <p class="text-uppercase">condition
          <v-chip
          class="text-right"
          label
          outlined
          >Used
      </v-chip></p>
        <p class="text-uppercase">processor
          <v-chip
          label
          outlined
          >Intel
      </v-chip>
        </p>
        <p class="text-uppercase">Ram
        <v-chip
          label
          outlined
          >8gb
      </v-chip></p>
        <p class="text-uppercase">HDD
          <v-chip
          class="ma-2"
          label
          outlined
          >500gb
      </v-chip>
        </p>

    </v-col>
</v-row>
</v-col>
</v-container>
</template>
<script>
export default {
    data(){
        return{
          showPhone: false,
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
        ],
        model: 0,
        }
    },
    methods:{
        togglePhone(){
          this.showPhone = true
        }
    },
    mounted(){
        console.log(this.$router.history.current.params.id);
        
    }
}
</script>