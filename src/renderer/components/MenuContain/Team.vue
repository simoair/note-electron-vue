<template>
  <div class="team" @mouseup.stop="onClick($event,'panel')">
        <ul class="label">
            <li v-for ="item in teamList()" :key ="item.id"  class ="noread" 
            @dblclick="dblclick(item)"
            @mouseup.stop="onClick($event,'team',item)">
                <img class="portrait" src="../../assets/img/icon/head.png" alt="">
                <div class="team-name" @blur="onBlur($event,item)">{{item.name}}</div>
                <p class="team-introduce">{{item.info||'暂无简介'}}</p>
            </li>
        </ul>
        <Pop :pop="popPanel.bind(this)" ref="pop"/>
    </div>
</template>

<script>
import {dblEvent as utilDblEvent, pop as utilPop, selectText as utilSelectText} from './../Util/index.js'
import Pop from './../Public/Pop'
export default {
  name: 'Team',
  components: { Pop },
  data: function () {
    return {
      select: {
        $el: null,
        text: null,
        data: null
      },
      disablePop: {
        code: 'panel',
        current: [],
        panel: [false, true, true],
        team: [true, false, false]
      }
    }
  },
  methods: {
    teamList () {
      return this.$store.getters['team/getTeamList']
    },
    dblclick (data) {
      // 判断标签栏是否已存在
      utilDblEvent.bind(this)('team', data)
    },
    onClick (event, code, data) {
      if (event.button === 2) {
        this.disablePop['code'] = code
        this.disablePop.current = this.disablePop[this.disablePop['code']]
        utilPop(event, this.$refs.pop)
        this.select.$el = event.target.parentNode.children[1]
        console.log(event, this.select.$el)
        this.select.data = data
      }
    },
    onBlur (event, data) {
      const $name = event.target
      Object.assign(event.target, {contentEditable: false})
      if (this.select.text !== $name.outerText) { // 文件名变动
        data = JSON.parse(JSON.stringify(data))// 以防修改源数据
        // data.noteName = $name.outerText
        // data.fileType = 0
        // this.$server.Note.folderUpdate(data).then(ret => {
        //   this.$toast(ret.msg)
        // })
      }
    },
    add () { // 新建群
    },
    popPanel () {
      const _this = this
      return [{
        title: '新建团队',
        disable: _this.disablePop.current[0],
        callback: function () {
          _this.add()
        }
      }, {
        title: '重命名',
        disable: _this.disablePop.current[1],
        callback: function () {
          _this.$store.dispatch('public/updatePop', false)
          _this.select.$el.focus()
          _this.select.text = _this.select.$el.outerText
          Object.assign(_this.select.$el, {contentEditable: true})
          utilSelectText(_this.select.$el)
        }
      }, {
        title: '退出该群',
        disable: _this.disablePop.current[2],
        callback: function () {
          _this.$server.Note.delete({id: _this.select.data.id, userId: 1}).then(ret => {
            _this.$toast(ret.msg)
            if (ret.code === 200) {
              _this.$server.Note.personNoteList()
            } else {
            }
          })
        }
      }]
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../../assets/less/theme.less';  /*引入公共样式*/

.team{
    width: 100%;
    height: 100%;
    padding: 10px 0;
    color: #ebebeb;
    position: absolute;
    ul.label{
        height: 100%;
        overflow-y: auto;
      >li{
          width: 100%;
          height: 60px;
          margin-bottom: 2px;
          position: relative;
          opacity: .9;
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
              width: 80%;
              height: 20px;
              overflow: hidden;
              font-size: 14px;
              position: absolute;
              top: 5px;
              left: 35px;
          }
          .team-introduce{
              width: 100%;
              height: 32px;
              padding-left: 35px;
              color: #777;
              position: absolute;
              top: 25px;
              left: 0px;
              font-size: 11px;
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
