export default [
  {
    path: '/taxonomies/sports',
    name: 'sports',
    component: () => import('../pages/IkonSportPage'),
    meta: {
      auth: true
    }
  },
  {
    path: '/taxonomies/jobs',
    name: 'jobs',
    component: () => import('../pages/IkonJobPage'),
    meta: {
      auth: true
    }
  }
]
