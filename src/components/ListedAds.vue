<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-subheader>Recently Added</v-subheader>
                <v-row justify="start">
                    <v-col
                        v-for="n in 20"
                        :key="n"
                        cols="6"
                        xl="3"
                        lg="3"
                        md="3"
                        sm="6"
                        xs="6"
                    >
                       <v-hover v-slot:default="{ hover }">
                            <v-card
                            :loading="loading"
                            flat
                            tile
                            max-width="280"
                            max-height="330"
                            :elevation="hover ? 12 : 0"
                            :class="{ 'on-hover': hover }"
                        >
                        <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        contain max-width="270"/>
                      
                        <v-card-text>
                        <div class="overline">Cafe Badilico</div>

                        <!-- <v-row
                            align="center"
                            class="mx-0"
                        >
                            <v-rating
                            :value="4.5"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="12"
                            ></v-rating>

                            <div class="grey--text ml-4">4.5 (413)</div>
                        </v-row> -->

                        <div class="subtitle">
                            <b>NGN 20,000</b>
                        </div>

                        <div>Small plates, salads & sandwiches....</div>
                          <v-btn outlined text block color="success" :to="`ads-viewer/${n}`">view</v-btn>
                        </v-card-text>
                        <v-card-actions>
                        </v-card-actions>
                    </v-card>
                       </v-hover>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
        ransparent: 'rgba(255, 255, 255, 0)',
        loading: false,
        selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      navigateTo(route){
        this.$router.push({name: route})
      }
    },
  }
</script>
<style scoped>
.v-card {
  transition: opacity .5s ease-in-out;

}

.v-card:not(.on-hover) {
  /* opacity: 0.6; */
 }
</style>