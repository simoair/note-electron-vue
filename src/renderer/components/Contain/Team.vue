<template>
  <div class="team theme-deep">
      <div class="team-head">
        <div class="team-menu">
           <Menu :data="menu"/>
        </div>
      </div>
      <div class="team-main">
        <div class="team-main-content">
          <div class="content-material">
             <div class="material-head">
               <!-- <div class="head-menu">
                 <img src="../../assets/img/icon/turnleft.png" alt="">
                </div> -->
                 <ul class="head-nav">
                   <li>全部</li>
                   <li>我的网盘</li>
                   <li>最新</li>
                   <li>新建文件夹</li>
                 </ul>
             </div>
             <ul class="material-box">
               <li>
                  <img class="" code="folder" src="../../assets/img/icon/team-folder.png" alt="">
                  <p>设计图</p>
               </li>
               <li>
                  <img class="" code="folder" src="../../assets/img/icon/team-folder.png" alt="">
                  <p>如何整理项目文件.pdf</p>
               </li>
               <li>
                  <img class="" code="folder" src="../../assets/img/icon/team-folder.png" alt="">
                  <p>如何整理项目文件.pdf</p>
               </li>
               <li>
                  <img class="" code="folder" src="../../assets/img/icon/team-folder.png" alt="">
                  <p>如何整理项目文件.pdf</p>
               </li>
               <li>
                  <img class="" code="folder" src="../../assets/img/icon/team-folder.png" alt="">
                  <p>如何整理项目文件.pdf</p>
               </li>
               <li>
                  <img class="" code="folder" src="../../assets/img/icon/team-folder.png" alt="">
                  <p>如何整理项目文件.pdf</p>
               </li>
             </ul>
          </div>
        </div>
        <div class="team-main-chat">
          <div class="message">
            <div class="time">2019-01-19</div>
            <div class="item other">
                <img class="head" src="../../assets/img/icon/head.png" alt="">
                <strong class="name">与西蒙</strong>
                <div class="text">3哈哈哈eqw23121312312ewqes2312</div>
            </div>
            <div class="time">19:05</div>
            <div class="item mine">
                <img class="head" src="../../assets/img/icon/head.png" alt="">
                <strong class="name">simoair</strong>
                <div class="text">3哈哈哈eqw23155555521312312ewqes2312</div>
            </div>
            <div class="item other">
                <img class="head" src="../../assets/img/icon/head.png" alt="">
                <strong class="name">与西蒙</strong>
                <div class="text">3哈哈哈12</div>
            </div>
          </div>
          <div class="inputfield"></div>
        </div>
      </div>
  </div>
</template>

<script>

import Menu from './../Public/Menu'
export default {
  name: 'team',
  props: ['id'],
  components: { Menu },
  data: function () {
    return {
      menu: {
        current_menu_code: 'at',
        list: [
          {
            code: 'at',
            name: '资料',
            noRead: true
          }, {
            code: 'message',
            name: '动态',
            noRead: false
          }, {
            code: 'note',
            name: '成员',
            noRead: true
          }, {
            code: 'note',
            name: '迭代',
            noRead: true
          }
        ]
      }

    }
  },
  methods: {
    labelClick (event) {
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../../assets/less/theme.less';  /*引入公共样式*/
.team{
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: stretch;
    position: absolute;
    >.team-head{
      width: 100%;
      flex:0 1 15px;
      padding: 10px 0;
      margin-top: 5px;
      box-sizing: content-box;
      position: relative;
      border-bottom: 1px dashed #303030;
      >.team-menu{
        width: 300px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 20%;
      }
    }
    >.team-main{
      width: 100%;
      flex: 1 1 auto;
      display: flex;
      flex-flow: row ;
      align-items: stretch;
      >.team-main-content{
        flex: 1;
        border-right: 1px dashed #303030;
        >.content-material{
          width: 100%;
          height: 100%;
          >.material-head{
            width: 100%;
            height: 30px;
            border-bottom:1px dashed #333;
            box-sizing: border;
            >.head-menu{
              img{
                width: 16px;
                height: 16px;
                padding: 6px;
                box-sizing: content-box;
                float: left;
              }
            }
            >ul.head-nav{
              height: 30px;
              line-height: 30px;
              color: #888;
              font-size: 11px;
              margin-left: 10px;
              li{
                padding: 0 8px 0 2px;
                float: left;
                cursor: pointer;
                position: relative;
                &:hover{
                  color: #bbb;
                }
                &::before{
                  content: '›';
                  font-size: 16px;
                  position: absolute;
                  right: 1px;
                }
              }
            }
          }
          >ul.material-box{
            width: 100%;
            height:calc( 100% - 30px);
            padding-top: 20px;
            -moz-user-select: none;
            -khtml-user-select: none;
            user-select: none;
            >li{
              width: 90px;
              float: left;
              margin: 10px 5px 0 5px;
              cursor: pointer;
                opacity: .9;
              &:hover{
                opacity: 1;
              }
              img{
                width: 60%;
                height: 40px;
                margin: 0 auto;
                display: inherit;
              }
              p{
                width: 100%;
                height: 30px;
                line-height: 14px;
                text-align: center;
                margin-top: 5px;
              }
            }
          }
        }
      }
      >.team-main-chat{
        width: 250px;
        display: flex;
        flex-flow: column;
        align-items: stretch;
        >.message{
          width: 100%;
          flex: 1 1 auto;
          padding: 10px;
          >.item{
            width: 100%;
            min-height: 60px;
            position: relative;
            overflow: hidden;//解决float情况下高度不能自适应
            margin-bottom: 15px;
            img.head{
                 width: 20px;
                 height: 20px;
                 position: absolute;
                 top: 5px;
            }
            .name{
              position: absolute;
              top: 0px;
              font-size: 12px;
              color: #999;
            }
            .text{
              max-width: 79%;
              background: #393939;
              padding: 4px 10px;
              border-radius: 5px;
              display: inline-block;
              word-break: break-all;
              margin-top: 18px;
            }
            &.other img.head{
              left: 0;
            }
            &.other .name{
              left: 25px;
            }
            &.other .text{
              margin-left: 25px;
              float: left;
            }
            &.mine img.head{
              right: 0;
            }
            &.mine .name{
              right: 25px;
            }
            &.mine .text{
              margin-right: 25px;
              float: right;
            }
          }
          >.time{
            width: 100%;
            text-align: center;
          }
        }
        >.inputfield{
          width: 100%;
          height: 50px;
          border-top: 1px dashed #303030;
        }
      }
    }
}
</style>
