<template>
  <div class="history">
      <ul class="may">
        <li><span>1</span>即刻电音
        </li>
        <li><span>2</span>身临其境
        </li>
        <li><span>3</span>朋友的新动态
        </li>
        <li><span>4</span>大家都在搜
        </li>
        <li><span>5</span>科技宅发挥余热
        </li>
        <li><span>6</span>花花卡
        </li>
        <li><span>7</span>if u
        </li>
        <li><span>8</span>show
        </li>
      </ul>
      <p>搜索历史</p> 
      <ul class="history">
        <li>即刻电音</li><li>花魁</li><li>朋友的新动态</li><li>maybe</li>
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
.history{
  width: 100%;
  height: 100%;
  padding: 0 10px;
    p{
        color: #ebebeb;
    }
    ul.may{
        height:130px;
        li{
            width:49%;
            padding: 5px 0;
            color:#999;
            &:nth-of-type(2n+1){
                float:left;
            }
            &:nth-of-type(2n){
                float:right;
            }
            &:nth-of-type(-n+3) span{
                color:#FF6666;
            }
            span{
                padding: 0 6px 0 0;
                color:#777;
                
            }
        }
    }
    ul.history{
        padding:10px 0;
        li{
            padding: 0 7px;
            background: #393939;
            color: #999;
            float: left;
            border-radius: 2px;
            margin: 0 2px 5px 0;
            cursor: default;
            &:hover{
                background: #444;
            }
        }
    }
}
</style>
