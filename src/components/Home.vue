<template>
<div>
  <v-card class="mx-auto hidden-sm-and-down"  flat tile>
    <v-card-text>
      <v-row>
      <v-col cols="12" >
        <v-row justify="center" align="end" style="height: 300px;">
          <v-col
            cols="6"
            xl="4"
            lg="4"
            md="4"
            sm="4"
            xs="4"
            >
            <v-text-field
              label="What are you looking for?"
              hint="Enter a key word to search what you are looking for"
              outlined
              rounded
              color="teal lighten-1"
              dense>
            </v-text-field>
          </v-col>

          <v-col
            cols="6"
            xl="3"
            lg="3"
            md="3"
            sm="3"
            xs="3"
            >
            <v-text-field
             append-icon="place"
             label="Location"
             color="teal lighten-1"
              outlined
              rounded
              dense>
              </v-text-field>
          </v-col>
          <v-col
            cols="6"
            xl="2"
            lg="2"
            md="2"
            sm="2"
            xs="2"
            >
            <v-btn
              color="teal lighten-1" 
              style="margin-bottom: 30px;" 
              rounded 
              outlined> Search</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    </v-card-text>
  </v-card>
  <v-card class="mx-auto hidden-md-and-up" width="500">
    <v-card-text>
      <v-row>
        <v-container>
          <v-text-field
              label="Looking for?"
              hint="Enter a key word to search what you are looking for"
              outlined
              rounded
              dense
              color="teal lighten-1"
              >
              </v-text-field>
        <v-text-field
              label="Location"
              hint="Enter a key word to search what you are looking for"
              outlined
              rounded
              dense
              color="teal lighten-1"
              append-icon="place"
              >
              </v-text-field>
        <v-btn
              color="teal lighten-1" 
              style="margin-bottom: 30px;" 
              rounded 
              outlined
              block="true"
              > <v-icon>search</v-icon> </v-btn>
        </v-container>
      </v-row>
    </v-card-text>
  </v-card>
  <v-container fluid class="grey lighten-2">
    <CatGrid />
  </v-container>
  <v-container fluid>
<v-sheet
    class="mx-auto"
    elevation="0"
  >
    <v-subheader class="ml-10">1K DEALS</v-subheader>

    <v-slide-group
      v-model="model"
      class="pl-4 pr-4 mb-2"
      active-class="teal lighten-4"
      show-arrows
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot:default="{ active, toggle }"
      >
        <v-card
          height="130"
          width="180"
          @click="toggle"
          flat
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" width="120" height="120" contain/>
            </v-scale-transition>
            
          </v-row>
              <v-card-subtitle>ALLLLLL</v-card-subtitle>

        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
  </v-container>
  <v-container>
  <ListedAds/>
  </v-container>
</div>
</template>
<script>
import CatGrid from './CategoryGrid'
import ListedAds from './ListedAds'
export default {
  name: 'Home',
  components:{
    CatGrid,
    ListedAds
  },
  data(){
    return{
      model: null

    }
  },
  methods:{
    search(){
      console.log('clicked');
    }
  }
};
</script>
<style scoped>
  /* .indexCard{
    background-image: url('../assets/parax.svg');
    background-attachment: fixed;
    background-size: cover;

  } */
  .indexForm{
    margin-top: 270px;
    margin-left: 250px;
  }
</style>
