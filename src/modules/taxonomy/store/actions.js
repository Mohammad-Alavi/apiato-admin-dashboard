import Vue from 'vue'
import * as actionHelper from '@/modules/app/helpers/actions'
import Sport from '@/modules/taxonomy/models/sport'
import Job from '@/modules/taxonomy/models/job'
import Category from '@/modules/taxonomy/models/category'
import Skill from '@/modules/taxonomy/models/skill'

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
    const params = actionHelper.urlSearchParamsFromProperties(payload, {
      type: 'job',
      taxonomy_id: payload.category?.id
    }, ['category'])
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
    const params = actionHelper.urlSearchParamsFromProperties(payload, {
      type: 'job',
      taxonomy_id: payload.category?.id
    }, ['category'])

    return Vue.axios.patch('/taxonomies/' + payload.id, params)
  },
  deleteJob (store, payload) {
    return Vue.axios.delete('/taxonomies/' + payload.id)
  },
  getAllCategories (context, payload) {
    return new Promise((resolve, reject) => {
      const url = actionHelper.prepareGetAllURL(payload, 'categories')
      return Vue.axios.get(url)
        .then(res => resolve(
          {
            items: Category.fromJsonArray(res.data.data),
            pagination: res.data.meta.pagination
          }))
        .catch(err => reject(err))
    })
  },
  createSkill (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload, {
      type: 'skill',
      sport_id: payload.sport ? payload.sport.id : '',
      taxonomy_id: payload.job ? payload.job.id : ''
    }, ['job', 'sport'])
    return Vue.axios.post('/taxonomies', params)
  },
  getAllSkills (context, payload) {
    return new Promise((resolve, reject) => {
      const url = actionHelper.prepareGetAllURL(payload, 'skills')
      return Vue.axios.get(url)
        .then(res => resolve(
          {
            items: Skill.fromJsonArray(res.data.data),
            pagination: res.data.meta.pagination
          }))
        .catch(err => reject(err))
    })
  },
  updateSkill (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload, {
      type: 'skill',
      sport_id: payload.sport ? payload.sport.id : '',
      taxonomy_id: payload.job ? payload.job.id : ''
    }, ['job', 'sport'])

    return Vue.axios.patch('/taxonomies/' + payload.id, params)
  },
  deleteSkill (store, payload) {
    return Vue.axios.delete('/taxonomies/' + payload.id)
  }
}
