const router = require('express').Router();
const { projectController } = require('../controllers');

// Index
router.get('/', projectController.index);

module.exports = router;