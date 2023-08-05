function openHandler(ws) {
  ws.onopen = () => {
    ws.send('Automated message from the client')
  }
}

export {openHandler}