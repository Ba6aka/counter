
const service = {
  getCurrentValue(id) {
    return fetch('/api/current-value', { method: 'POST', body: JSON.stringify({ id }) })
      .then(response => response.text())
      .then(Number)
  },
  increment(id) {
    return fetch('/api/inc', { method: 'POST', body: JSON.stringify({ id }) })
      .then(response => response.text())
      .then(Number)
  },
  decrement(id) {
    return fetch('/api/dec', { method: 'POST', body: JSON.stringify({ id }) })
      .then(response => response.text())
      .then(Number)
  }
}

export { service }

