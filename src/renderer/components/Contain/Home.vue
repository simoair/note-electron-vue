<template>
  <div class="home theme-deep">
      <Row class="menu">
        <ul>
          <li class="active">推荐</li>
          <li class="">社区</li>
          <li class="">关注</li>
          <li class="">社区</li>
          <li class="">关注</li>
          <li class="">社区</li>
          <li class="">关注32</li>
        </ul>
      </Row>
      <Row class="content">
          <Col span="16" class="content-l">
            <Row class="carousel">
              <Carousel/>
            </Row>
            <Row class="area"></Row>
            
          </Col>
          <Col span="8" class="content-r">
            <div class="area"></div>
          </Col>
      </Row>
  </div>
</template>

<script>

import Carousel from './Home/carousel'
export default {
  name: 'home',
  components: { Carousel },
  methods: {
    labelClick (event) {
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../../assets/less/theme.less';  /*引入公共样式*/
.home{
    width: 100%;
    height: 100%;
    padding: 20px 4%;
    .menu{
      color: #888;
      height: 30px;
      display: flex;
      justify-content: flex-start;
      ul{
        li{
          display: initial;
          margin: 0 5px 0 0;
          padding: 3px 10px;
          border-radius: 10px;
          cursor: default;
          &.active{
            color: #bbb;
            background: #333;
          }
          &:hover{
            color: #bbb;
            background: #333;
          }
        }
      }
    }
    .content{
      .content-l{
        .carousel{
          height: 150px;
        }
        .area{
          width: 100%;
          height: 300px;
          background: #262626;
          border-radius: 2px;
          margin-top: 10px;
        }
      }
      .content-r{
        padding-left: 10px;
        .area{
          width: 100%;
          height: 300px;
          background: #262626;
          border-radius: 2px;
        }
      }
    }
}
</style>
