<template>
    <div class="folder">
        <div class="folder-head">
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
            <img class="" code="folder" src="../../../assets/img/icon/team-folder.png" alt="">
            <p>设计图</p>
        </li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'log',
  props: ['teamId']
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../../../assets/less/theme.less';  /*引入公共样式*/
.folder{
    width: 100%;
    height: 100%;
    >.folder-head{
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
</style>
