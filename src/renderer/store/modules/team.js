const team = {
  // 命名空间 解决modules元素重名问题
  namespaced: true,
  state: {
    teamList: [],
    teamMap: {
      1: {
        members: [],
        logs: []
      }
    }
  },
  mutations: {
    updateTeamList (state, obj) {
      state.teamList = obj
    }
  },
  actions: {
    updateTeamList ({ commit }, obj) {
      commit('updateTeamList', obj)
    }
  },
  getters: {
    // 获取当前选中菜单code
    getTeamList (state) {
      return state.teamList
    }
  }
}
export default team
