export default {

  request: function (req, token) {
    this.http.setHeaders.call(this, req, {
      Authorization: 'Bearer ' + token
    })
  },

  response: function (res) {
    const refreshToken = res.data.refresh_token
    if (refreshToken) {
      localStorage.setItem('refresh_token', res.data.refresh_token)
    }

    let token = res.data.access_token
    if (token) {
      token = token.split(/Bearer:?\s?/i)
      return token[token.length > 1 ? 1 : 0].trim()
    }
  }
}
