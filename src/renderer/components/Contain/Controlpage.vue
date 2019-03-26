<template>
  <div class="control-page" :style="controlpageStyle">
    <ul>
      <li>关闭 <span>ctrl + F4</span></li>
      <li>关闭右侧 <span>ctrl + right</span></li>
      <li>关闭其它 <span>ctrl + top</span></li>
      <li>关闭全部 <span>ctrl + bottom</span></li>
      <hr/>
      <li>打开文件位置</li>
      <li>在侧边栏打开</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Controlpage',
  props: {
    controlpageStyle: Object // 绑定数据的类型
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../../assets/less/theme.less';  /*引入公共样式*/
.control-page{
  width: 250px;
  background: #393939;
  position: absolute;
  top: 80px;
  left: 90px;
  border-radius: 3px;
  box-shadow: 2px 3px 3px #161616;
  color: #BBB;
  z-index: 112;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  overflow: hidden;
  ul{
    li{
      width: 100%;
      height: auto;
      padding: 3px 10px 3px 20px;
      cursor: default;
      &:hover{
        background: #444444;
      }
      span{
        float: right;
        color: #999999;
      }
    }
    hr{
      width: 100%;
      height: 0px;
      border:none;
      border-top: 1px solid #555555!important;
      margin: 4px 0;
    }
  }
}
</style>
