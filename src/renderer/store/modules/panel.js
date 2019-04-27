const panel = {
  // 命名空间 解决modules元素重名问题
  namespaced: true,
  state: {
    menu: {
      index: 0,
      list: [
        {
          name: '云笔记',
          code: 'home',
          icon_code: 'M',
          url: '/home'
        }
        // {
        //   name: '登录',
        //   code: 'login',
        //   icon_code: 'home',
        //   url: '/login'
        // },
        // {
        //   name: '新文本（1）',
        //   code: 'note',
        //   icon_code: 'txt',
        //   url: '/note'
        // },
        // {
        //   name: '团队1',
        //   code: 'team',
        //   icon_code: 'chat',
        //   url: '/team'
        // }
      ]
    }
  },
  mutations: {
    turnTo (state, index) {
      state.menu.index = index
    },
    close (state, index) {
      index = index || state.menu.index
      if (state.menu.index === index) {
        let count = state.menu.index === 0 ? 0 : -1
        state.menu.index += count
      } else {
        if (state.menu.index > index) {
          state.menu.index += -1
        }
      }
      state.menu.list.splice(index, 1)
    },
    add (state, obj) {
      state.menu.list.push(obj)
      state.menu.index = state.menu.list.length - 1
    }
  },
  actions: {
    turnTo ({ commit }, index) {
      commit('turnTo', index)
    },
    close ({ commit }, index) {
      commit('close', index)
    },
    add ({ commit }, obj) {
      let item
      switch (obj.code) {
        case 'login':
          item = {
            name: '登录',
            code: 'login',
            icon_code: 'home',
            url: '/login'
          }
          break
        case 'home':
          item = {
            name: '云笔记',
            code: 'home',
            icon_code: 'M',
            url: '/home'
          }
          break
        case 'note':
          item = {
            name: obj.noteName,
            code: 'note',
            icon_code: 'txt',
            url: `/note?id=${obj.id}&code=${obj.code}`, // code: team person
            id: obj.id
          }
          break
        case 'team':
          item = {
            name: obj.name,
            code: 'team',
            icon_code: 'chat',
            url: `/team?id=${obj.id}`,
            id: obj.id
          }
          break
      }
      commit('add', item)
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
