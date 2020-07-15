const { model } = require('../Models/User');
const brypt = require('bcrypt');
const User = model;

module.exports = {
  all: (req, res) => {
    User.find()
      .then(users => {
        res.status(200).json({
          users: users
        })
      })
      .catch(err => console.log(err));
  },
  find: (req, res) => {
    User.findById(req.params.user)
      .then(user => {
        res.status(200).json(user)
      })
      .catch(err => console.log(err));
  },
  create: (req, res) => {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hash(req.body.password)
      })
      .then(user => {
        res.status(200).json({
          user: user
        })
      })
      .catch(err => console.log(err));
  }
}
