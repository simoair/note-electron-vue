import {get, put, Delete} from './config/axios'
import api from './config/api'
import store from './../store'
export default {
  personNoteList () {
    const params = {userId: 1}
    get(api.note.treeList(), params)
      .then((data) => {
        store.dispatch('note/updatePersonData', data.data)
        store.dispatch('note/updatePersonCurrentItem')
      })
  },
  notedetail (params) {
    return get(api.note.detail(), params)
  },
  notesave (params) {
    return put(api.note.save(), params)
  },
  folderUpdate (params) {
    return put(api.note.save(), params)
  },
  delete (params) {
    return Delete(api.note.delete(), params)
  }
}
