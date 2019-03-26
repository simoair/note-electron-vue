import Vue from 'vue'
// import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import Vuex from 'vuex'
// Vue UI框架
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// 加载api文件
import server from './common/index'
import fontAwesome from 'font-awesome/css/font-awesome.css' // 字体图标

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
// Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.prototype.$server = server
Vue.use(iView)
Vue.use(Vuex)
Vue.use(fontAwesome)
Vue.config.silent = true // 取消 Vue 所有的日志与警告
/* eslint-disable */
new Vue({
    components: { App },
    router,
    store,
    template: '<App/>'
}).$mount('#app')