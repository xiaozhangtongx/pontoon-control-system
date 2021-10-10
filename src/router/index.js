/*
 * @Description:
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-08 15:25:11
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from '@/layout/BasicLayout'
import Video from '@/components/Video'
import Fun1 from '@/components/Fun1'
import Fun2 from '@/components/Fun2'
import Fun3 from '@/components/Fun3'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home/1',
    component: BasicLayout,
    children: [
      {
        path: '/home/1',
        component: Video,
      },
      {
        path: '/home/2',
        component: Fun1,
      },
      {
        path: '/home/3',
        component: Fun2,
      },
      {
        path: '/home/4',
        component: Fun3,
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
