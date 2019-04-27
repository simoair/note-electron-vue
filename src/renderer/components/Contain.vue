<template>
  <div class="contain theme-deep">
      <div class="top">
        <ul class="label" ref = "menuLabel">
          <li 
            v-for="(item,index) in menu.list" 
            :key="index"
            :data-url = "item.url"
            v-bind:class="{'active':menu.index == index}"  
            @mouseup="labelClick($event, index)">
            <div class="close" @click.stop="labelClose(index)"></div>
            <img :src="`../static/img/icon/${item.icon_code}.png`" alt="">
            {{item.name}}
          </li>
        </ul>
        <div class="menu noread">
           <img @click="updatePopNoteFlag()" src="../assets/img/icon/message.png" alt="">
           <img  src="../assets/img/icon/min.png" alt="">
           <img  src="../assets/img/icon/max.png" alt="">
           <img  src="../assets/img/icon/close.png" alt="">
        </div>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
      <Controlpage ref="controlpage" :controlpageStyle="controlpageStyle"/>
      <PopNote v-show="popNoteFlag"/>
  </div>
</template>

<script>

import Controlpage from './Contain/Controlpage'
import PopNote from './Contain/PopNote'
export default {
  name: 'contain',
  components: { Controlpage, PopNote },
  data: function () {
    return {
      menu: {
        index: 0,
        list: []
      },
      controlpageStyle: {
        left: 0,
        top: 0,
        opacity: 1,
        display: 'none'
      },
      popNoteFlag: false
    }
  },
  created () {

  },
  mounted () {
    this.$nextTick(() => {
      this.menu = this.$store.getters['panel/getMenu']
      this.turnView()
    })
  },
  computed: {
    listenMenu () {
      return this.$store.getters['panel/getMenu']
    }
  },
  methods: {
    labelClose (index) {
      this.$store.commit('panel/close', index)
    },
    labelClick (event, index) {
      if (event.button === 0) { // 左键
        this.$store.commit('panel/turnTo', index)
        Object.assign(this.controlpageStyle, this.controlpageStyle, {
          opacity: 0,
          display: 'none'
        })
      } else { // 右键
        let controlpage = this.$refs.controlpage
        Object.assign(this.controlpageStyle, this.controlpageStyle, {
          left: `${event.pageX}px`,
          top: `${event.pageY - controlpage.$parent.$el.offsetTop}px`,
          opacity: 1,
          display: 'block'
        })
      }
    },
    turnView () {
      this.$router.push(this.menu.list[this.menu.index] ? this.menu.list[this.menu.index].url : '/')
    },
    updatePopNoteFlag () {
      this.popNoteFlag = !this.popNoteFlag
    }
  },
  watch: {
    listenMenu: {
      handler: function (val, oldVal) {
        this.turnView()
      },
      deep: true // 深度
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.contain{
    width: calc(100% - 270px);
    height: 100%;
    float: right;
    color: #bbb;
    background-image: url(../assets/img/icon/empty.png);
    background-repeat: no-repeat;
    background-position: center;
      >.top{
        width: 100%;
        height: 25px;
        margin-top: 10px;
        border-bottom:1px solid #333333;
        position: relative;
        -moz-user-select: none;
        -khtml-user-select: none;
        user-select: none;
        ul.label{
            width: calc(100% - 100px);
            height: 30px;
            position: absolute;
            -webkit-app-region:no-drag;
            -webkit-app-region:drag;
            li{
              height: 24px;
              max-width: 100px;
              min-width: 30px;
              line-height: 25px;
              float: left;
              background: #303030;
              position: relative;
              margin-right: 1px;
              margin-top: 1px;
              box-sizing: content-box;
              padding: 0 25px 0 25px;
              border-top-left-radius: 2px;
              border-top-right-radius: 2px;
              -webkit-app-region:no-drag;
              color: #888;
              cursor: default;
              // &[data-type = "add"]{
              //   padding: 0px 0 0 0px;
              //   height: 22px;
              //   width: 22px;
              //   min-width: 22px;
              //   border-radius: 2px;
              //   margin:1px;
              // }
              // &[data-type = "add"]:after{
              //   content: '+';
              //   opacity: 1;
              //   color: #999;
              //   position: relative;
              //   margin: -2px 0 0 11px;
              //   top:-2px;
              // }
              &.active{
                background: #191919;
                color: #ebebeb;
                .close{
                  opacity: 1;
                }
                img{
                  opacity: 1;
                }
              }
              &:hover .close{
                opacity: 1;
              }
              .close{
                width: 20px;
                height: 100%;
                position: absolute;
                right: 0px;
                top:0px;
                opacity: 0;
                cursor: pointer;
                &:after{
                  content: '×';
                  font-size: 16px;
                  position: absolute;
                  top: -1px;
                  left: 3px;
                }
              }
              img{
                width: 14px;
                height: 14px;
                position: absolute;
                left: 5px;
                top:4px;
                opacity: .6;
                pointer-events: none;//不可使用状态
              }
            }
        }
        .menu{
          height: 100%;
          position: absolute;
          right: 0;
          vertical-align: middle;
          line-height: 220%;
          &.noread:before{
              content: '';
              width: 5px;
              height: 5px;
              top: 0px;
              left: 12px;
              position: absolute;
              border-radius: 10px;
              background: red;
          }
          img{
              width: 15px;
              height: 15px;
              margin-right: 5px;
              cursor: pointer;
              position: relative;
              opacity: .8;
              &:hover{
                opacity: 1;
              }
          }
        }
      }
      
      >.main{
        width: 100%;
        height: calc(100% - 35px);
        position: relative;
      }
}
</style>
