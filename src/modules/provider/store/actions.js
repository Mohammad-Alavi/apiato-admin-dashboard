import Vue from 'vue'
import * as actionHelper from '@/modules/app/helpers/actions'
import Provider from '@/modules/provider/models/provider'

export default {
  createProvider (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload)
    return Vue.axios.post('/providers', params)
  },
  getAllFProvider (context, payload) {
    return new Promise((resolve, reject) => {
      const url = actionHelper.prepareGetAllURL(payload, 'admin/providers', ['user'])
      return Vue.axios.get(url)
        .then(res => resolve(
          {
            items: Provider.fromJsonArray(res.data.data),
            pagination: res.data.meta.pagination
          }))
        .catch(err => reject(err))
    })
  },
  updateProvider (store, payload) {
    console.log(payload)
    const params = actionHelper.urlSearchParamsFromProperties(payload)
    return Vue.axios.patch('/users/' + payload.user.id + '/providers/' + payload.id, params)
  },
  deleteProvider (store, payload) {
    return Vue.axios.delete('/providers/' + payload.id)
  }
}
