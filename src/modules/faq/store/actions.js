import Vue from 'vue'
import * as actionHelper from '@/modules/app/helpers/actions'
import Faq from '@/modules/faq/models/faq'

export default {
  createFaq (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload)
    return Vue.axios.post('/faqs', params)
  },
  getAllFaqs (context, payload) {
    return new Promise((resolve, reject) => {
      const url = actionHelper.prepareGetAllURL(payload, 'faqs')
      return Vue.axios.get(url)
        .then(res => resolve(
          {
            items: Faq.fromJsonArray(res.data.data),
            pagination: res.data.meta.pagination
          }))
        .catch(err => reject(err))
    })
  },
  updateFaq (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload)

    return Vue.axios.patch('/faqs/' + payload.id, params)
  },
  deleteFaq (store, payload) {
    return Vue.axios.delete('/faqs/' + payload.id)
  },
  reorderFaq (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload)

    return Vue.axios.patch('/faqs/' + payload.id + '/reorder', params)
  }
}
