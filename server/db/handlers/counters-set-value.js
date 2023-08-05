const { db } = require('../fb-db.js')

async function countersSetValue(id, value) {
  await db.collection('counters').doc(id).set({
    id, value
  })
}

async function countersGetValue(id) {
  return await db.collection('counters').doc(id).get()
}

module.exports = {countersSetValue, countersGetValue}