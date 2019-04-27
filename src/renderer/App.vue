<template>
  <div class="bodybox theme-dark" @click="onClick($event)">
    <Menu/>
    <MenuContain/>
    <Contain/>
  </div>
</template>

<script>

import Menu from './components/Menu'
import MenuContain from './components/MenuContain'
import Contain from './components/Contain'
require('../../static/js/RongIMLib-2.4.0.js')
require('../../static/js/protobuf-2.3.4.min.js')
require('../../static/js/RongEmoji-2.2.7.js')
export default {
  name: 'app',
  components: { Menu, MenuContain, Contain },
  created () {
  },
  methods: {
    onClick ($event) {
      this.$store.dispatch('public/updatePop', false)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" >
@import 'assets/less/theme.less';  /*引入公共样式*/
@import 'assets/less/app.less';  /*引入公共样式*/
</style>
