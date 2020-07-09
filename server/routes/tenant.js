const { Router } = require('express')
const TenantController = require('../Controllers/TenantController')
const router = Router()

router.get('/', TenantController.index)
router.get('/:id', TenantController.show)
router.post('/', TenantController.store)

module.exports = router
