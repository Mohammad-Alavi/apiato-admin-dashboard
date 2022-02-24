export default [
  {
    path: '/requests',
    name: 'requests',
    component: () => import('../pages/IkonRequestPage'),
    meta: {
      auth: true
    }
  }
]
