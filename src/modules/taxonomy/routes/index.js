export default [
  {
    path: '/taxonomies/sports',
    name: 'sports',
    component: () => import('../pages/IkonSportPage'),
    meta: {
      auth: true
    }
  }
]
