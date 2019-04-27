import Vue from 'vue'
import Vuex from 'vuex'
import Panel from './modules/panel.js'
import Menu from './modules/menu.js'
import Team from './modules/team.js'
import Note from './modules/note.js'
import Public from './modules/public.js'

Vue.use(Vuex)
// 需要维护的状态
const state = {}
// 在这里改变state中的数据
const mutations = {}
// 定义Actions
const actions = {}
const getters = {}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    public: Public,
    panel: Panel,
    menu: Menu,
    team: Team,
    note: Note
  }
})
