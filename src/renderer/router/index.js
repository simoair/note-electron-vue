import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
// import Home from '../components/Content/Home/Home.vue'
import Note from '../components/Contain/Note.vue'
import Home from '../components/Contain/Home.vue'
import Team from '../components/Contain/Team.vue'
import Login from '../components/Contain/Login.vue'
Vue.use(Router)
// 有了子路由 父路由名字得去掉
export default new Router({
  routes: [{
    path: '/',
    component: null
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/note',
    component: Note
  },
  {
    path: '/team',
    component: Team
  }
  ]
})
