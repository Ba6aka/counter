import { messageHandler } from "./handlers/message-handler.js"
import { openHandler } from "./handlers/open-handler.js"

function startWs(ws) {

  messageHandler(ws)

  openHandler(ws)
}

export { startWs }