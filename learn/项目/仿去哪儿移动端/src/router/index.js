import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: { name: "page" } },
  { path: "/page", name: "page", component: () => import("../views/page") },
  { path: "/search", name: "search", component: () => import("../views/search") },
  { path: "/crumb", name: "crumb", component: () => import("../views/crumb") },
  { path: "/listitem", name: "listitem", component: () => import("../views/listitem") },
  { path: "/scenic/:id", name: "scenic", component: () => import("../views/scenic") },
  { path: "/go/:id", name: "go", component: () => import("../views/go") }
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }

})

export default router
