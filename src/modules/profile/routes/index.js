export default [
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../pages/IkonUserPage'),
    props: true,
    meta: {
      auth: true
    }
  }
]
