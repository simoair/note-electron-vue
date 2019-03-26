<template>
  <div id="app" class="bodybox theme-dark">
    <Menu/>
    <MenuContain/>
    <Contain/>
  </div>
</template>

<script>

import Menu from './components/Menu'
import MenuContain from './components/MenuContain'
import Contain from './components/Contain'
export default {
  name: 'app',
  components: { Menu, MenuContain, Contain }
}
</script>

<style lang="less" rel="stylesheet/less" >
@import 'assets/less/theme.less';  /*引入公共样式*/
@import 'assets/less/app.less';  /*引入公共样式*/
</style>
