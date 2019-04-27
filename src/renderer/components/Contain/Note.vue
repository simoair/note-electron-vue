<template>
  <div class="note theme-deep"
        @mouseup ="dragUp()"
        @mousemove ="dragMove($event)">
      <div class="control-area" 
        ref ="controlArea"
        :style="dragArea.dragAreaStyle">
        <div class="drag-area" 
        ref ="dragArea"
        @mousedown ="dragDown($event)"
        @mouseup ="dragUp()"></div>
        <ul>
          <li>
            <img src="../../assets/img/icon/backright.png" alt="">
          </li>
          <li>
            <img src="../../assets/img/icon/pen.png" alt="">
          </li>
          <li>
            <img src="../../assets/img/icon/straw.png" alt="">
          </li>
          <li>
            <img src="../../assets/img/icon/rubber.png" alt="">
          </li>
          <li>
            <img src="../../assets/img/icon/bold.png" alt="">
          </li>
          <li>
            <img src="../../assets/img/icon/italics.png" alt="">
          </li>
          <li>
            <img src="../../assets/img/icon/strikethrough.png" alt="">
          </li>
          <li>
            <img src="../../assets/img/icon/left.png" alt="">
          </li>
          <li>
            <img src="../../assets/img/icon/right.png" alt="">
          </li>
          
          <li>
            <img src="../../assets/img/icon/underline.png" alt="">
          </li>
          <li>
            <img src="../../assets/img/icon/label.png" alt="">
          </li>
          <li class="active">
            <img src="../../assets/img/icon/img-a.png" alt="">
          </li>
          <li>
            <img src="../../assets/img/icon/reset.png" alt="">
          </li>
        </ul>
      </div>
      <div class="edit">
        <div ref="page" class="page" contenteditable="true" @keyup.ctrl.83="save()"> <!-- 此处无法使用less预编译 -->
          
        </div>
      </div>
      <div class="control-bottom">
            <img src="../../assets/img/icon/warn-a.png" alt="">
            <img src="../../assets/img/icon/problem.png" alt="">
            <span>修改时间： 2019-01-02 09:13:21</span>
            <span>字数： {{dataNote.length}} 字</span>
            <span>文件： {{dataNote.size}} K</span>
            <span class="fl">位置： C:\Users\Administrator\Desktop\快捷图标</span>

      </div>
  </div>
</template>

<script>

export default {
  name: 'note',
  props: ['id', 'type'],
  data: function () {
    return {
      dataNote: {
        length: 0,
        size: 0,
        data: {}
      },
      dragArea: {
        dragFlag: false,
        eventPositionPre: {
          left: 0,
          top: 0
        },
        dragAreaStyle: {
          left: '0px',
          top: '40px'
        }
      }
    }
  },
  components: { },
  created () {
    this.getNote()
  },
  methods: {
    labelClick () {
    },
    getNote () {
      this.$server.Note.notedetail({id: this.id}).then(ret => {
        this.$refs.page.innerHTML = ret.data.note_contents[0].content
        this.dataNote.data = ret.data
        this.updateNoteInfo()
      })
    },
    save () {
      const self = this
      this.dataNote.data.note_contents[0].content = this.$refs.page.innerHTML
      this.$server.Note.notesave(this.dataNote.data).then(ret => {
        self.updateNoteInfo()
      })
    },
    updateNoteInfo () {
      this.dataNote.size = new Blob([this.$refs.page.innerHTML]).size
      this.dataNote.length = this.$refs.page.outerText.length
    },
    dragDown () {
      this.dragArea.dragFlag = true
      this.eventPositionPre = {
        left: event.pageX,
        top: event.pageY
      }
    },
    dragUp (event) {
      this.dragArea.dragFlag = false
      let controlArea = this.$refs.controlArea
      let controlAreaParent = controlArea.parentNode
      if ((controlAreaParent.offsetWidth / 2) > (controlArea.offsetLeft + 20)) {
        Object.assign(this.dragArea.dragAreaStyle,
          this.dragArea.dragAreaStyle, {
            left: '0px',
            right: ''
          })
      } else {
        Object.assign(this.dragArea.dragAreaStyle,
          this.dragArea.dragAreaStyle, {
            right: '2px',
            left: ''
          })
      }
    },
    dragMove (event) {
      let controlArea = this.$refs.controlArea
      if (this.dragArea.dragFlag) {
        // 禁止拖拽式发生选中文本的事件影响体验
        window.getSelection().removeAllRanges()
        let eventPositionNow = {
          left: event.pageX,
          top: event.pageY
        }
        Object.assign(this.dragArea.dragAreaStyle,
          this.dragArea.dragAreaStyle, {
            top: `${(controlArea.offsetTop + (eventPositionNow.top - this.eventPositionPre.top))}px`,
            left: `${(controlArea.offsetLeft + (eventPositionNow.left - this.eventPositionPre.left))}px`
          })
        this.eventPositionPre = {
          left: event.pageX,
          top: event.pageY
        }
      }
    }
  },
  watch: {
    id (val, oldVal) {
      this.getNote()
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.note{
    width: 100%;
    height: 100%;
    position: absolute;
      >.control-area{
        width: 50px;
        height: 250px;
        border-radius: 5px;
        // box-shadow: 1px 0px 2px 2px  #191919;
        position: absolute;
        background: #333;
        z-index: 1111;
        .drag-area{
          width: 100%;
          height: 15px;
          position: relative;
          cursor: move;
          &:before{
            content: '';
            width: 80%;
            height: 6px;
            position: absolute;
            top: 5px;
            left: 10%;
            border-top:1px solid #666;
            border-bottom:1px solid #666;
          }
          &:hover:before{
            border-top:1px solid #999;
            border-bottom:1px solid #999;
          }
        }
        ul{
          li{
            width: 50%;
            text-align: center;
            padding: 5px 0;
            float: left;
            -moz-user-select: none;
            -khtml-user-select: none;
            user-select: none;
            img{
              width: 15px;
              height: 15px;
              opacity: .6;
            }
            &.active{
              img{
                opacity: 1;
              }
            }
            &:hover{
              img{
                opacity: 1;
              }
            }
          }
        }
      }
      >.edit{
        width: 100%;
        height: calc(100% - 20px);
        font-size: 14px;
        overflow: hidden;
        .page{
          width: 90%;
          height: 100%;
          background: #262626;
          padding: 50px 60px 30px 60px;
          margin:0 auto;
          margin-top:20px;
          box-shadow: 0px 0px 3px 3px  #202020;
          line-height: 30px;
          border-radius: 4px;
          outline: 0px;
          color: #bbb;
          word-wrap:break-word;
          cursor: text;
          p{
            text-indent: 2em;
          }
          span.label.show{
            width: auto;
            height: auto;
            padding: 0 3px;
            border-radius: 4px;
            background: rgba(255,102,102, .1);
            color: rgba(255,102,102, .7);
            margin:0 5px;
            padding: 0 5px;
            cursor: pointer;
          }
          span.label.hide{
            width: auto;
            height: auto;
            padding: 0 10px;
            border-radius: 3px;
            line-height: 20px;
            background: rgba(0, 0, 0, .5);
            color: #999;left: 310px;top:95px;
            position: absolute;
            font-size: 12px;
            z-index: 111;
            &:after{
              content: '';
              width: 8px;
              height: 8px;
              position: absolute;
              border-radius: 10px;
              top:5px;
              left: -15px;
              background: #bbb;
            }
          }
        }
      }
      >.control-bottom{
        width: 100%;
        height: 18px;
        position: absolute;
        bottom: 0;
        background: #292929;
        color: #999999;
        font-size: 10px;
        vertical-align: middle;
            >img{
                width: 13px;
                height: 13px;
                margin-top: 3px;
                cursor: pointer;
                float: right;
                box-sizing: content-box;
                padding: 0 5px;
            }
            span{
              margin-top: 2px;
              display: inline-flex;
              padding: 0 10px;
              float: right;
            }
      }
}
</style>
