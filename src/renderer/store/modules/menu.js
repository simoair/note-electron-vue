const menu = {
  // 命名空间 解决modules元素重名问题
  namespaced: true,
  state: {
    current_menu_code: 'home'
  },
  mutations: {
    set_current_menu (state, obj) {
      state.current_menu_code = obj.code
    }
  },
  actions: {
    set_current_menu ({ commit }, obj) {
      commit('set_current_menu', obj)
    }
  },
  getters: {
    // 获取当前选中菜单code
    get_current_menu_code (state) {
      return state.current_menu_code
    }
  }
}
export default menu
