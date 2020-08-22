var http = require('http')
var fs = require('fs')

http.createServer(function(req, res) {
    fs.readFile('index.html', function(err, data) {
        if (err) {
            throw err
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        }
    })
}).listen(8080)

console.info('http://127.0.0.1:8080')