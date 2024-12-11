const express = require('express');
const itemController = require('../controllers/itemController');
const router = express.Router();

router.get('/', itemController.items);
router.get('/new-item', itemController.addItemForm);
router.post('/', itemController.addItem);
router.get('/:id', itemController.viewItem);
router.get('/:id/edit', itemController.editItemForm);
router.put('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;
