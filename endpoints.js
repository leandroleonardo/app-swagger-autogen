
const users = require('./users.json')
const swagger_json = require('./swagger_output.json')

module.exports = function (app) {

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

    app.get('/swagger/', (req, res) => {

        if (swagger_json) {
            return res.status(200).json(swagger_json)
        } else {
            res.status(404)
        }

    })

}