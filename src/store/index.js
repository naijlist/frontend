import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    loggedIn(state) {
      return !!state.user
    }
  }
})
