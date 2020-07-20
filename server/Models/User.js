const mongoose = require('mongoose');
const bcrypt  = require('bcrypt');

const User = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
}, {
  timestamps: true
});

User.pre('save', next => {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt((err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }

      user.password = hash;

      next();
    });
  });
});

module.exports.model = mongoose.model('User', User);
module.exports.schema = User;
