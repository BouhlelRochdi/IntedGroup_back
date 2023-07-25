const demandRoute = require('./demand.routes');
const authRoute = require('./auth.routes')

module.exports = (app) => {
    app.use('/demand', demandRoute)
    app.use('/auth', authRoute)
}