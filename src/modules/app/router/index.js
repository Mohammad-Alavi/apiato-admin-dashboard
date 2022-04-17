import Vue from 'vue'
import store from '@/modules/app/store'
import VueRouter from 'vue-router'
import { RESET_FILTER } from '@/modules/app/store/mutation-types'

Vue.use(VueRouter)

// Define base routes here
const baseRoutes = [
  {
    path: '/',
    name: 'index',
    redirect: { name: 'dashboard' }
  },
  {
    path: '*',
    redirect: '/404'
  }
]

// Import all of the resource routes files.
function loadRoutes () {
  const context = require.context('@/modules', true, /\/routes\/index.js$/i)
  return context.keys()
    .map(context) // import module
    .map(m => m.default) // get `default` export from each resolved module
}

const resourceRoutes = loadRoutes()

resourceRoutes.forEach((route) => {
  for (let i = 0; i < route.length; i++) {
    baseRoutes.push(route[i])
  }
})

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  // linkActiveClass: 'active',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: baseRoutes
})

router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g
  const isChunkLoadFailed = error.message.match(pattern)
  const targetPath = router.history.pending.fullPath
  if (isChunkLoadFailed) {
    router.replace(targetPath)
  }
})

router.afterEach((to, from) => {
  store.commit(RESET_FILTER)
})

export default router
