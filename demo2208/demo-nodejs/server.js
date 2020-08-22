const url = require('url')
const { info } = require('console')
var p = "'http://127.0.0.1:8080'/t.html?year=2020"
var u = url.parse(p, true)

console.info(u.host)
console.info(u.pathName)

