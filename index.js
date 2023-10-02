const app = require('express')()
const http = require('http')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
require('dotenv').config()
const port = process.env.PORT

http.createServer(app).listen(port)
console.log("Listening at:// port:%s (HTTP)", port)

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile))

require('./endpoints')(app)