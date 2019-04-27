<template>
  <div class="folder" @mouseup.stop="onClick($event,'panel')">
      <div class="head-menu">
          <img src="../../assets/img/icon/back.png" alt="" @click="turnBack()">
      </div>
      <ul class="folder-box">
          <li
          v-for="(item) in getNoteData().currentItem.children" 
          :key="item.id"
          @dblclick="dblclick(item)">
            <img class="" code="folder" :src="`../../static/img/icon/${item.fileType == 0 ? 'team-folder' : 'file'}.png`" alt=""
            @mouseup.stop="onClick($event,'folder',item)">
            <p @blur="onBlur($event,item)">{{item.noteName}}</p>
          </li>
      </ul>
      <Pop :pop="popPanel.bind(this)" ref="pop"/>
  </div>
</template>

<script>
import {dblEvent as utilDblEvent, pop as utilPop, selectText as utilSelectText} from './../Util/index.js'
import Pop from './../Public/Pop'
export default {
  name: 'Folder',
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
        panel: [false, false, true, true],
        folder: [true, true, false, false]
      }
    }
  },
  created () {
  },
  methods: {
    dblclick (data) {
      if (data.fileType === 0) { // 文件夹
        this.$store.dispatch('note/updatePersonCurrentItem', data.id)
      } else { // 文件
        // 判断标签栏是否已存在
        utilDblEvent.bind(this)('note', {
          id: data.id,
          type: 'person',
          noteName: data.noteName.length <= 5 ? data.noteName : `${data.noteName.substring(0, 5)}...`
        })
      }
    },
    getNoteData () {
      return this.$store.getters['note/getPersonData']
    },
    turnBack (pid) {
      if (!pid) { // 不存在指定地址
        let pid = this.getNoteData().currentItem.pid
        if (pid !== -1) {
          this.$store.dispatch('note/updatePersonCurrentItem', pid)
        }
      }
    },
    onClick (event, code, data) {
      if (event.button === 2) {
        this.disablePop['code'] = code
        this.disablePop.current = this.disablePop[this.disablePop['code']]
        utilPop(event, this.$refs.pop)
        this.select.$el = event.target.parentNode.children[1]
        this.select.data = data
      }
    },
    onBlur (event, data) {
      const $name = event.target
      Object.assign(event.target, {contentEditable: false})
      if (this.select.text !== $name.outerText) { // 文件名变动
        data = JSON.parse(JSON.stringify(data))// 以防修改源数据
        data.noteName = $name.outerText
        data.fileType = 0
        this.$server.Note.folderUpdate(data).then(ret => {
          this.$toast(ret.msg)
        })
      }
    },
    add (type) {
      const _this = this
      const data = {
        pid: _this.getNoteData().currentItem.id,
        ownerId: 1,
        ownerType: 0,
        noteName: type === 0 ? '新建文件夹' : '新建文件',
        fileType: type,
        lockPassword: '',
        createByUserId: 1,
        updateByUserId: 1,
        content: '',
        isLock: 0
      }
      this.$server.Note.notesave(data).then(ret => {
        this.$toast(ret.msg)
        if (ret.code === 200) {
          this.$server.Note.personNoteList()
        } else {
        }
      })
    },
    popPanel () {
      const _this = this
      return [{
        title: '新建文件',
        disable: _this.disablePop.current[0],
        callback: function () {
          _this.add(1)
        }
      }, {
        title: '新建文件夹',
        disable: _this.disablePop.current[1],
        callback: function () {
          _this.add(0)
        }
      }, {
        title: '重命名',
        disable: _this.disablePop.current[2],
        callback: function () {
          _this.$store.dispatch('public/updatePop', false)
          _this.select.$el.focus()
          _this.select.text = _this.select.$el.outerText
          Object.assign(_this.select.$el, {contentEditable: true})
          utilSelectText(_this.select.$el)
        }
      }, {
        title: '删除',
        disable: _this.disablePop.current[3],
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

.folder{
    width: 100%;
    height: 100%;
    padding: 10px 0;
    color: #ebebeb;
    position: absolute;
    ::selection{ background: #66CCFF;}
    ::-moz-selection{ background: #66CCFF;}
    ::-webkit-selection{ background: #66CCFF;}
    >.head-menu{
      position: fixed;
      top: 35px;
      left: 50px;
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
    }
    >ul.folder-box{
        margin-top: 20px;
        height: 100%;
        overflow-y: auto;
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
                width: 45%;
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
                overflow: hidden;
                &:focus{
                  word-wrap:break-word;
                  cursor: text;
                  background: #222;
                  color: #fff;
                  border: 1px solid #999;
                }
            }
        }
    }
}
</style>
