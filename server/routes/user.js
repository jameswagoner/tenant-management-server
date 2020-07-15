const { Router } = require('express');
const UserController = require('../Controllers/UserController');
const router = Router();

router.get('/', UserController.index);
router.get('/:user', UserController.show);

router.post('/', UserController.store);

module.exports = router;
