
const users = require('./users.json')

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

}