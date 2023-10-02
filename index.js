const app = require('express')()
const http = require('http')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
require('dotenv').config()

const users = require('./users.json')

const port = process.env.PORT

http.createServer(app).listen(port)
console.log("Listening at:// port:%s (HTTP)", port)

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.get('/teste', async (req, res) => {
  res.json(users)
}  

require('./endpoints')(app)
