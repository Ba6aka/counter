const { countersGetValue, countersSetValue } = require('./counters-set-value.js')

async function getCurrentValue(req, res) {
  const { id } = req.body
  const value = await countersGetValue(id)

  if (!value.data()?.value) countersSetValue(id, 0)

  res.end(JSON.stringify(value.data()?.value) || '0')
}

module.exports = {getCurrentValue}