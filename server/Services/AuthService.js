const { model } = require('../Models/User');
const jwt = require('jsonwebtoken');
const bcrypt  = require('bcrypt');

const User = model;

const verify = (user, password) => {
  return bcrypt.compareSync(password, user.password, (err, success) => {
    if (err) {
      return {
        success: false,
        message: err
      }
    }

    return {
      success: true,
      message: 'All good'
    }
  });
}

module.exports = {
  login: (req, res) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        bcrypt.compare(req.body.password, user.password, (err, success) => {
          if (success) {
            res.status(200).json({
              success: true,
              token: jwt.sign({
                  email: user.email,
                  userId: user._id
                },
                process.env.APP_JWT_SECRET,
                {
                  expiresIn: "1h"
                })
            })
          }

          if (err) {
            res.status(401).json({
              success: false,
              message: 'Login failed'
            });
          }
        })
      })
      .catch(err => {
        res.status(err.status || 500);
        res.json({
          error: {
            message: err.message
          }
        });
      });
  },
  logout: () => {},
  refresh: () => {}
}
