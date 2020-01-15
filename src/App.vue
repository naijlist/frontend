<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      fixed
    >
        <v-toolbar-title>Name Can't Be blank </v-toolbar-title>
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->

      <v-spacer></v-spacer>

      <v-btn
        text
      >
        <span class="mr-2">Sign-up</span>
        <v-icon>mdi-user</v-icon>
      </v-btn>
      <v-btn
        text
      >
        <span class="mr-2">Sign-in</span>
        <v-icon>mdi-user</v-icon>
      </v-btn>
      <v-btn
        text
      >
        <span class="mr-2">Post Ads</span>
        <v-icon>mdi-user</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
