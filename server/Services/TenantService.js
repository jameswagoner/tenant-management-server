const Tenant = require('../Models/Tenant')

module.exports = {
  all: (req, res) => {
    Tenant
      .find()
      .then(tenants => {
        res.status(200).json({
          tenants: tenants
        })
      })
      .catch(err => console.log(err))
  },
  find: (req, res) => {
    Tenant.findById(req.params.id)
      .then(tenant => {
        res.status(200).json(tenant)
      })
      .catch(err => console.log(err))
  },
  create: (req, res) => {
    Tenant
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName
      })
      .then(tenant => {
        res.status(200).json({
          tenant: tenant
        })
      })
      .catch(err => console.log(err))
  }
}
