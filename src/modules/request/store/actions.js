import Vue from 'vue'
import * as actionHelper from '@/modules/app/helpers/actions'
import Request from '@/modules/request/models/request'

export default {
  getAllRequests (context, payload) {
    return new Promise((resolve, reject) => {
      const url = actionHelper.prepareGetAllURL(payload, 'verification/requests', 'user')
      return Vue.axios.get(url)
        .then(res => resolve(
          {
            items: Request.fromJsonArray(res.data.data),
            pagination: res.data.meta.pagination
          }))
        .catch(err => reject(err))
    })
  },
  updateRequest (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload)

    return Vue.axios.patch('verification/requests/' + payload.id, params)
  },
  deleteRequest (store, payload) {
    return Vue.axios.delete('verification/requests/' + payload.id)
  },
  verifyProvider (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload)
    return Vue.axios.post('verification/requests/' + payload.request_id, params)
  }
}
