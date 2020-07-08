const express = require('express')
const app = express()
const logger = require('morgan')

const tenantRoutes = require('./routes/tenant');

app.use(logger('dev'))

app.use('/tenants', tenantRoutes)

module.exports = app
