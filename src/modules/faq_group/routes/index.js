export default [
  {
    path: '/faq-groups',
    name: 'faq-groups',
    component: () => import('../pages/IkonFaqGroupPage'),
    meta: {
      auth: true
    }
  },
  {
    path: '/faq-groups/:faq_group_id/faqs',
    name: 'faq-group-faqs',
    component: () => import('../pages/IkonFaqGroupFaqsPage'),
    props: true,
    meta: {
      auth: true
    }
  }
]
