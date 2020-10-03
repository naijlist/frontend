import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import theme from './plugins/theme'
// Components
import './components'

// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
