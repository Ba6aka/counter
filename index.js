const { startServer } = require('./server/server.js')

const port = process.env.PORT || 2707

startServer(port)