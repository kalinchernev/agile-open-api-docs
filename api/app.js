var restify = require('restify')

var port = process.env.PORT || 8000
var address = process.env.IP || 'localhost'

var server = restify.createServer({
  name: 'ACME API',
  version: '1.0.0'
})

server.use(restify.acceptParser(server.acceptable))
server.use(restify.queryParser())
server.use(restify.bodyParser())

/**
 * @swagger
 * /:
 *   get:
 *     description: Returns the base of the API
 *     responses:
 *       200:
 *         description: The very root of the API
 */
server.get('/', (req, res, next) => {
  res.send('ROOT')
  return next()
})

server.listen(port, () => {
  console.log(`App ${server.name} running at ${address} on ${port} port.`)
})
