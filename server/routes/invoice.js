const { Router } = require('express');
const InvoiceController = require('../Controllers/InvoiceController');
const router = Router();

router.get('/', InvoiceController.index);
router.get('/:invoice', InvoiceController.show);
router.post('/', InvoiceController.store);

module.exports = router;
