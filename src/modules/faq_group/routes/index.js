export default [
  {
    path: '/faq-groups',
    name: 'faq-groups',
    component: () => import('../pages/IkonFaqGroupPage'),
    meta: {
      auth: true
    }
  }
]
