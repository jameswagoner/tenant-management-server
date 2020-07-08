const mongoose = require('mongoose')

const schema = mongoose.Schema({
  firstName: String,
  lastName: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Tenant', schema)
