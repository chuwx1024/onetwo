
const state = {
  itemlist: [
    {
      key: '1',
      name: '张三',
      age: '32',
      hobby: '抽烟'
    }
  ]
}
const getters = {
  listLength (state) {
    return state.itemlist.length
  }
}

const mutations = {
  ADD_PERSON (state, person) {
    state.itemlist.unshift(person)
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
