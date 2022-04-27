module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: 8080,
    proxy: {
      '^/v1': {
        target: process.env.VUE_APP_API_URL + '/v1',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
