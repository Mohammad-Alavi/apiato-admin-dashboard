import bearer from '@/modules/auth/bearer'
import httpAxios from '@websanova/vue-auth/dist/drivers/http/axios.1.x.esm'
import routerVueRouter from '@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm'
import User from '@/modules/users/models/user'

export default {
  auth: bearer,
  http: httpAxios,
  router: routerVueRouter,
  loginData: {
    url: '/clients/web/login',
    method: 'POST',
    redirect: { name: 'dashboard' },
    fetchUser: true
  },
  logoutData: {
    url: '/logout',
    method: 'DELETE',
    redirect: { name: 'login' },
    makeRequest: true
  },
  fetchData: {
    url: '/profile',
    method: 'GET',
    enabled: true
  },
  refreshData: {
    url: '/clients/web/refresh',
    method: 'POST',
    enabled: false,
    interval: 30,
    data: { refresh_token: localStorage.getItem('refresh_token') }
  },
  stores: ['storage', 'cookie'],
  tokenDefaultKey: 'access_token',
  authRedirect: { name: 'login' },
  parseUserData: function (data) {
    return User.fromJson(data.data)
  }
  // rolesKey: 'roles.name',
}
