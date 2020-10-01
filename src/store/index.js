import Vue from 'vue'
import Vuex from 'vuex'
import createPersistentState from 'vuex-persistedstate'

// My own import

// import state from '@/store/state'
// import mutations from '@/store/mutations'
// import actions from '@/store/actions'
// import getters from '@/store/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[createPersistentState()],
  state:{
    loggedIn: false,
    userData: {}
  },
  mutations:{
    setAuth(state, payload){
      state.loggedIn = true
      state.userData = payload
    },
    unsetAuth(state, payload){
      state.loggedIn = false
      state.userData = {}
    }
  },
  actions:{},
  getters:{
    userData : state => {
      return state.userData
    },
    loggedIn : state => {
      return state.loggedIn
    }
  },
  modules: {
  }
})
