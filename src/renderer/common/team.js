import {get} from './config/axios'
import api from './config/api'
import store from './../store'
export default {
  list (params) {
    get(api.team.list(), params)
      .then((data) => {
        store.dispatch('team/updateTeamList', data.data[0].teams)
      })
  },
  detail (params) {
    get(api.team.detail(), params)
      .then((data) => {
        store.dispatch('team/addTeamMap', data.data)
      })
  }
}
