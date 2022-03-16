import Vue from 'vue'
import * as actionHelper from '@/modules/app/helpers/actions'

export default {
  updateProfile (store, payload) {
    const params = actionHelper.urlSearchParamsFromProperties(payload,
      { role: payload.role?.name })

    return Vue.axios.patch('/users/' + payload.id, params)
  }
}
