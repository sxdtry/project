import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'amfe-flexible'

import { Tabbar, TabbarItem, Tab, Tabs, Icon, Sticky, Swipe, SwipeItem, Lazyload, Grid, GridItem, Card, Sidebar, SidebarItem, NavBar, GoodsAction, GoodsActionIcon, GoodsActionButton,Stepper, Field, Button   } from 'vant'

Vue.use(Tabbar).use(TabbarItem).use(Tab).use(Tabs).use(Icon).use(Sticky).use(Swipe).use(SwipeItem).use(Lazyload).use(Grid).use(GridItem).use(Card).use(Sidebar).use(SidebarItem).use(NavBar).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(Stepper).use(Field).use(Button)

Vue.config.productionTip = false

import card from './components/card'
Vue.component('card',card)

router.beforeEach((to, from, next) => {
  if(to.name == "user"){
    next()
  }else if(JSON.parse(localStorage.getItem('user')).flag){
    next()
  }else{
    next(false)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
