<template>
  <div class="team">
        <ul class="label">
            <li class="active">
                <img class="portrait" src="../../assets/img/icon/head.png" alt="">
                <div class="team-name">simoair有效协作</div>
                <p class="team-introduce">
                    我们会定期对 W3School 的 CSS 参考手册进行浏览器测试。CSS3 选择器
                </p>
            </li>
            <li class="noread">
                <img class="portrait" src="../../assets/img/icon/head.png" alt="">
                <div class="team-name">simoair有效协作</div>
                <p class="team-introduce">
                    我们会定期
                </p>
            </li>
            <li class="">
                <img class="portrait" src="../../assets/img/icon/head.png" alt="">
                <div class="team-name">simoair有效协作</div>
                <p class="team-introduce">
                    我们会定期对 W3Scho
                </p>
            </li>
            <li class="">
                <img class="portrait" src="../../assets/img/icon/head.png" alt="">
            </li>
            <li class="">
                <img class="portrait" src="../../assets/img/icon/head.png" alt="">
            </li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'Team'
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
          opacity: .7;
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
              left: 35px;font-size: 11px;
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
