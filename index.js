require('dotenv').config()

const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const port = process.env.PORT
const app = express()
const cors = require('cors')
const users = require('./users.json')

app.use(cors())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.get('/', (req, res) => {
    res.json('Hello World')
})

require('./endpoints')(app)

app.listen(port, () => console.log(`Listening on port ${port}`))
