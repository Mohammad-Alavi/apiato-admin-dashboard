import Vue from 'vue'

export default {
  getCategoriesAnalytics () {
    return new Promise((resolve, reject) => {
      return Vue.axios.get('/analysis/categories').then(
        res => resolve(res.data)
      ).catch(err => reject(err))
    })
  },
  getInspectorsAnalytics () {
    return new Promise((resolve, reject) => {
      return Vue.axios.get('/analysis/inspectors').then(
        res => resolve(res.data)
      ).catch(err => reject(err))
    })
  },
  getInspectionsAnalytics (store, payload) {
    return new Promise((resolve, reject) => {
      let url = '/analysis/inspections'
      if (payload.from) { url += `?from=${payload.from}&to=${payload.to}` }

      return Vue.axios.get(url).then(
        res => resolve(res.data)
      ).catch(err => reject(err))
    })
  }
}
