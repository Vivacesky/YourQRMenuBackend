const express = require('express');
const menuController = require('../Controllers/menu_controller');

const router = express.Router({mergeParams: true});

router.get('/', menuController.getAll);

router.get('/:menuId', menuController.getById);

router.post('/add', menuController.addMenu)

router.post('/:menuId/add', menuController.addMenuItem)

router.delete('/remove/:menuId', menuController.deleteMenu)

router.delete('/remove/:menuId/:menuItemId', menuController.deleteMenuItem)

module.exports = router;
