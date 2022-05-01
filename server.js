// optional: allow environment to specify port
const port = process.env.PORT || 3000

// wire up the module
const express = require('express')
// create server instance
const app = express()
// bind the request to an absolute path or relative to the CWD
app.use(express.static('dist', { 
  index: false,
  etag: false,
  lastModified: false,
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.setHeader('Surrogate-Control', 'no-store');
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
  },
}))
// catch-all route
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})
// start the server
app.listen(port, () => console.log(`Listening on port ${port}`))
