const mongoose = require('mongoose')

const Item = mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  total: Number
}, {
  timestamps: true
})

const Invoice = mongoose.Schema({
  num: Number,
  items: [Item]
}, {
  timestamps: true
})

module.exports.model = mongoose.model('Invoice', Invoice)
module.exports.schema = Invoice
