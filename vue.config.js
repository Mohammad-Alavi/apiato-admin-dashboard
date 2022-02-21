module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: 8080,
    proxy: {
      '/': {
        target: process.env.VUE_APP_API_URL,
        ws: true,
        changeOrigin: true
      }
    }
  }
}
