<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-row justify="start">
                    <v-col
                        v-for="n in 2"
                        :key="n"
                        cols="6"
                        xl="3"
                        lg="3"
                        md="3"
                        sm="6"
                        xs="6"
                    >
                        <v-card
                            :loading="loading"
                            style="cursor:pointer;"
                        >
                        <v-img
                        height="150px"
                        max-height="150px"
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>
                      
                        <p class="pl-4 pt-2 mb-0">Cafe Badilico</p>

                        <v-card-text>
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

                        <div class="subtitle-2">
                            NGN 20,000
                        </div>

                        <div>Small plates, salads & sandwiches....</div>
                        </v-card-text>
                    </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>
<style scoped>

</style>