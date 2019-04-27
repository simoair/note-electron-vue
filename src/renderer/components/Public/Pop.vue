<template>
    <ul class="pop-right" ref="pop">
        <li
        v-for="(item) in pop()" 
        :key="item.id"
        @click="item.callback"
        :disable="item.disable">
        {{item.title}}
        </li>
        <slot></slot>
    </ul>
</template>

<script>

export default {
  name: 'Pop',
  props: {
    pop: {
      type: Function
    }
  },
  computed: {
    listenPop () {
      return this.$store.getters['public/getPop']
    }
  },
  methods: {
    updateView (flag) {
      if (flag === false) {
        Object.assign(this.$refs.pop.style, {}, {display: 'none'})
      }
    }
  },
  watch: {
    listenPop: {
      handler: function (val, oldVal) {
        this.updateView(val.isShow)
      },
      deep: true // 深度
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
ul.pop-right{
    width: 100px;
    padding: 10px 0;
    position: absolute;
    background: #333;
    border-radius: 2px;
    box-shadow: 2px 2px 2px #111;
    color: #BBB;
    display: none;
    z-index: 1111;
    li{
        width: 100%;
        height: auto;
        padding: 5px 10px 5px 15px;
        cursor: default;
        &[disable='true']{
            color:#777;
            cursor: not-allowed;
            pointer-events:none;
        }
        &:hover{
          color: #fff;
        }
        &:not([disable='true']):hover{
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
</style>
