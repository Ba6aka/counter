function messageHandler(ws) {
  ws.onmessage = ({ data }) => {
    console.log(`Received message from server: ${data}`)
    try {
      data = JSON.parse(data)
      if (data.type == 'new-value') {
        document.querySelector(`[data-id=${data.id}] .count`).innerText = data.value
      }
    }
    catch (err) {
      console.log('hello world')
    }
  }
}

export { messageHandler }