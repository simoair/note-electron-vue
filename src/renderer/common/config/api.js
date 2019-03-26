export default {
  user: {
    host () {
      return 'user/v1'
    },
    login () {
      return this.host() + '/login'
    }
  }
}
