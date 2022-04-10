export default [
  {
    path: '/faq-groups',
    name: 'faq-groups',
    component: () => import('../pages/IkonFaqPage'),
    meta: {
      auth: true
    }
  }
]
