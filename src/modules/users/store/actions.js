import Vue from 'vue'
import * as actionHelper from '@/modules/app/helpers/actions'
import User from '@/modules/users/models/user'
import Role from '@/modules/users/models/role'
import Order from '@/modules/users/models/order'

export default {
  createUser (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload, {
      verification_url: 'http://apiato.test/email/verify'
    }, ['roles', 'roles_names', 'email_verified_at'])
    return Vue.axios.post('/admin/users', params)
  },
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
  deleteUser (store, payload) {
    return Vue.axios.delete('/users/' + payload.id)
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
