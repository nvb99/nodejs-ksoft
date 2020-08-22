const http = require('http')
const fs = require('fs')
const url = require('url')

const renderHTML = (req, res, path='../index.html') => {
    fs.readFile(path, (err, data) => {
        if (err) throw err
    
        res.writeHead(200, {contentType: 'text/html'})
        res.write(data)
        res.end()
    })
}

const readData = (req, res) => {
    fs.readFile('questions/data/questions.txt', (err, data, keyword) => {
        if (err) throw err
        
        data = JSON.parse(data)
        const path = url.parse(req.url, true)
        if (path.query.keyword)
        data = data.filter(q => q.content.toLowerCase().indexOf(path.query.keyword) >= 0)

        res.writeHead(200, {contentType: 'text/html' })
        res.write(JSON.stringify(data))
        res.end()
    })
}

http.createServer(function (req, res) {
    const path = url.parse(req.url, true)
    switch (path.pathname) {
        case '/':
            renderHTML(req, res)
            break
        case '/questions':
            renderHTML(req, res, 'questions/index.html')
            break
        case '/api/questions':
            if (req.method === 'GET') {
                readData(req, res)
            }   else if (req.method === 'POST') {

            } 
            break
    }

}).listen('8080')
console.log('127.0.0.1:8080')