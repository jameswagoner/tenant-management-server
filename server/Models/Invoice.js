const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Invoice = Schema({
  num: Number,
  total: Number,
  status: String,
  user: {
    type: Schema.Types.ObjectID,
    ref: 'User'
  },
  items: [{
    type: Schema.Types.ObjectID,
    ref: 'Item'
  }]
}, {
  timestamps: true
});

module.exports.model = mongoose.model('Invoice', Invoice);
