import Vue from 'vue'
import VueRouter from 'vue-router'
import MoiveRoute from './movie/index'
import CinemaRoute from './cinema/index'
import MineRoute from './mine/index'
Vue.use(VueRouter)

const routes = [
  MoiveRoute,
  CinemaRoute,
  MineRoute,
  {
    path:'/*',
    redirect: 'movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
