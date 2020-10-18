const { Router } = require('express');
const TaskController = require('../Controllers/TaskController');
const router = Router();

router.get('/', TaskController.index);
router.get('/:task', TaskController.show);

router.post('/', TaskController.store);

module.exports = router;
