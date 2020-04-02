import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import "@/assets/public.css"
import "@/assets/font/iconfont.css"
import "@/plugins/index.js"
import "amfe-flexible"
Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
