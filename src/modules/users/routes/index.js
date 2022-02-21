export default [
  {
    path: '/users',
    name: 'users',
    component: () => import('../pages/IkonUserPage'),
    meta: {
      auth: true
    }
  },
  {
    path: '/users/:user_id/orders',
    name: 'user-orders',
    component: () => import('../pages/IkonUserOrdersPage'),
    props: true,
    meta: {
      auth: true
    }
  }
]
