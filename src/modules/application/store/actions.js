import Vue from 'vue'
import * as actionHelper from '@/modules/app/helpers/actions'
import Application from '@/modules/application/models/application'

export default {
  getAllApplications (context, payload) {
    return new Promise((resolve, reject) => {
      const url = actionHelper.prepareGetAllURL(payload, 'applications')
      return Vue.axios.get(url)
        .then(res => resolve(
          {
            items: Application.fromJsonArray(res.data.data),
            pagination: res.data.meta.pagination
          }))
        .catch(err => reject(err))
    })
  },
  updateApplication (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload, {
      faq_group_id: payload.faq_group?.id
    }, ['faq_group'])

    return Vue.axios.patch('/applications/' + payload.id, params)
  },
  deleteApplication (store, payload) {
    return Vue.axios.delete('/applications/' + payload.id)
  }
}
