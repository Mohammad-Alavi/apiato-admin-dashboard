export default [
  {
    path: '/users',
    name: 'users',
    component: () => import('../pages/IkonUserPage'),
    meta: {
      auth: true
    }
  }
]
