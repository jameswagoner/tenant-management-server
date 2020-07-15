const mongoose = require('mongoose');

const User = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
}, {
  timestamps: true
});

module.exports.model = mongoose.model('User', User);
module.exports.schema = User;
