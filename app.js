const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const app = express()

// Import our routes
const tenantRoutes = require('./routes/tenant');

// Use a logger
app.use(logger('dev'))

// Use body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Use CORS
app.use(cors({
  allowedHeaders: ['Origin', 'X-Requested-With', 'Accepts', 'Content-Type', 'Authorization']
}))

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
