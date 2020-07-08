const express = require('express')
const app = express()

const tenantRoutes = require('./routes/tenant');

app.use('/tenants', tenantRoutes)

module.exports = app
