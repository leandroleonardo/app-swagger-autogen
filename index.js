require('dotenv').config()

const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const port = process.env.PORT
const app = express()

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

require('./endpoints')(app)

app.listen(port, () => console.log(`Listening on port ${port}`))
