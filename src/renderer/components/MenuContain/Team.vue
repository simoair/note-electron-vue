<template>
  <div class="team">
        <ul class="label">
            <li v-for ="item in teamList()" :key ="item.id"  class ="noread" @dblclick="dblclick(item)">
                <img class="portrait" src="../../assets/img/icon/head.png" alt="">
                <div class="team-name">{{item.name}}</div>
                <p class="team-introduce">{{item.info}}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
import {dblEvent} from './util.js'
export default {
  name: 'Team',
  data: function () {
    return {

    }
  },
  methods: {
    teamList () {
      return this.$store.getters['team/getTeamList']
    },
    dblclick (data) {
      // 判断标签栏是否已存在
      dblEvent.bind(this)('team', data)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../../assets/less/theme.less';  /*引入公共样式*/

.team{
    width: calc(100% + 20px);
    margin-left: -10px;
    height: 100%;
    padding: 10px 0;
    color: #ebebeb;
    ul.label{
      >li{
          width: 100%;
          height: 60px;
          margin-bottom: 2px;
          position: relative;
          opacity: .9;
          cursor: default;
          &.active{
              background: #252525;
              opacity: 1;
          }
          &:hover{
              opacity: 1;
              background: #252525;
          }
          img.portrait{
              width: 20px;
              height: 20px;
              position: absolute;
              top: 10px;
              left: 10px;
          }
          .team-name{
              font-size: 14px;
              position: absolute;
              top: 5px;
              left: 35px;
          }
          .team-introduce{
              width: calc(100% - 40px);
              height: 32px;
              color: #777;
              position: absolute;
              top: 25px;
              left: 35px;
              font-size: 11px;
              line-height: 16px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
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
      }
    }
}
</style>
