const panel = {
  // 命名空间 解决modules元素重名问题
  namespaced: true,
  state: {
    menu: {
      index: 0,
      list: [{
        name: '云笔记',
        code: 'hall',
        icon_code: 'M',
        url: '/home'
      },
      {
        name: '登录',
        code: 'login',
        icon_code: 'home',
        url: '/login'
      },
      {
        name: '新文本（1）',
        code: 'txt',
        icon_code: 'txt',
        url: '/note'
      },
      {
        name: '团队1',
        code: 'team',
        icon_code: 'chat',
        url: '/team'
      }
      ]
    }
  },
  mutations: {
    turnTo (state, index) {
      state.menu.index = index
    },
    close (state, index) {
      if (state.menu.index === index) {
        let count = state.menu.index === 0 ? 0 : -1
        state.menu.index += count
      } else {
        if (state.menu.index > index) {
          state.menu.index += -1
        }
      }
      state.menu.list.splice(index, 1)
    }
  },
  actions: {
    turnTo ({ commit }, index) {
      commit('turnTo', index)
    },
    close ({ commit }, index) {
      commit('close', index)
    }
  },
  getters: {
    // 获取左侧菜单栏
    getMenu (state) {
      return state.menu
    },
    getMenuIndex (state) {
      return state.menu.index
    }
  }
}
export default panel
