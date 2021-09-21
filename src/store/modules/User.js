import { getData } from '@/utils/Cookie.js'

const state = {
  user: getData('Authorization') || null
}
const mutations = {
  SET_USER (state, token) {
    state.user = token
  }
}
const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
