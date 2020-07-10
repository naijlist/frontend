import Vue from 'vue'
import Vuex from 'vuex'
import createPersistentState from 'vuex-persistedstate'

// My own import

import state from '@/store/state'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import getters from '@/store/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[createPersistentState()],
  state,
  mutations,
  actions,
  getters,
  modules: {
  }
})
