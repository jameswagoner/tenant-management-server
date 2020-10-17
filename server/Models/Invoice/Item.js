const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = Schema({
  name: String,
  qty: Number,
  price: Number,
  total: Number
}, {
  timestamps: true
});

module.exports.model = mongoose.model('Item', Item);