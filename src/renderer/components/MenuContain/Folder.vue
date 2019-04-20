<template>
  <div class="folder">
      <ul>
          <li
          v-for="(item) in getNoteData().currentItem.children" 
          :key="item.id"
          @dblclick="dblclick(item)">
            <img class="" code="folder" :src="`../../static/img/icon/${item.fileType == 0 ? 'team-folder' : 'file'}.png`" alt="">
            <p>{{item.noteName}}</p>
          </li>
      </ul>
      <!-- <ul>
          <li>
            <img class="" code="folder" src="../../assets/img/icon/team-folder.png" alt="">
            <p>设计图.pdf</p>
          </li>
          <li>
            <img class="" code="folder" src="../../assets/img/icon/team-folder.png" alt="">
            <p>如何整理项目文件.pdf</p>
          </li>
          <li>
            <img class="" code="file" src="../../assets/img/icon/file.png" alt="">
            <p>如何整理项目文件.pdf</p>
          </li>
          <li>
            <img class="" code="folder" src="../../assets/img/icon/team-folder.png" alt="">
            <p>如何整理项目文件.pdf</p>
          </li>
      </ul> -->
  </div>
</template>

<script>

export default {
  name: 'Team',
  methods: {
    dblclick (data) {
      if (data.fileType === 0) { // 文件夹
        this.$store.dispatch('note/updatePersonCurrentItem', data.id)
      } else { // 文件
        // 判断标签栏是否已存在
        let isExit = false
        this.$store.getters['panel/getMenu'].list.forEach((item, index) => {
          if (item.code === 'note' && item.id === data.id) {
            isExit = true
            this.$store.dispatch('panel/turnTo', index)
            return false
          }
        })
        if (!isExit) {
          this.$store.dispatch('panel/add', {
            code: 'note',
            id: data.id,
            noteName: data.noteName.length <= 5 ? data.noteName : `${data.noteName.substring(0, 5)}...`
          })
        }
      }
    },
    getNoteData () {
      return this.$store.getters['note/getPersonData']
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../../assets/less/theme.less';  /*引入公共样式*/

.folder{
    width: calc(100% + 20px);
    margin-left: -10px;
    height: 100%;
    padding: 10px;
    color: #ebebeb;
    
    >ul{
        li{
            width: 33.33%;
            height: 70px;
            float: left;
            padding: 0 2px;
            cursor: pointer;
            opacity: .9;
            &:hover{
                opacity: 1;
            }
            img{
                width: 50%;
                height: 25px;
                margin: 0 auto;
                display: inherit;
            }
            p{
                width: 100%;
                height: 30px;
                line-height: 14px;
                text-align: center;
                margin-top: 5px;
                color: #bbb;
                font-size: 11px;
            }
        }
    }
}
</style>
