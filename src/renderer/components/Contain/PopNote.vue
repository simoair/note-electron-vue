<template>
  <div class="pop-note">
    <ul class="menu">
      <li
      v-for="(item,index) in menu" 
      :key="index"
      :class="{
        'active ': current_menu_code == item.code, 
        'noread': item.noRead
      }"
      @click="menuClick(item.code)">
        {{item.name}}
      </li>
    </ul>
    <div class="main">
      <ul v-show="current_menu_code==='at'">
        <li 
          v-for="(item,index) in menu" 
          :key="index"
          class="at">
            <img class="img" src="../../assets/img/icon/head.png" alt="">
            <strong class="name">312</strong>
            <time>2月8日</time>
            <p class="text">分享志炫的新歌《妈，我回来啦》发布了，快来抢先听</p>
        </li>
        <li 
          v-for="(item,index) in menu" 
          :key="index"
          class="at">
            <img class="img" src="../../assets/img/icon/head.png" alt="">
            <strong class="name">312</strong>
            <time>2月8日</time>
            <p class="text">分享志炫的新歌《妈，我回来啦》发布了，快来抢先听</p>
        </li>
        <li 
          v-for="(item,index) in menu" 
          :key="index"
          class="at">
            <img class="img" src="../../assets/img/icon/head.png" alt="">
            <strong class="name">312</strong>
            <time>2月8日</time>
            <p class="text">分享志炫的新歌《妈，我回来啦》发布了，快来抢先听</p>
        </li>
      </ul>
      <ul v-show="current_menu_code==='message'">
        <li 
          v-for="(item,index) in menu" 
          :key="index"
          class="at">
            <img class="img" src="../../assets/img/icon/head.png" alt="">
            <strong class="name">312</strong>
            <time>2月8日</time>
            <p class="text">分享志炫的新歌《妈抢先听</p>
        </li>
      </ul>
      <ul v-show="current_menu_code==='note'">
        <li 
          v-for="(item,index) in menu" 
          :key="index"
          class="at">
            <img class="img" src="../../assets/img/icon/head.png" alt="">
            <strong class="name">312</strong>
            <time>2月8日</time>
            <p class="text">分享志歌《妈，我回来啦》发布了，快来抢先听</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import List from './../Public/List'
export default {
  name: 'Pop-note',
  components: {List},
  data: function () {
    return {
      current_menu_code: 'at',
      menu: [
        {
          code: 'at',
          name: '@我',
          noRead: true
        }, {
          code: 'message',
          name: '私信',
          noRead: false
        }, {
          code: 'note',
          name: '通知',
          noRead: true
        }
      ]
    }
  },
  methods: {
    menuClick (code) {
      this.current_menu_code = code
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../../assets/less/theme.less';  /*引入公共样式*/
.pop-note{
  width: 250px;
  height: 400px;
  background: #333;
  position: absolute;
  right: 10px;
  top: 40px;
  border-radius: 3px;
  box-shadow: 1px 2px 2px #161616;
  color: #BBB;
  z-index: 113;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  display: flex;
  flex-flow: column;
  align-items: stretch;

  &:before{
    content:'';
    width: 0;
    height: 0;
    position: absolute;
    top: -10px;
    right: 63px;
    border-left:10px solid transparent;            
    border-right:10px solid transparent;            
    border-bottom:10px solid #333;     

  }
  >ul.menu{
    width: 100%;
    display: flex;
    padding: 10px;
    li{
      height: 20px;
      flex: 1;
      text-align: center;
      box-sizing: content-box;
      color: #999;
      position: relative;
      cursor: default;
      &.active{
        color: #ebebeb;
        border-bottom:3px solid #666;
      }
      &:hover{
        color: #ebebeb;
      }
      &.noread:before{
          content: '';
          width: 5px;
          height: 5px;
          position: absolute;
          top: -2px;
          right: 15px;
          border-radius: 10px;
          background: red;
      }

    }
  }
  .main{
    width: 100%;
    flex: 1 1 auto;
    position: relative;
    overflow: auto;
    >ul{
        li.at{
          width: 100%;
          height: 50px;
          margin-bottom: 2px;
          cursor: default;
          position: relative;
          &:hover{
              opacity: 1;
              background: #383838;
          }
          &.noread:before{
              content: '';
              width: 5px;
              height: 5px;
              position: absolute;
              top: 5px;
              right: 10px;
              border-radius: 10px;
              background: red;

          }
          img{
              width: 20px;
              height: 20px;
              position: absolute;
              top: 10px;
              left: 10px;
          }
          .name{
              position: absolute;
              top: 5px;
              left: 35px;
              color: #ebebeb;
          }
          time{
            position: absolute;
            top: 5px;
            right: 10px;
            font-size: 10px;
            color:#666;
          }
          .text{
              width: 80%;
              height: 16px;
              position: absolute;
              top: 25px;
              left: 35px;
              color: #999;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
          }
        }
    }

  }
  
}
</style>
