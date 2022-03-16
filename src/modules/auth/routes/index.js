export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/IkonLoginPage'),
    meta: {
      auth: false
    }
  },
  {
    path: '/403',
    name: 'forbidden',
    component: () => import('@/modules/auth/pages/IkonForbiddenPage')
  },
  {
    path: '/404',
    name: 'not-found',
    component: () => import('@/modules/auth/pages/IkonNotFoundPage')
  }
]
