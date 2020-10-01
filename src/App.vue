<template>
  <v-app>
    <v-app-bar
      app
      color="teal lighten-1"
      dark
      fixed
      class="hidden-sm-and-down"
      dense
    >
    <router-link to="/">
        <v-toolbar-title style="cursor: pointer;" dark><v-img src="../public/main.png" /> </v-toolbar-title>
    </router-link>    
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
         <v-btn text rounded to="user" v-if="!$store.getters.loggedIn">
        <span class="mr-2">Sign-up</span>
        <v-icon>mdi-account-plus-outline</v-icon>
      </v-btn>
      <v-divider vertical v-if="!$store.getters.loggedIn"></v-divider>
         <v-btn text rounded to="auth" v-if="!$store.getters.loggedIn">
        <span class="mr-2">Sign-in</span>
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>
      <v-btn text rounded>
        <span class="mr-2">Post Ads</span>
        <v-icon >mdi-plus-circle-outline</v-icon>
      </v-btn>
      <v-btn text rounded @click="logout" v-if="$store.getters.loggedIn">
        <span class="mr-2">logout</span>
        <v-icon color="red">mdi-power</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="hidden-sm-and-down">
      <router-view></router-view>
    </v-main>
    <v-main class="hidden-md-and-up" style="padding: 0px">
      <router-view></router-view>
    </v-main>
  <v-bottom-navigation
    shift
    fixed
    color="teal"
    grow
    class="hidden-md-and-up"
  >
    <v-btn to="/">
      <span>Home</span>
      <v-icon>mdi-home-outline</v-icon>
    </v-btn>

    <v-btn>
      <span>Post ads</span>
      <v-icon>mdi-plus-circle-outline</v-icon>
    </v-btn>

    <v-btn>
      <span>Account</span>
      <v-icon>mdi-account-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
    <v-footer
    dark
    padless
    class="hidden-sm-and-down"
  >
    <v-card
      flat
      tile
      class="teal lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Name Can't be blank</strong>
      </v-card-text>
    </v-card>
  </v-footer>
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
    icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram',
      ]
  }),
  methods:{
    logout(){
      this.$store.commit('unsetAuth')
    }
  }
};
</script>
