<template>
  <div class="team theme-deep">
      <div class="team-head">
        <div class="team-name"></div>
        <div class="team-menu">
           <Menu :data="menu" @menuEvent="menuEvent"/>
        </div>
      </div>
      <div class="team-main">
        <div class="team-main-content">
          <Folder :props="{teamId:id}" v-show="menu.current_menu_code === 'folder'"/>
          <Log  :props="{teamId:id}" v-show="menu.current_menu_code === 'log'"/>
          <Member  :props="{teamId:id}" v-show="menu.current_menu_code === 'member'"/>
          <Log :props="{teamId:id}" v-show="menu.current_menu_code === 'aaa'"/>
        </div>
        <div class="team-main-chat">
          <div class="message">
            <div class="time">2019-01-19</div>
            <div class="item other">
                <img class="head" src="../../assets/img/icon/head.png" alt="">
                <strong class="name">与西蒙</strong>
                <div class="text">3哈哈哈eqw23121312312ewqes2312</div>
            </div>
            <div class="time">19:05</div>
            <div class="item mine">
                <img class="head" src="../../assets/img/icon/head.png" alt="">
                <strong class="name">simoair</strong>
                <div class="text">3哈哈哈eqw23155555521312312ewqes2312</div>
            </div>
            <div class="item other">
                <img class="head" src="../../assets/img/icon/head.png" alt="">
                <strong class="name">与西蒙</strong>
                <div class="text">3哈哈哈12</div>
            </div>
          </div>
          <div class="inputfield"></div>
        </div>
      </div>
  </div>
</template>

<script>

import Menu from './../Public/Menu'
import Folder from './Team/Folder'
import Log from './Team/Log'
import Member from './Team/Member'
export default {
  name: 'team',
  props: ['id'],
  components: { Menu, Folder, Log, Member },
  data: function () {
    return {
      menu: {
        current_menu_code: 'folder',
        list: [
          {
            code: 'folder',
            name: '资料',
            noRead: true
          }, {
            code: 'log',
            name: '动态',
            noRead: false
          }, {
            code: 'member',
            name: '成员',
            noRead: true
          }, {
            code: 'aaa',
            name: '迭代',
            noRead: true
          }
        ]
      }

    }
  },
  created () {
    this.getTeam()
  },
  methods: {
    menuEvent (code) {
      this.current_menu_code = code
    },
    getTeam () {
      if (!this.getTeamMap()[this.id]) {
        this.$server.Team.detail({id: this.id})
      }
    },
    getTeamMap () {
      return this.$store.getters['team/getTeamMap']
    }
  },
  watch: {
    id (val, oldVal) {
      this.getTeam()
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../../assets/less/theme.less';  /*引入公共样式*/
.team{
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: stretch;
    position: absolute;
    >.team-head{
      width: 100%;
      flex:0 1 15px;
      padding: 10px 0;
      margin-top: 5px;
      box-sizing: content-box;
      position: relative;
      border-bottom: 1px dashed #303030;
      >.team-name{
        padding-left:10px;
        font-size: 16px;
      }
      >.team-menu{
        width: 300px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 30%;
      }
    }
    >.team-main{
      width: 100%;
      flex: 1 1 auto;
      display: flex;
      flex-flow: row ;
      align-items: stretch;
      >.team-main-content{
        flex: 1;
        border-right: 1px dashed #303030;
      }
      >.team-main-chat{
        width: 250px;
        display: flex;
        flex-flow: column;
        align-items: stretch;
        >.message{
          width: 100%;
          flex: 1 1 auto;
          padding: 10px;
          >.item{
            width: 100%;
            min-height: 60px;
            position: relative;
            overflow: hidden;//解决float情况下高度不能自适应
            margin-bottom: 15px;
            img.head{
                 width: 20px;
                 height: 20px;
                 position: absolute;
                 top: 5px;
            }
            .name{
              position: absolute;
              top: 0px;
              font-size: 12px;
              color: #999;
            }
            .text{
              max-width: 79%;
              background: #393939;
              padding: 4px 10px;
              border-radius: 5px;
              display: inline-block;
              word-break: break-all;
              margin-top: 18px;
            }
            &.other img.head{
              left: 0;
            }
            &.other .name{
              left: 25px;
            }
            &.other .text{
              margin-left: 25px;
              float: left;
            }
            &.mine img.head{
              right: 0;
            }
            &.mine .name{
              right: 25px;
            }
            &.mine .text{
              margin-right: 25px;
              float: right;
            }
          }
          >.time{
            width: 100%;
            text-align: center;
          }
        }
        >.inputfield{
          width: 100%;
          height: 50px;
          border-top: 1px dashed #303030;
        }
      }
    }
}
</style>
