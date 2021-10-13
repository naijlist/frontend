<template>
    <div>
        <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
          <v-list-item two-line link to="/profile" :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
              <img src="../../assets/imgs/salscodes.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{$store.getters.userData.fullname}}</v-list-item-title>
              <v-list-item-subtitle>{{$store.getters.userData.email}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
          :to="item.page"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
       <template v-slot:append>
        <div class="pa-2">
          <v-btn @click="logout()" dark block> <v-icon color="red">mdi-power</v-icon> Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="teal"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
        @click="navigateTo()"
      >
        <span class="hidden-sm-and-down">NAIJLIST</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        append-icon="mdi-magnify"
        @click:append="search()"
        label="Search"
        class="hidden-sm-and-down"
      />
      <v-spacer />
      <!-- <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn> -->
      <v-btn icon>
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>
      <v-btn 
      icon
      to="profile"
      >
        <v-icon>mdi-account-circle-outline</v-icon>
      </v-btn>
      <v-btn 
      icon
      color="red"
      @click="logout"
      >
        <v-icon>mdi-power</v-icon>
      </v-btn>
      <!-- <v-btn
        icon
        large
      >
        <v-avatar
          size="32px"
          item
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          /></v-avatar>
      </v-btn> -->
    </v-app-bar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            miniVariant: false,  
            drawer: null,
        }
    },
    computed:{
      items(){
          return [
                { icon: 'mdi-apps', text: 'Dashboard', page: 'dashboard'},
                { icon: 'mdi-table-account', text: 'Users', page: 'users-table'},
                { icon: 'mdi-office-building', text: 'Companies', page: 'companies' },
                { icon: 'mdi-account-multiple', text: 'Consultants', page: 'consultants' },
                { icon: 'mdi-table-multiple', text: 'Projects', page: "projects" }, 
              ]
        
      }
    },
    methods:{
      navigateTo(){
        this.$router.push('/')
      },
       logout() {

      this.$store.commit('unsetAuth', {})
        this.$router.push('/')
    }
    },
    created(){
    console.log('dash')
        if(!this.$store.getters.loggedIn) return this.$router.push({name: 'auth'})
        console.log(this.$store.getters.userData);
    }
}
</script>
