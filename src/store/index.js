import Vue from 'vue'
import Vuex from 'vuex'
import createVuexAlong from 'vuex-along'
// import Text from './modules/text'
// import User from './modules/user'

const modulesContext = require.context('./modules', true, /\.js$/)

const modules = modulesContext.keys().reduce((modules, item) => {
  const key = item.replace(/\.\/(.*)\.js$/, '$1')
  const val = modulesContext(item)
  modules[key] = val.default
  return modules
}, {})
Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  plugins: [
    createVuexAlong({
      // 设置保存的集合名字，避免同站点下的多项目数据冲突
      name: 'hello-vuex-along',
      local: {
        list: ['ma'],
        // 过滤模块 ma 数据， 将其他的存入 localStorage
        isFilter: true
      },
      session: {
        // 保存模块 ma 中的 a1 到 sessionStorage
        list: ['ma.a1']
      }
    })
  ]

  // modules: {

  //   Text,
  //   User
  // }
})
