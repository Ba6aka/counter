const { handleConnection } = require('./handlers/connection-handler.js')

function handleWsServer(wsServer, wsConnections) {

  handleConnection(wsServer, wsConnections)
}

module.exports = { handleWsServer }
