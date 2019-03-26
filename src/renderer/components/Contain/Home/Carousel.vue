<template>
    <div class="carousel">
        <Col span="15" class="carousel-l">
            <img class="img"
            v-for="(item,index) in imgs.list" 
            :key="index"
            :src="item.url" alt="">
        </Col>
        <Col ref="carouselR" span="9" class="carousel-r">
            <img class="img" src='../../../../../static/img/carousel/a2.png'>
            <img class="img" src='../../../../../static/img/carousel/a4.png'>
        </Col>
    </div>
</template>

<script>

export default {
  name: 'carousel',
  data: function () {
    return {
      imgs: {
        index: 0,
        list: [
          {url: '../../../../../static/img/carousel/a3.png'},
          {url: '../../../../../static/img/carousel/a1.png'},
          {url: '../../../../../static/img/carousel/a2.png'},
          {url: '../../../../../static/img/carousel/a3.png'}
        ]
      }
    }
  },
  mounted () {
    this.carousel()
  },
  methods: {
    carousel () {
      // let carouselR = this.$refs.carouselR.$el
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.carousel{
    width: 100%;
    height: 100%;
    border-radius: 4px;
    opacity: .8;
    img{
      //mix-blend-mode: overlay;
    }
    &-l{
        height: 100%;
        display: flex;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
            float: left;
        }
    }
    &-r{
        height: 100%;
        overflow: hidden;
        img{
            width: calc( 100% - 2px);
            height: calc( 50% - 1px);
            float: left;
            margin: 0 0 2px 2px;
        }
    }
}
</style>
