const express = require('express')
const app = express()
const logger = require('morgan')

// Import our routes
const tenantRoutes = require('./routes/tenant');

// Use a logger
app.use(logger('dev'))

// Use our routes
app.use('/tenants', tenantRoutes)

// Use catch-all route
app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

// Use error route
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    error: {
      message: err.message
    }
  })


})

module.exports = app
