import Vue from 'vue'
import * as actionHelper from '@/modules/app/helpers/actions'
import Category from '@/modules/taxonomy/models/category'
import Specialization from '@/modules/taxonomy/models/specialization'

export default {
  createCategory (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload)
    return Vue.axios.post('/categories', params)
  },
  updateCategory (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload)

    return Vue.axios.patch('/categories/' + payload.id, params)
  },
  deleteCategory (store, payload) {
    return Vue.axios.delete('/categories/' + payload.id)
  },
  getAllCategories (context, payload) {
    return new Promise((resolve, reject) => {
      const url = actionHelper.prepareGetAllURL(payload, 'public/categories')
      return Vue.axios.get(url)
        .then(res => resolve(
          {
            items: Category.fromJsonArray(res.data.data),
            pagination: res.data.meta.pagination
          }))
        .catch(err => reject(err))
    })
  },
  reorderCategory (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload, { position: payload.order }, ['order', 'provider'])
    return Vue.axios.patch('/categories/' + payload.id + '/reorder', params)
  },
  createSpecialization (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload, {
      category_ids: payload.categories?.length ? Array.from(payload.categories.map(category => category.id)) : []
    }, ['categories'])
    return Vue.axios.post('/specializations', params)
  },
  getAllSpecializations (context, payload) {
    return new Promise((resolve, reject) => {
      const url = actionHelper.prepareGetAllURL(payload, 'admin/specializations', 'categories')
      return Vue.axios.get(url)
        .then(res => resolve(
          {
            items: Specialization.fromJsonArray(res.data.data),
            pagination: res.data.meta.pagination
          }))
        .catch(err => reject(err))
    })
  },
  updateSpecialization (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload, {
      category_ids: payload.categories?.length ? Array.from(payload.categories.map(category => category.id)) : []
    }, ['categories'])

    return Vue.axios.patch('/specializations/' + payload.id, params)
  },
  deleteSpecialization (store, payload) {
    return Vue.axios.delete('/specializations/' + payload.id)
  }
}
