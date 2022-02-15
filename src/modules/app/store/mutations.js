import {
  RESET_FILTER,
  SET_FILTER,
  SET_IS_SEARCHING,
  SET_SEARCH_QUERY,
  SET_SNACKBAR_COLOR,
  SET_SNACKBAR_DISPLAY_STATE,
  SET_SNACKBAR_MESSAGE,
  SHOW_SNACKBAR_ERROR,
  SHOW_SNACKBAR_SUCCESS
} from '@/modules/app/store/mutation-types'

export default {
  [SET_SNACKBAR_DISPLAY_STATE] (state, payload) {
    state.snackbar.show = payload
  },
  [SET_SNACKBAR_MESSAGE] (state, payload) {
    state.snackbar.message = payload
  },
  [SET_SNACKBAR_COLOR] (state, payload) {
    state.snackbar.color = payload
  },
  [SHOW_SNACKBAR_SUCCESS] (state, payload) {
    this.commit(SET_SNACKBAR_COLOR, 'green')
    this.commit(SET_SNACKBAR_MESSAGE, payload)
    this.commit(SET_SNACKBAR_DISPLAY_STATE, true)
  },
  [SHOW_SNACKBAR_ERROR] (state, payload) {
    this.commit(SET_SNACKBAR_COLOR, 'red')
    this.commit(SET_SNACKBAR_MESSAGE, payload)
    this.commit(SET_SNACKBAR_DISPLAY_STATE, true)
  },
  [SET_SEARCH_QUERY] (state, payload) {
    state.search.query = payload
  },
  [SET_IS_SEARCHING] (state, payload) {
    state.search.isSearching = payload
  },
  [SET_FILTER] (state, payload) {
    state.filter = payload
  },
  [RESET_FILTER] (state) {
    state.filter = {
      isAdmin: null,
      isProvider: null,
      isEmailVerified: null,
      allProviders: null
    }
  }
}
