import Vue from 'vue'
import * as actionHelper from '@/modules/app/helpers/actions'
import User from '@/modules/users/models/user'
import Role from '@/modules/users/models/role'
import Provider from '@/modules/provider/models/provider'
import Order from '@/modules/users/models/order'
import router from '@/modules/app/router'

export default {
  // createUser (store, payload) {
  //   const params = actionHelper.urlSearchParamsFromProperties(payload,
  //     { role: payload.role?.name })
  //   return Vue.axios.post('/users', params)
  // },
  getAllUsers (context, payload) {
    return new Promise((resolve, reject) => {
      const url = actionHelper.prepareGetAllURL(payload, 'users', ['roles', 'provider'])
      return Vue.axios.get(url)
        .then(res => resolve(
          {
            items: User.fromJsonArray(res.data.data),
            pagination: res.data.meta.pagination
          }))
        .catch(err => reject(err))
    })
  },
  getAllProviders (context, payload) {
    if (router.currentRoute.name === 'slider-providers') {
      return new Promise((resolve, reject) => {
        const url = actionHelper.prepareGetAllURL(payload, 'sliders/' + router.currentRoute.params.slider_id + '/providers', ['user', 'sliders'])
        return Vue.axios.get(url)
          .then(res => resolve(
            {
              items: Provider.fromJsonArray(res.data.data),
              pagination: res.data.meta.pagination
            }))
          .catch(err => reject(err))
      })
    }

    return new Promise((resolve, reject) => {
      const url = actionHelper.prepareGetAllURL(payload, 'providers', 'sliders')
      return Vue.axios.get(url)
        .then(res => resolve(
          {
            items: Provider.fromJsonArray(res.data.data),
            pagination: res.data.meta.pagination
          }))
        .catch(err => reject(err))
    })
  },
  getAllOrders (context, payload) {
    return new Promise((resolve, reject) => {
      const url = actionHelper.prepareGetAllURL(payload, 'orders')
      return Vue.axios.get(url)
        .then(res => resolve(
          {
            items: Order.fromJsonArray(res.data.data),
            pagination: res.data.meta.pagination
          }))
        .catch(err => reject(err))
    })
  },
  updateUser (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload,
      {
        suspend: payload.suspended_at,
        role: payload.roles ? Array.from(payload.roles.map(role => role.name)) : null
      }, ['email', 'roles', 'roles_names', 'suspended_at', 'provider'])

    return Vue.axios.patch('/admin/users/' + payload.id, params)
  },
  getAllRoles (context, payload) {
    return new Promise((resolve, reject) => {
      const url = actionHelper.prepareGetAllURL(payload, 'roles')
      return Vue.axios.get(url)
        .then(res => resolve(
          {
            items: Role.fromJsonArray(res.data.data),
            pagination: res.data.meta.pagination
          }))
        .catch(err => reject(err))
    })
  }
}
