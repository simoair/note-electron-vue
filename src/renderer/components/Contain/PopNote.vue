<template>
  <div class="pop-note">
    <Tabs :data="{menu}">
        <template slot-scope="">
          <List :data="{menu}">
            <template slot-scope="">
                <Row class="noread at">
                    <img class="img" src="../../assets/img/icon/head.png" alt="">
                    <strong class="name">312</strong>
                    <time>2月8日</time>
                    <p class="text">分享志炫的新歌《妈，我回来啦》发布了，快来抢先听</p>
                </Row>
            </template>
          </List>
          <List :data="{menu}">
            <template slot-scope="">
                <Row class="noread at">3321</Row>
            </template>
          </List>
        </template>
    </Tabs>
  </div>
</template>

<script>
import Tabs from './../Public/Tabs'
import List from './../Public/List'
export default {
  name: 'Pop-note',
  components: {Tabs, List},
  data: function () {
    return {
      current_menu_code: 'at',
      menu: [
        {
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
        }
      ]
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../../assets/less/theme.less';  /*引入公共样式*/
.pop-note{
  width: 250px;
  height: 400px;
  background: #333;
  position: absolute;
  right: 10px;
  top: 40px;
  border-radius: 3px;
  box-shadow: 1px 2px 2px #161616;
  color: #BBB;
  z-index: 113;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;

  &:before{
    content:'';
    width: 0;
    height: 0;
    position: absolute;
    top: -10px;
    right: 63px;
    border-left:10px solid transparent;            
    border-right:10px solid transparent;            
    border-bottom:10px solid #333;     

  }
  .at{
        width: 100%;
        height: 50px;
        margin-bottom: 2px;
        cursor: default;
        position: relative;
        &:hover{
            opacity: 1;
            background: #383838;
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
        img{
            width: 20px;
            height: 20px;
            position: absolute;
            top: 10px;
            left: 10px;
        }
        .name{
            position: absolute;
            top: 5px;
            left: 35px;
            color: #ebebeb;
        }
        time{
          position: absolute;
          top: 5px;
          right: 20px;
          font-size: 11px;
        }
        .text{
            width: 80%;
            height: 16px;
            position: absolute;
            top: 25px;
            left: 35px;
            color: #999;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
    }
}
</style>
