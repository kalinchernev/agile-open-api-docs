var restify = require('restify')

var port = process.env.PORT || 8000
var address = process.env.IP || 'localhost'

var server = restify.createServer({
  name: 'etapi',
  version: '1.0.0'
})

server.use(restify.acceptParser(server.acceptable))
server.use(restify.queryParser())
server.use(restify.bodyParser())

server.get('/', (req, res, next) => {
  res.send('Hello world')
  return next()
})

server.listen(port, () => {
  console.log(`App ${server.name} running at https://${address}`)
})
