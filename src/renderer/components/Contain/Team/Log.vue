<template>
    <ul class="log">
        <li
        v-for="(item,index) in logData()[this.props.teamId]?logData()[this.props.teamId].log.list:[]" 
        :key="index"
        :type="item.status">
            <div class="type red"></div>
            <div class="detail">{{item.content}}</div>
            <div class="user">{{item.user.username}}</div>
            <div class="time">{{SimpleDateFormat(item.createdAt)}}</div>
        </li>
    </ul>
</template>

<script>

import { SimpleDateFormat } from './../../../common/util/date.js'
export default {
  name: 'log',
  props: ['props'],
  methods: {
    logData () {
      return this.$store.getters['team/getTeamMap']
    },
    SimpleDateFormat (data) {
      return SimpleDateFormat(data)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../../../assets/less/theme.less';  /*引入公共样式*/
ul.log{
    width: 100%;
    height: 100%;
    padding: 2% 4%;
    overflow: auto;
    li{
        width: 100%;
        height: 40px;
        padding: 10px 10px;
        background: #292929;
        border-radius: 2px;
        margin-top: 10px;
        position: relative;
        &:before{
            content: '';
            width: 8px;
            height: 8px;
            position: absolute;
            left: 10px;
            top: 10px;
            border-radius: 10px;
        }
        &[type='0']:before{
            background: #99CC66;
        }
        &[type='1']:before{
            background: #FF6666;
        }
        &[type='2']:before{
            background: #66CCCC;
        }
        .detail{
            position: absolute;
            left: 120px;
            top: 10px;
            color: #999;
        }
        .user{
            position: absolute;
            left: 40px;
            top: 10px;
            color: #66CCCC;
            opacity: .7;
            cursor: pointer;
            &:hover{
                opacity: 1;
            }
        }
        .time{
            position: absolute;
            right: 20px;
            top: 10px;
            color:#777;
        }
    }
}
</style>
