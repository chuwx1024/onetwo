import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import '@/assets/iconfont/iconfont'
import '@/assets/styles/index.css'

import 'ant-design-vue/dist/antd.css'
import '@/utils/ant-design'
// 使用插件
import { Plugin } from '@/components/Dict/index.js'
Vue.use(Plugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
