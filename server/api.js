const { getCurrentValue } = require('./db/handlers/get-current-value.js')
const { countersUpdate } = require('./db/handlers/counters-update.js')
const { getBody } = require('./helpers/get-body.js')

const counterApi = {
  async handle(req, res, wsConnections) {
    const path = req.url.slice(5)

    if (req.method == 'POST') req.body = await getBody(req)

    if (path == 'current-value') {
      getCurrentValue(req, res)
    }

    else if (path == 'inc') {
      countersUpdate(req, res, 1, wsConnections)
    }

    else if (path == 'dec') {
      countersUpdate(req, res, -1)
    }
  }
}

module.exports = { counterApi }