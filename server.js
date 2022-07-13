// optional: allow environment to specify port
const port = process.env.PORT || 3000

// no cache headers
const nocache = {
	'Surrogate-Control': 'no-store',
	'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
	'Pragma': 'no-cache',
	'Expires': '0',
}

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
      res.header(nocache);
    }
  },
}))
// catch-all route
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html', {headers: nocache, lastModified: false, etag: false})
})
// start the server
app.listen(port, () => console.log(`Listening on port ${port}`))
