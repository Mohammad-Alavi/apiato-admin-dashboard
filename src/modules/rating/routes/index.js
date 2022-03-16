export default [
  {
    path: '/ratings',
    name: 'ratings',
    component: () => import('../pages/IkonRatingPage'),
    meta: {
      auth: true
    }
  }
]
