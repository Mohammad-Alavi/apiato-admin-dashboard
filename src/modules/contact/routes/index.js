export default [
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../pages/IkonContactPage'),
    meta: {
      auth: true
    }
  }
]
