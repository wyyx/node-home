const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 8080

http
  .createServer((req, res) => {
    const homePage = fs.readFileSync('home.html', 'utf-8')
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.end(homePage)
  })
  .listen(port, () => {
    console.log('server listening port', port)
  })
