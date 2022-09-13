export default [
  {
    path: '/applications',
    name: 'applications',
    component: () => import('../pages/IkonApplicationPage'),
    meta: {
      auth: true
    }
  }
]
