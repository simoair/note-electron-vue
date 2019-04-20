const note = {
  // 命名空间 解决modules元素重名问题
  namespaced: true,
  state: {
    person: {
      flag: false,
      list: [],
      tree: [],
      map: {},
      currentItem: {}
    },
    team: {
      1: {
        list: [],
        tree: [],
        map: {},
        currentItem: {}
      }
    },
    noteMap: {}
  },
  mutations: {
    updatePersonData (state, obj) {
      state.person.flag = true
      state.person.list = obj.list
      state.person.tree = obj.tree
      state.person.map = obj.map
    },
    updatePersonCurrentItem (state, noteId) {
      state.person.currentItem = state.person.map[noteId]
    }
  },
  actions: {
    updatePersonData ({ commit }, obj) {
      commit('updatePersonData', obj)
    },
    updatePersonCurrentItem ({ commit }, noteId) {
      noteId = noteId || 0
      commit('updatePersonCurrentItem', noteId)
    }
  },
  getters: {
    getPersonData (state) {
      return state.person
    },
    getPersonFalg (state) {
      return state.person.flag
    },
    getNoteMap (state) {
      return state.noteMap
    }
  }
}
export default note
