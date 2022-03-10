export default [
  {
    path: '/providers',
    name: 'providers',
    component: () => import('../pages/IkonProviderPage'),
    meta: {
      auth: true
    }
  }
]
