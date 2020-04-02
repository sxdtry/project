import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from '@/components/page/Page'
import SolarSystem from '@/components/page/result/SolarSystem'
import Fountain from '@/components/page/result/Fountain'
import LineCharts from '@/components/page/result/LineCharts'
import Asahi from '@/components/page/result/Asahi'
import Gauge from '@/components/page/result/Gauge'
import PictorialBar from '@/components/page/result/PictorialBar'
import Globe from '@/components/page/result/Globe'
import Music from '@/components/page/result/Music'

Vue.use(VueRouter)

const routes = [
  {path:"/",redirect:"/page"},
  {path:"/page",name:"page",
    redirect:"/page/solarsystem",
    component:Page,
    children:[
      {path:"",component:SolarSystem},
      {path:"solarsystem",name:"solarsystem",component:SolarSystem},
      {path:"fountain",name:"fountain",component:Fountain},
      {path:"linecharts",name:"linecharts",component:LineCharts},
      {path:"asahi",name:"asahi",component:Asahi},
      {path:"gauge",name:"gauge",component:Gauge},
      {path:"pictorialBar",name:"pictorialBar",component:PictorialBar},
      {path:"globe",name:"globe",component:Globe},
      {path:"music",name:"music",component:Music},
    ]}
]

const router = new VueRouter({
  routes
})

export default router
