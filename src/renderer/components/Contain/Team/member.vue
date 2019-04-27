<template>
    <ul class="member">
        <li
        v-for="(item,index) in memberData()[this.props.teamId]?memberData()[this.props.teamId].user.list:[]" 
        :key="index">
            <img class="head" src="../../../assets/img/img/headImg.png" alt="">
            <div class="name">
                {{item['users.to_user_team.username']}}
                <span class="red" v-if="item.userId===item['users.id']">创建人</span>
                <span class="blue" v-if="item.userId!==item['users.id']">成员</span>
            </div>
            <div class="time">{{SimpleDateFormat(item['users.to_user_team.createdAt'])}}</div>
            <ul class="operate">
                <li class="red">删除</li>
            </ul>
        </li>
    </ul>
</template>

<script>

import { SimpleDateFormat } from './../../../common/util/date.js'
export default {
  name: 'log',
  props: ['props'],
  methods: {
    memberData () {
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
ul.member{
    width: 100%;
    height: 100%;
    padding: 20px 10px;
    >li{
        position: relative;
        margin-bottom: 10px;
        padding: 5px 10px;
        border-radius: 2px;
        background: #282828;
        cursor: default;
        &:hover{
            background: #333333;
            >ul.operate{
                display: block;
            }
        }
        >ul.operate{
            position: absolute;
            top: 18px;
            right: 20px;
            display: none;
          >li{
              padding: 0 5px;
              border-radius: 2px;
              cursor: pointer;
              &.red{
                  color: #FF6666;
              }
          }
        }
        img.head{
            width: 40px;
            height: 40px;
            border-radius: 100px;
        }
        .name{
            position: absolute;
            top: 10px;
            left: 60px;
            font-size: 16px;
            span{
                padding: 2px 5px;
                border-radius: 2px;
                margin-left: 10px;
                font-size: 12px;
                &.red{
                  color: #FF6666;
                  background: rgba(255,102,102, .3);
                }
                &.blue{
                  color: #66CCCC;
                  background: rgba(102,204,204, .3);
                }
            }
        }
        .time{
            position: absolute;
            left: 220px;
            top: 15px;
            color:#777;
        }
    }
}
</style>
