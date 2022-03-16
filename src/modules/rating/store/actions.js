import Vue from 'vue'
import * as actionHelper from '@/modules/app/helpers/actions'
import Rating from '@/modules/rating/models/rating'

export default {
  getAllRatings (context, payload) {
    return new Promise((resolve, reject) => {
      const url = actionHelper.prepareGetAllURL(payload, 'admin/ratings')
      return Vue.axios.get(url)
        .then(res => resolve(
          {
            items: Rating.fromJsonArray(res.data.data),
            pagination: res.data.meta.pagination
          }))
        .catch(err => reject(err))
    })
  },
  acceptRating (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload)
    return Vue.axios.post('/ratings/' + payload.rating_id + '/accept', params)
  },
  rejectRating (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload)
    return Vue.axios.post('/ratings/' + payload.rating_id + '/reject', params)
  }
}
