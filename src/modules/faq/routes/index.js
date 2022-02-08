export default [
  {
    path: '/faqs',
    name: 'faqs',
    component: () => import('../pages/IkonFaqPage'),
    meta: {
      auth: true
    }
  }
]
