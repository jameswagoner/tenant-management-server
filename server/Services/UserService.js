const { model } = require('../Models/User');
const User = model;

module.exports = {
  all: (req, res) => {
    User.find()
      .then(users => {
        res.status(200).json({
          users: users
        })
      })
      .catch(err => {
        res.status(err.status || 500);
        res.json({
          error: err
        });
      });
  },
  find: (req, res) => {
    User.findById(req.params.user)
      .then(user => {
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json()
        }
      })
      .catch(err => {
        res.status(err.status || 500);
        res.json({
          error: err
        });
      });
  },
  create: (req, res) => {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      })
      .then(user => {
        res.status(200).json({
          user: user
        })
      })
      .catch(err => {
        res.status(err.status || 500);
        res.json({
          error: err
        });
      });
  }
}
