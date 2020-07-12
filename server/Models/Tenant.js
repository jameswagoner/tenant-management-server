const mongoose = require('mongoose')
const Invoice = require('./Invoice')

const Tenant = mongoose.Schema({
  firstName: String,
  lastName: String,
  invoices: [Invoice.schema]
}, {
  timestamps: true
})

module.exports.model = mongoose.model('Tenant', Tenant)
module.exports.schema = Tenant
