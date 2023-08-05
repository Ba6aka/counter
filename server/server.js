const { counterApi } = require('./api.js')
const { handleStaticFile } = require('./static.js')
const { handleWsServer } = require('./ws/ws.js')

const { Server: WSServer } = require('ws')
const http = require('http')

global.wsConnections = new Set()

function startServer(port) {
  const server = http.createServer(async (req, res) => {
    if (req.url.startsWith('/api/')) counterApi.handle(req, res, wsConnections)
    else handleStaticFile(req, res)
  })

  const wsServer = new WSServer({ server })
  handleWsServer(wsServer, wsConnections)

  server.listen(port, () => console.log(`Listening on http://localhost:${port}`))
}

module.exports = {startServer, wsConnections}