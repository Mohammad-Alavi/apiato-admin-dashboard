import Vue from 'vue'
import * as actionHelper from '@/modules/app/helpers/actions'
import FaqGroup from '@/modules/faq_group/models/faq_group'

export default {
  createFaqGroup (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload)
    return Vue.axios.post('/faq-groups', params)
  },
  getAllFaqGroups (context, payload) {
    return new Promise((resolve, reject) => {
      const url = actionHelper.prepareGetAllURL(payload, 'public/faqs')
      return Vue.axios.get(url)
        .then(res => resolve(
          {
            items: FaqGroup.fromJsonArray(res.data.data),
            pagination: res.data.meta.pagination
          }))
        .catch(err => reject(err))
    })
  },
  updateFaqGroup (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload)

    return Vue.axios.patch('/faq-groups/' + payload.id, params)
  },
  deleteFaqGroup (store, payload) {
    return Vue.axios.delete('/faq-groups/' + payload.id)
  },
  reorderFaqGroup (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload)

    return Vue.axios.patch('/faq-groups/' + payload.id + '/reorder', params)
  }
}
