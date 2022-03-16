import Vue from 'vue'

export default {
  user () {
    return Vue.auth.user()
  }
}
