<template>
  <div class="menu theme-shallow">
           <div class="user">
                <img class="head" src="../assets/img/icon/head.png" alt="">
           </div>
            <!-- <div class="userinfo">
              <ul>
                <li>个人中心</li>
                <li>帮助中心</li>
                <li>切换账户</li>
                <li>退出</li>
              </ul>
            </div> -->
           <ul>
               <li
                v-for="(item,index) in menu" 
                :key="index"
                :class="{'active': current_menu_code() == item.code}"
                @click="click(item.code)">
                   <img :src="`../static/img/icon/${item.icon_code}.png`" alt="">
                </li>
           </ul>
  </div>
</template>

<script>

export default {
  name: 'menus',
  data: function () {
    return {
      menu: [
        {
          code: 'vip',
          name: '会员',
          icon_code: 'vip'
        }, {
          code: 'home',
          name: '发现',
          icon_code: 'M'
        }, {
          code: 'folder',
          name: '文档',
          icon_code: 'folder'
        }, {
          code: 'team',
          name: '团队',
          icon_code: 'members'
        }, {
          code: 'link',
          name: '我的分享',
          icon_code: 'link'
        }, {
          code: 'delete',
          name: '回收站',
          icon_code: 'delete'
        }, {
          code: 'history',
          name: '问题反馈',
          icon_code: 'delete'
        }
      ]
    }
  },
  methods: {
    click (code) {
      this.$store.dispatch({
        type: 'menu/set_current_menu',
        code: code
      })
      switch (code) {
        case 'team':
          this.$server.Team.list({userId: 1})
          break
        case 'folder':
          if (!this.$store.getters['note/getPersonFalg']) {
            this.$server.Note.personNoteList({userId: 1})
          }
          break
      }
    },
    current_menu_code () {
      return this.$store.getters['menu/get_current_menu_code']
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../assets/less/theme.less';  /*引入公共21样式*/
.menu{
    width: 50px;
    height: 100%;
    float: left;
    color: #BBB;
    // border-right: 1px solid #222222;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    .user{
        width: 100%;
        height: 50px;
        margin-bottom: 10px;
        text-align: center;
        img.head{
            width: 35px;
            height: 35px;
            margin:10px 0 0 0;
            border-radius: 100px;
            border:3px solid #444;
            &:hover{
            border:3px solid #555;
            }
        }
    }
    .userinfo{
      width: 150px;
      height: 150px;
      z-index: 1112;
      position: absolute;
      left: 7px;
      top: 55px;
      background: #444;
      box-shadow: 2px 2px 1px #222;
      border-radius: 4px;
      &:before{
         content: '';
         position: absolute;
         top: -15px;
         left: 10px;
         border: 8px solid transparent;
         border-bottom:8px solid #444;
      }
      ul{
        li{
          width: 100%;
          padding: 8px 20px;
          cursor: default;
          &:hover{
            background: #555;
          }
          &:after{
            content:'〉';
            position: absolute;
            right:10px;
            color:#666;
          }
        }
      }
    }
    .logo{
        width: 40px;
        height: 40px;
        float: left;
    }
    >ul{
        li{
            width: 100%;
            height: 30px;
            text-align: center;
            margin-top: 1px;
            &.active{
                background: #444444;
                color: #fff;
                &:after{
                    content: '';
                    width: 0px;
                    height: 0px;
                    border-top: 7px solid transparent;
                    border-bottom: 7px solid transparent;
                    border-right: 7px solid #292929;
                    position: absolute;
                    right: 0;
                    top:10px;
                }
            }
            &:hover{ 
                cursor: default;
                background: #444444;
            }
            img{
                width: 18px;
                height: 18px;
                margin-top: 5px;
            }
        }
    }

}
</style>
