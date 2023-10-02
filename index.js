require('dotenv').config()

const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const port = process.env.PORT
const app = express()
const users = require('./users.json')

//app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.get('/', (req, res) => {
    res.json('Hello World')
})

app.get('/users/:id', async (req, res) => {

    users.forEach(user => {
        if ( user.id === req.params.id ) return res.json(user)
    });

    res.status(404)
})

app.get('/users/', (req, res) => {

    if (users) {
        return res.status(200).json(users)
    } else {
        res.status(404)
    }
})

//require('./endpoints')(app)

app.listen(port, () => console.log(`Listening on port ${port}`))
