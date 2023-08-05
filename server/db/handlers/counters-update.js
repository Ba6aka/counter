const { countersGetValue, countersSetValue } = require('./counters-set-value.js')

async function countersUpdate(req, res, shift = 0, wsConnections) {
  const { id } = req.body
  const doc = await countersGetValue(id)

  let { value } = doc.data()

  if (!value) value = 0

  countersSetValue(id, value + shift)
  wsConnections.forEach(ws => ws.send(JSON.stringify({ type: "new-value", id, value: value + shift })))
}

module.exports = { countersUpdate }