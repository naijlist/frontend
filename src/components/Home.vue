<template>
<div class="grey lighten-2">
  <v-card class="mx-auto hidden-sm-and-down">
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
              color="cyan" 
              style="margin-bottom: 30px;" 
              rounded 
              outlined> Search</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    </v-card-text>
  </v-card>
  <v-card class="mx-auto hidden-md-and-up">
    <v-card-text>
      <v-row>
        <v-container>
          <v-text-field
              label="Looking for?"
              hint="Enter a key word to search what you are looking for"
              outlined
              rounded
              dense
              >
              </v-text-field>
        <v-text-field
              label="Location"
              hint="Enter a key word to search what you are looking for"
              outlined
              rounded
              dense
              append-icon="place"
              >
              </v-text-field>
        <v-btn
              color="cyan" 
              style="margin-bottom: 30px;" 
              rounded 
              outlined
              block="true"
              > <v-icon>search</v-icon> </v-btn>
        </v-container>
      </v-row>
    </v-card-text>
  </v-card>
  <v-container >
    <CatGrid />
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
