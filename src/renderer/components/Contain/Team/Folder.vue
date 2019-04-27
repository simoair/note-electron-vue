<template>
    <div class="folder" @mouseup.stop="onClick($event,'panel')">
        <div class="head-menu">
            <img src="../../../assets/img/icon/back.png" alt="" @click="turnBack()">
        </div>
        <ul class="material-box">
            <li
            v-for="(item,index) in folderData()[this.props.teamId]?folderData()[this.props.teamId].note.currentItem.children:[]" 
            :key="index"
            @dblclick="dblclick(item)">
                <img class="" code="folder" :src="`../../static/img/icon/${item.fileType == 0 ? 'team-folder' : 'file'}.png`" alt=""
                @mouseup.stop="onClick($event,'folder')">
                <p>{{item.noteName}}</p>
            </li>
        </ul>
      <Pop :pop="popPanel.bind(this)" ref="pop"/>
    </div>
</template>

<script>
import {dblEvent as utilDblEvent, pop as utilPop} from './../../Util/index.js'
import Pop from './../../Public/Pop'
export default {
  name: 'folder',
  props: ['props'],
  components: { Pop },
  data () {
    return {
      $selectEl: null,
      disablePop: {
        code: 'panel',
        current: [],
        panel: [false, true, true],
        folder: [true, false, false]
      }
    }
  },
  computed: {
    listenNote () {
      return this.$store.getters['team/getTeamMap']
    }
  },
  methods: {
    dblclick (data) {
      if (data.fileType === 0) { // 文件夹
        this.$store.dispatch('team/updateCurrentItem', {teamId: this.props.teamId, noteId: data.id})
      } else { // 文件
        // 判断标签栏是否已存在
        utilDblEvent.bind(this)('note', {
          id: data.id,
          type: 'team',
          noteName: data.noteName.length <= 5 ? data.noteName : `${data.noteName.substring(0, 5)}...`
        })
      }
    },
    onClick (event, code) {
      if (event.button === 2) {
        this.disablePop['code'] = code
        this.disablePop.current = this.disablePop[this.disablePop['code']]
        utilPop(event, this.$refs.pop, {top: 35, left: 0})
        this.$selectEl = 1
      }
    },
    turnBack (pid) {
      if (!pid) { // 不存在指定地址
        let pid = this.folderData()[this.props.teamId].note.currentItem.pid
        if (pid !== -1) {
          this.$store.dispatch('team/updateCurrentItem', {teamId: this.props.teamId, noteId: pid})
        }
      }
    },
    folderData () {
      return this.$store.getters['team/getTeamMap']
    },
    popPanel () {
      const _this = this
      return [{
        title: '新建文件夹',
        disable: _this.disablePop.current[0],
        callback: function () {
          _this.turnBack()
        }
      }, {
        title: '重命名',
        disable: _this.disablePop.current[1],
        callback: function () {

        }
      }, {
        title: '删除',
        disable: _this.disablePop.current[2],
        callback: function () {

        }
      }]
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../../../assets/less/theme.less';  /*引入公共样式*/
.folder{
    width: 100%;
    height: 100%;
    position: relative;
    >.head-menu{
      position: absolute;
        img{
          width: 16px;
          height: 16px;
          padding: 6px;
          box-sizing: content-box;
          float: left;
          opacity: .7;
          border-radius: 100px;
          cursor: pointer;
          &:hover{
            opacity: 1;
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
    padding-top: 30px;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    >li{
        width: 80px;
        float: left;
        // margin: 10px 5px 0 5px;
        cursor: pointer;
        opacity: .9;
        &:hover{
        opacity: 1;
        }
        img{
        width: 50%;
        height: 35px;
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
