export default [
  {
    path: '/providers',
    name: 'providers',
    component: () => import('../pages/IkonProviderPage'),
    meta: {
      auth: true
    }
  },
  {
    path: '/providers/:provider_id/gallery',
    name: 'provider-gallery',
    component: () => import('../pages/IkonProviderGalleryPage'),
    props: true,
    meta: {
      auth: true
    }
  }
]
