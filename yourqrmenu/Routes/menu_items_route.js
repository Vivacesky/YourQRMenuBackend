const express = require('express');
const menuItemController = require('../Controllers/menu_item_controller');

const router = express.Router({mergeParams: true});

router.get('/', menuItemController.getAll);
router.get('/:menuId', menuItemController.getByMenuId);
router.post('/', menuItemController.addMenuItem)
router.delete('/:menuItemId', menuItemController.deleteMenuItem)
router.patch('/:menuItemId', menuItemController.updateMenuItem)

module.exports = router;
