<template>
    <div class="log">
        {{logData()[this.props.teamId]?logData()[this.props.teamId].note.tree:[]}}
    </div>
</template>

<script>

export default {
  name: 'log',
  props: ['props'],
  methods: {
    logData () {
      return this.$store.getters['team/getTeamMap']
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../../../assets/less/theme.less';  /*引入公共样式*/
.log{
    width: 100%;
    height: 100%;
}
</style>
