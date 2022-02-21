import axios from 'axios'
import store from '@/modules/app/store'
import { SHOW_SNACKBAR_ERROR, SHOW_SNACKBAR_SUCCESS } from '@/modules/app/store/mutation-types'

axios.defaults.baseURL = process.env.VUE_APP_API_URL + '/v1'
axios.defaults.headers.common.Accept = 'application/json'

axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  switch (response.status) {
    case 200:
      if (response.config.method === 'patch') {
        callSnackbarSuccess('Item Updated') // '$vuetify.general.components.snackbar.updated'
      }
      break
    case 201:
      callSnackbarSuccess('Item Created') // '$vuetify.general.components.snackbar.created'
      break
    case 204:
      if (response.config.method === 'delete') {
        callSnackbarSuccess('Item Deleted') // '$vuetify.general.components.snackbar.deleted'
      }
      break
  }
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  if (typeof error.response === 'undefined') {
    callSnackbarError('A network error occurred') // '$vuetify.general.components.snackbar.networkError'
  } else {
    switch (error.response.status) {
      case 401:
        // callSnackbarError('Authorization failed')
        break
      case 404:
        callSnackbarError('Resource not found') // '$vuetify.general.components.snackbar.notFound'
        break
      case 422:
        // callSnackbarError(error.response.data.errors[Object.keys(error.response.data.errors)[0]][0])
        break
      default:
        callSnackbarError('Something went wrong!') // '$vuetify.general.components.snackbar.generalError'
    }
  }
  return Promise.reject(error)
})

const callSnackbarSuccess = (msg) => {
  store.commit(SHOW_SNACKBAR_SUCCESS, msg)
}

const callSnackbarError = (msg) => {
  store.commit(SHOW_SNACKBAR_ERROR, msg)
}

export default axios
