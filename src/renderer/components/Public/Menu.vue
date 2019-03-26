<template>
    <ul>
      <li
      v-for="(item,index) in data.list" 
      :key="index"
      :class="{
        'active ': data.current_menu_code == item.code, 
        'noread': item.noRead
      }"
      @click="menuClick(item.code)">
        {{item.name}}
      </li>
    </ul>
</template>

<script>

export default {
  name: 'List',
  props: {
    data: Object
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
ul{
    width: 100%;
    height: 100%;
    display: flex;
    li{
      height: calc(100% - 2px); 
      display: -webkit-box;
      -webkit-box-orient: horizontal;
      -webkit-box-pack: center;
      -webkit-box-align: center;
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
          top: 20%;
          right: 15px;
          border-radius: 10px;
          background: red;

      }

    }
  }

</style>
