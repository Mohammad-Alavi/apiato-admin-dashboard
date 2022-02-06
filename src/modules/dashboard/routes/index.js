export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../pages/IkonDashboardPage'),
    meta: {
      auth: true
    }
  }
]
