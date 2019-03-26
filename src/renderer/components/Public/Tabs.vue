<template>
  <div class="tabs">
    <ul class="menu">
      <li
      v-for="(item,index) in data.menu" 
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
        <slot >asd</slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Tabs',
  props: {
    data: {
      type: Object,
      default: {// 不传值使用默认数据
        menu: [{
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
        }]
      }
    }
  },
  data: function () {
    return {
      current_menu_code: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      let menu = this.$props.data.menu
      this.current_menu_code = menu.length ? menu[0].code : ''
    })
  },
  methods: {
    menuClick (code) {
      this.current_menu_code = code
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.tabs{
  width: 100%;
  height: 100%; 
  position: absolute;
  display: flex;
  flex-flow: column;
  align-items: stretch;
  ul.menu{
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
  }
}
</style>
