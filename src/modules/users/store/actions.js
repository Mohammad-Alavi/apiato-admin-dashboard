import Vue from 'vue'
import * as actionHelper from '@/modules/app/helpers/actions'
import User from '@/modules/users/models/user'
import Role from '@/modules/users/models/role'

export default {
  // createUser (store, payload) {
  //   const params = actionHelper.urlSearchParamsFromProperties(payload,
  //     { role: payload.role?.name })
  //   console.log(params)
  //   return Vue.axios.post('/users', params)
  // },
  getAllUsers (context, payload) {
    return new Promise((resolve, reject) => {
      const url = actionHelper.prepareGetAllURL(payload, 'users', 'roles')
      return Vue.axios.get(url)
        .then(res => resolve(
          {
            items: User.fromJsonArray(res.data.data),
            pagination: res.data.meta.pagination
          }))
        .catch(err => reject(err))
    })
  },
  updateUser (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload,
      {
        role: payload.roles ? Array.from(payload.roles.map(role => role.name)) : null
      }, ['email', 'roles', 'roles_names'])

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
