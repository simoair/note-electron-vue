import {get, put} from './config/axios'
import api from './config/api'
import store from './../store'
export default {
  personNoteList (params) {
    get(api.note.treeList(), params)
      .then((data) => {
        store.dispatch('note/updatePersonData', data.data)
        store.dispatch('note/updatePersonCurrentItem')
      })
  },
  personNotedetail (params) {
    return get(api.note.detail(), params)
  },
  personNotesave (params) {
    return put(api.note.save(), params)
  }
}
