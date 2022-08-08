import Vue from 'vue'
import * as actionHelper from '@/modules/app/helpers/actions'
import Slider from '@/modules/slider/models/slider'
import router from '@/modules/app/router'

export default {
  createSlider (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload)
    return Vue.axios.post('/sliders', params)
  },
  getAllSliders (context, payload) {
    return new Promise((resolve, reject) => {
      const url = actionHelper.prepareGetAllURL(payload, 'public/sliders')
      return Vue.axios.get(url)
        .then(res => resolve(
          {
            items: Slider.fromJsonArray(res.data.data),
            pagination: res.data.meta.pagination
          }))
        .catch(err => reject(err))
    })
  },
  updateSlider (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload)

    return Vue.axios.patch('/sliders/' + payload.id, params)
  },
  deleteSlider (store, payload) {
    return Vue.axios.delete('/sliders/' + payload.id)
  },
  reorderSlider (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload)

    return Vue.axios.patch('/sliders/' + payload.id + '/reorder', params)
  },
  addProviderToSlider (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload)
    return Vue.axios.post('/sliders/' + payload.slider_id + '/providers/' + payload.provider_id + '/add', params)
  },
  removeProviderFromSlider (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload)
    return Vue.axios.post('/sliders/' + payload.slider_id + '/providers/' + payload.provider_id + '/remove', params)
  },
  reorderProvider (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload)
    return Vue.axios.patch('/sliders/' + router.currentRoute.params.slider_id + '/providers/' + payload.id + '/reorder', params)
  }
}
