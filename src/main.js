import Vue from 'vue'
import App from './modules/app/pages/App.vue'
import router from './modules/app/router'
import store from './modules/app/store'
import { vuetify } from './plugins'
import './global-components'
import './instance-properties'
import './modules/app/validations/validations'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
