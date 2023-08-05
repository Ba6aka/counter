const { initializeApp, cert } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')
const serviceAccount = require('./counter-283c2-firebase-adminsdk-lniug-7312e577a6.json')

initializeApp({
  credential: cert(serviceAccount)
})

const db = getFirestore()

module.exports = { db }