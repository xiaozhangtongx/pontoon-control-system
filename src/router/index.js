/*
 * @Description:
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-08 15:25:11
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from '@/layout/BasicLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: BasicLayout,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
