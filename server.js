var history = require('connect-history-api-fallback')

// optional: allow environment to specify port
const port = process.env.PORT || 3000

// wire up the module
const express = require('express')
// create server instance
const app = express()
// bind the request to an absolute path or relative to the CWD
app.use(express.static('dist'))
app.use(history())
// start the server
app.listen(port, () => console.log(`Listening on port ${port}`))
