import Vue from 'vue'
import * as actionHelper from '@/modules/app/helpers/actions'
import Sport from '@/modules/taxonomy/models/sport'
import Job from '@/modules/taxonomy/models/job'

export default {
  createSport (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload, { type: 'sport' })
    return Vue.axios.post('/taxonomies', params)
  },
  getAllSports (context, payload) {
    return new Promise((resolve, reject) => {
      const url = actionHelper.prepareGetAllURL(payload, 'sports')
      return Vue.axios.get(url)
        .then(res => resolve(
          {
            items: Sport.fromJsonArray(res.data.data),
            pagination: res.data.meta.pagination
          }))
        .catch(err => reject(err))
    })
  },
  updateSport (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload, { type: 'sport' })

    return Vue.axios.patch('/taxonomies/' + payload.id, params)
  },
  deleteSport (store, payload) {
    return Vue.axios.delete('/taxonomies/' + payload.id)
  },
  createJob (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload, { type: 'job' })
    return Vue.axios.post('/taxonomies', params)
  },
  getAllJobs (context, payload) {
    return new Promise((resolve, reject) => {
      const url = actionHelper.prepareGetAllURL(payload, 'jobs')
      return Vue.axios.get(url)
        .then(res => resolve(
          {
            items: Job.fromJsonArray(res.data.data),
            pagination: res.data.meta.pagination
          }))
        .catch(err => reject(err))
    })
  },
  updateJob (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload, { type: 'job' })

    return Vue.axios.patch('/taxonomies/' + payload.id, params)
  },
  deleteJob (store, payload) {
    return Vue.axios.delete('/taxonomies/' + payload.id)
  }
}
