import Vue from 'vue'
import VueRouter from 'vue-router'

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

export default router
