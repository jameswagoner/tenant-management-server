const express = require('express')
const router = express.Router()

const Tenant = require('../app/Models/Tenant')

router.get('/', (req, res, next) => {
  Tenant
    .find()
    .then(tenants => {
      res.status(200).json({
        tenants: tenants
      })
    })
    .catch(err => console.log(err))
})

router.post('/', (req, res, next) => {
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
})

module.exports = router
