import Vue from 'vue'
import Vuex from 'vuex'
import { getData } from '@/utils/Cookie.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getData('Authorization') || null,
    itemlist: [
      {
        key: '0',
        name: '张三',
        age: '32',
        hobby: '抽烟'
      }
    ]
  },
  mutations: {
    setUser (state, token) {
      state.user = token
    }
  },
  actions: {
  },
  modules: {
  }
})
