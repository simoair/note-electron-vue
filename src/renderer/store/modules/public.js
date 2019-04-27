const note = {
  // 命名空间 解决modules元素重名问题
  namespaced: true,
  state: {
    pop: {
      isShow: ''
    }
  },
  mutations: {
    updatePop (state, boolean) {
      state.pop.isShow = boolean
    }
  },
  actions: {
    updatePop ({ commit }, boolean) {
      commit('updatePop', boolean)
    }
  },
  getters: {
    getPop (state) {
      return state.pop
    }
  }
}
export default note
