<template>
  <div class="home">
        <ul class="label">
            <li class="active">
                <img class="img" src="../../assets/img/icon/skin.png" alt="">
                <p>推荐</p>
            </li>
            <li class="">
                <img class="img" src="../../assets/img/icon/skin.png" alt="">
                <p>社区</p>
            </li>
            <li class="">
                <img class="img" src="../../assets/img/icon/skin.png" alt="">
                <p>关注</p>
            </li>
            <li class="">
                <img class="img" src="../../assets/img/icon/skin.png" alt="">
                <p>模板</p>
            </li>
            <li class="">
                <img class="img" src="../../assets/img/icon/skin.png" alt="">
                <p>教程</p>
            </li>
            <li class="">
                <img class="img" src="../../assets/img/icon/skin.png" alt="">
                <p>推荐</p>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'History'
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../../assets/less/theme.less';  /*引入公共样式*/

.home{
    width: 100%;
    height: 100%;
    padding: 10px 0;
    ul.label{
        font-size: 11px;
        padding: 0 10px;
        li{
            width: 33%;
            height: 60px;
            color: #999;
            float: left;
            text-align: center;
            border-radius: 2px;
            color: #777;
            position: relative;
            cursor: pointer;
            img{
                width: 25px;
                height: 25px;
                margin-top: 5px;
                opacity: .4;
            }
            &.active{
                background: #333;
                &:after{
                    content: '';
                //   width: 8px;
                //   height: 8px;
                //   border-radius: 8px;
                //   background: #292929;
                //   position: absolute;
                //   left: 3px;
                //   top: 5px;
                }
                img{
                    opacity: 1;
                }
            }
            &:hover{
                color: #ebebeb;
                background: #333;
                box-shadow: 2px 2px 3px #222;
                img{
                    opacity: 1;
                }
            }
        }
    }
}
</style>
