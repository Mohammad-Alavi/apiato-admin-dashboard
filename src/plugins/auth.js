import Vue from 'vue'
import auth from '@websanova/vue-auth/dist/vue-auth.esm.js'
import configs from '@/modules/auth/configs'
import router from '@/modules/app/router'

Vue.router = router
Vue.use(auth, configs)
