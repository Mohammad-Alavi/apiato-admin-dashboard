import Vue from 'vue'
import Vuex from 'vuex'
import modules from '@/modules/app/store/modules'
import mutations from '@/modules/app/store/mutations'
import getters from '@/modules/app/store/getters'
import actions from '@/modules/app/store/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackbar: {
      show: false,
      message: null,
      color: null
    },
    search: {
      query: '',
      isSearching: false
    },
    filter: {
      isAdmin: null,
      isProvider: null,
      isEmailVerified: null,
      allProviders: null,
      orderStatus: null,
      allRequests: null,
      categories: null,
      isRatingReviewed: 0,
      isRatingAccepted: null,
      contactTopic: null,
      isResolved: null
    }
  },
  actions: actions,
  getters: getters,
  mutations: mutations,
  strict: process.env.NODE_ENV !== 'production',
  modules
})
