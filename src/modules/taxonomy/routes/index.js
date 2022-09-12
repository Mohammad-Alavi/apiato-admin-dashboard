export default [
  {
    path: '/taxonomies/categories',
    name: 'categories',
    component: () => import('../pages/IkonCategoryPage'),
    meta: {
      auth: true
    }
  },
  {
    path: '/taxonomies/specializations',
    name: 'specializations',
    component: () => import('../pages/IkonSpecializationPage'),
    meta: {
      auth: true
    }
  }
]
