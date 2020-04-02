import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
    listitem: [],
    cityName: ""
  },
  mutations: {
    listitem(state, value) {
      state.listitem = value
    },
    selectCity(state, value) {
      state.cityName = value
    }
  },
  actions: {
  },
  modules: {
  }
})
