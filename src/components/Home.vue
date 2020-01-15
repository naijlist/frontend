<template>
<div>
  <v-parallax
    dark
    src="../assets/parax.svg"
    height="350"
  >
  <v-container
  class="grey lighten-5"
  style="margin-top:270px !important"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col 
      class="text-center" 
      md="4" 
      cols="12"
      >
       <v-text-field
       label="What are you looking for?"
       hint="Enter a key word to search what you are looking for"
       color="orange"
       rounded
       outlined
       filled
       >

       </v-text-field>
      </v-col>
       <v-col 
       class="mt-0"
      md="3"
      cols="12"
      >
       <v-text-field
       append-icon="place"
       label="Location"
       rounded
       outlined
       color="orange"
       filled
       >

       </v-text-field>
      </v-col>
       <!-- <v-col 
      class="text-center" 
      md="3" 
      cols="12"
      >
       <v-select
       color="white"
      :items="['Computers & Laptops', 'Phones', 'House Hold']"
      label="Categories"
      outlined
      rounded
      filled=""
    ></v-select>
      </v-col> -->
      <v-col 
      class="text-center" 
      md="2" 
      cols="12"
      >
       <v-btn color="cyan" style="margin-bottom: 30px;" rounded outlined x-large> Search</v-btn>
      </v-col>
    </v-row>
  </v-container>
  </v-parallax>
  <CatGrid />
</div>
</template>
<script>
import CatGrid from './CategoryGrid'
export default {
  name: 'Home',
  components:{
    CatGrid
  }
};
</script>
