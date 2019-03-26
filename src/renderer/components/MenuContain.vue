<template>
  <div class="menu-contain theme-normal">
    <Row class="head">
        <input 
          class="search theme-shallow" 
          placeholder="搜索..." 
          @focus="searchFocus()"/>
    </Row>
    <Row class="main">
        <History v-show="current_menu_code() === 'history'"/>
        <Home v-show="current_menu_code() === 'home'"/>
        <Team v-show="current_menu_code() === 'team'"/>
        <Folder v-show="current_menu_code() === 'folder'"/>
    </Row>
    
    <div class="advertising">
        <img class="img" src="../assets/img/carousel/a6.png" alt="">
    </div>
  </div>
</template>

<script>

import History from './MenuContain/History'
import Home from './MenuContain/Home'
import Team from './MenuContain/Team'
import Folder from './MenuContain/Folder'
export default {
  name: 'menuContain',
  components: { History, Home, Team, Folder },
  data: function () {
    return {
      menuCode: 'history'
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.menuCode = this.$store.getters['menu/get_current_menu_code']
    })
  },
  methods: {
    current_menu_code () {
      return this.$store.getters['menu/get_current_menu_code']
    },
    searchFocus () {
      this.$store.dispatch({
        type: 'menu/set_current_menu',
        code: 'history'
      })
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.menu-contain{
    width: 220px;
    height: 100%;
    float: left;
    padding: 10px 10px;
    border-right: 1px solid #222;
    color: #BBB;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    display: flex;
    flex-flow: column;
    align-items: stretch;
    position:relative;
    >.head{
        width: 100%;
        flex:0 1 30px;
        -webkit-app-region:drag;
        >.search{
           color: #999999;
           -webkit-app-region:no-drag;
           width: 100%;
           height: 23px;
           border:none;
           border-radius: 25px;
           text-indent: 1em;
           list-style: none;
           padding-right: 10px;
        }
    }
    >.main{
        width: 100%;
        flex:1 1 auto; 
    }
    .advertising{
        width: 100%;
        flex:0 1 80px;
        border-radius: 3px;
        overflow: hidden;
        background: #333;
        position: relative;
        img{
            width: 100%;
            height: 100%;
            opacity: .8;
        }
        &:after{
            content: '×';
            width: 15px;
            height: 15px;
            text-align: center;
            line-height: 16px;
            color: #fff;
            top: 3px;
            right: 3px;
            position: absolute;
            background: rgba(34,34,34, .7);
            border-radius: 10px;
        }
    }
}
</style>
