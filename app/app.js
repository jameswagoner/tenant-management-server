const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const mongoose = require('mongoose')
const app = express()

// Import our routes
const tenantRoutes = require('../routes/tenant');

// Connect to MongoDB
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

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
