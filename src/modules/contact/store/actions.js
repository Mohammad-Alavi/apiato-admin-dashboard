import Vue from 'vue'
import * as actionHelper from '@/modules/app/helpers/actions'
import Contact from '@/modules/contact/models/contact'

export default {
  getAllContacts (context, payload) {
    return new Promise((resolve, reject) => {
      const url = actionHelper.prepareGetAllURL(payload, 'contacts')
      return Vue.axios.get(url)
        .then(res => resolve(
          {
            items: Contact.fromJsonArray(res.data.data),
            pagination: res.data.meta.pagination
          }))
        .catch(err => reject(err))
    })
  },
  resolveContact (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload)
    return Vue.axios.post('/contacts/' + payload.id + '/resolve', params)
  },
  unresolveContact (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload)
    return Vue.axios.post('/contacts/' + payload.id + '/unresolve', params)
  }
}
