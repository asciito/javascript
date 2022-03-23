const router = require('express').Router();
const { todoController } = require('../controllers');

router.get('/', todoController.index);

// API Calls
router.post('/', todoController.create);
router.put('/:id(\\d+)', todoController.update);
router.delete('/:id(\\d+)', todoController.delete);

module.exports = router;