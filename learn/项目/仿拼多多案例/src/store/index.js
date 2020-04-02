import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:"",
    flag:true
  },
  mutations: {
    show(state){
      state.flag = !state.flag
    },
  },
  actions: {
  },
  modules: {
  }
})
