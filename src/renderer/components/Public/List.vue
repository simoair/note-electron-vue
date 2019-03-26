<template>
    <ul>
      <li 
        v-for="(item,index) in data.menu" 
        :key="index">
        <slot></slot>
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
  position: absolute;
}

</style>
