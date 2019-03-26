import {post} from './config/axios'
import api from './config/api'
import storage from './util/storage'
export default {
  login (params) {
    return post(api.user.login(), params)
      .then((data) => {
        return new Promise((resolve, reject) => {
          if (data.code === 200) { // 登陆成功
            storage.localStorage.set('userinfo', data.data)
            resolve(true)
          } else { // 登登录失败
            resolve(false)
          }
        })
      })
  }
}
