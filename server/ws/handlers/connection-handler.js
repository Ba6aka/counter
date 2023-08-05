module.exports = { handleConnection }

function handleConnection(wsServer,wsConnections) {
  wsServer.on('connection', ws => {
    ws.on('message', data => {
      data = data.toString()
      console.log(`Received message from client: ${data}`)

      ws.send(`You sent "${data}"`)
    })

    wsConnections.add(global.ws = ws)

    ws.send('Automated message from the server')

    ws.on('close', () => {
      wsConnections.delete(ws)
      console.log('Lost a client')
    })
  })
}