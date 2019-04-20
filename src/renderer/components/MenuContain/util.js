
// import store from './../store'
function dblEvent (code, data) {
  // 判断标签栏是否已存在
//   console.log(this.$store.getters['team/getTeamList'])
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
export {dblEvent}
