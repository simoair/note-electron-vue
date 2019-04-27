
import store from './../../store'
function dblEvent (code, data) {
  // 判断标签栏是否已存在
  let isExit = false
  this.$store.getters['panel/getMenu'].list.forEach((item, index) => {
    if (item.code === code && item.id === data.id) {
      isExit = true
      this.$store.dispatch('panel/turnTo', index)
      return false
    }
  })
  if (!isExit) {
    this.$store.dispatch('panel/add', Object.assign({code: code}, data))
  }
}

function pop (event, $ref, _position) {
  store.dispatch('public/updatePop', false)
  setTimeout(function () {
    let position = {
      top: 0,
      left: 0
    }
    let obj = Object.assign({}, $ref.$parent)
    while (Object.keys(obj).length) {
      if (Object.keys(obj).length !== 0) {
        position.top += obj.$el.offsetTop // 叠加父容器的上边距
        position.left += obj.$el.offsetLeft // 叠加父容器的左边距
        obj = Object.assign({}, obj.$parent)
      }
    }
    if (_position) {
      position.left += _position.left
      position.top += _position.top
    }
    Object.assign($ref.$el.style, {}, {
      left: `${event.pageX - position.left}px`,
      top: `${event.pageY - position.top}px`,
      display: 'block'
    })
    store.dispatch('public/updatePop', true)
  }, 20)
}
function selectText (e) { // 自动选中区域内的文字
  let text = e
  if (document.body.createTextRange) {
    let range = document.body.createTextRange()
    range.moveToElementText(text)
    range.select()
  } else if (window.getSelection) {
    let selection = window.getSelection()
    let range = document.createRange()
    range.selectNodeContents(text)
    selection.removeAllRanges()
    selection.addRange(range)
  } else {
    alert('none')
  }
}
export {dblEvent, pop, selectText}
