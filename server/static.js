module.exports = { handleStaticFile }
const fs = require('fs')

function handleStaticFile(req, res) {
  let path = req.url.slice(1) || 'index.html'

  try {
    const fileContent = fs.readFileSync('public/' + path, 'utf8')
    if (path.endsWith('.js')) res.setHeader('Content-Type', 'text/javascript')
    if (path.endsWith('.css')) res.setHeader('Content-Type', 'text/css')
    if (path.endsWith('.html')) res.setHeader('Content-Type', 'text/html')

    res.end(fileContent)

  } catch (err) {
    console.log(err)
    res.writeHead(404)
    res.end('Not Found')
  }
}