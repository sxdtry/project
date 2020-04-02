import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/')
const Concern = () => import('../views/concern/')
const Classify = () => import('../views/classify/')
const Chat = () => import('../views/chat/')
const User = () => import('../views/user/')
const Hot = () => import('../views/home/submodule/sub/Hot')
const Dynamic = () => import('../views/home/submodule/sub/Dynamic')
const Particulars = () => import('../components/Particulars')
const Class = () => import('../components/Class')
const Recommend = () => import('../components/Recommend')
const Redirect = () => import('../components/redirect')

const routes = [
  {
    path:'/',
    redirect:{path:"/user"}
  },
  {
    path:'/home',
    name:'home',
    component:Home,
    redirect:{name:'hot'},
    children:[
      {path:'/home/hot',name:'hot',component:Hot},
      {path:'/home/:id',name:'dynamic',component:Dynamic},
      {
        path:"*",component:Redirect
      }
    ]
  },
  {
    path:'/concern',
    name:'concern',
    component:Concern
  },
  {
    path:'/classify',
    name:'classify',
    component:Classify,
    redirect:{name:'recommend'},
    children:[
      {path:'/classify/recommend',name:"recommend",component:Recommend},
      {path:'/classify/:id',name:"class",component:Class},
      {
        path:"*",component:Redirect
      }
    ]
  },
  {
    path:'/chat',
    name:'chat',
    component:Chat
  },
  {
    path:'/user',
    name:'user',
    component:User
  },
  {
    path:'/particulars/:id',
    name:'particulars',
    component:Particulars
  },
  {
    path:"*",component:Redirect
  }
]

const router = new VueRouter({
  routes
})

export default router
