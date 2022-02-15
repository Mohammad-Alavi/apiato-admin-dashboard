export default [
  {
    path: '/sliders',
    name: 'sliders',
    component: () => import('../pages/IkonSliderPage'),
    meta: {
      auth: true
    }
  },
  {
    path: '/sliders/:slider_id/providers',
    name: 'slider-providers',
    component: () => import('../pages/IkonSliderProvidersPage'),
    props: true,
    meta: {
      auth: true
    }
  }
]
