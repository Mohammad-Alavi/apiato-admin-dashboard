import Vue from 'vue'
import { ValidationProvider } from 'vee-validate'
import VueCountdown from '@chenfengyuan/vue-countdown'

Vue.component(VueCountdown.name, VueCountdown)
Vue.component('ValidationProvider', ValidationProvider)
