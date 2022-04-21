import Vue from 'vue'
import * as actionHelper from '@/modules/app/helpers/actions'

export default {
  login ({ getters }, payload) {
    payload = payload || {}
    return new Promise((resolve, reject) => {
      Vue.auth.login({
        data: payload,
        remember: payload.remember,
        staySignedIn: payload.staySignedIn
      }).then((res) => {
        if (payload.remember) {
          Vue.auth.remember(JSON.stringify({
            name: getters.user.name
          }))
        }
        resolve(res)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },
  logout () {
    return new Promise((resolve, reject) => {
      Vue.auth.logout().then((res) => {
        localStorage.removeItem('refresh_token')
        resolve(res)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },
  forgotPassword (store, payload) {
    const params = new URLSearchParams()
    params.set('email', payload.email)
    // TODO #160
    params.set('reseturl', 'password-reset')

    return new Promise((resolve, reject) => {
      Vue.axios.post('/password/forgot', params).then(res => {
        resolve(res)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },
  getAllVerifyEmailUrls (context, payload) {
    return new Promise((resolve, reject) => {
      const url = actionHelper.prepareGetAllURL(payload, 'email/verification-urls')
      return Vue.axios.get(url)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
  }
}
