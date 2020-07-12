const tenant = require('./routes/tenant')
const invoice = require('./routes/invoice')

const init = (server) => {
  // Use defined routes
  server.get('/', (req, res) => {
    res.status(200)
      .send('Silence is golden.')
  })

  server.use('/tenants', tenant)
  server.use('/invoices', invoice)

  // Use 404 route
  server.use((req, res, next) => {
    const error = new Error('Not found at all')
    error.status = 404
    next(error)
  })

  // Use error route
  server.use((err, req, res) => {
    res.status(err.status || 500)
    res.json({
      error: {
        message: err.message
      }
    })
  })
}

module.exports = {
  init: init
}
