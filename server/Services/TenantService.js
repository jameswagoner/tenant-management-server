const { model } = require('../Models/User');
const User = model;

module.exports = {
  all: (req, res) => {
    User.find({role: 'tenant'})
      .then(tenants => {
        res.status(200).json({
          tenants: tenants
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
    User.findById(req.params.tenant)
      .then(tenant => {
        if (tenant) {
          res.status(200).json(tenant)
        } else {
          res.status(404).json();
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
        role: 'tenant'
      })
      .then(tenant => {
        res.status(200).json(tenant)
      })
      .catch(err => {
        res.status(err.status || 500);
        res.json({
          error: err
        });
      });
  },
  invoices: (req, res) => {
    // TODO: find invoices belonging to a tenant
    res.status(200).json([]);
  }
}
