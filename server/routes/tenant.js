const { Router } = require('express');
const TenantController = require('../Controllers/TenantController');
const router = Router();

router.get('/', TenantController.index);
router.get('/:tenant', TenantController.show);
router.get('/:tenant/invoices', TenantController.invoices);

router.post('/', TenantController.store);

module.exports = router;
