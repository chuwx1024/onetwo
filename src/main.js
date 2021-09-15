import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from '@/filters'

import 'normalize.css/normalize.css'
import '@/assets/iconfont/iconfont'
import '@/assets/styles/index.css'
// ant design
import 'ant-design-vue/dist/antd.css'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import '@/utils/ant-design'

// 使用插件
import { Plugin } from '@/components/Dict/index.js'
Vue.use(Plugin)

Vue.config.productionTip = false
Vue.prototype.zhCN = zhCN

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
