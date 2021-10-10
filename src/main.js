/*
 * @Description:
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-08 15:25:11
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)
import { Icon } from 'ant-design-vue'
import './assets/less/global.css'
import iconFront from './assets/font_2854509_ab9mgq4nad7/iconfont.js'
const myicon = Icon.createFromIconfontCN({
  scriptUrl: iconFront,
})
//引用
Vue.component('my-icon', myicon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
