const team = {
  // 命名空间 解决modules元素重名问题
  namespaced: true,
  state: {
    teamList: [],
    teamMap: {}
  },
  mutations: {
    updateTeamList (state, obj) {
      state.teamList = obj
    },
    addTeamMap (state, obj) {
      let item = {}
      item[obj.id] = obj// 解决对象属性变化 vue watch监听不到问题
      state.teamMap = Object.assign({}, state.teamMap, item)
      console.log(state.teamMap)
    }
  },
  actions: {
    updateTeamList ({ commit }, obj) {
      commit('updateTeamList', obj)
    },
    addTeamMap ({ commit }, obj) {
      commit('addTeamMap', obj)
    }
  },
  getters: {
    // 获取当前选中菜单code
    getTeamList (state) {
      return state.teamList
    },
    // 获取当前选中菜单code
    getTeamMap (state) {
      return state.teamMap
    }
  }
}
export default team
