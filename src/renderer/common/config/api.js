export default {
  user: {
    host () {
      return 'user/v1'
    },
    login () {
      return this.host() + '/login'
    }
  },
  team: {
    host () {
      return 'team/v1'
    },
    list (data) {
      return this.host() + `/list`
    }
  },
  note: {
    host () {
      return 'note/v1'
    },
    treeList () {
      return this.host() + `/getFolderTree`
    },
    detail () {
      return this.host() + `/detail`
    },
    save () {
      return this.host() + `/save`
    }
  }
}
