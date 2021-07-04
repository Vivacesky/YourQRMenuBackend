const express = require('express');
const menuController = require('../Controllers/menu_controller');

const router = express.Router({mergeParams: true});
// /menu
router.get('/', menuController.getAll);
router.get('/categories', menuController.getAllCategories);
router.get('/:companyId', menuController.getByCompanyId);

router.get('/items/:menuId', menuController.getMenuItemsByMenuId);
router.get('/items/:menuId/:itemId', menuController.getMenuItemById);

router.post('/', menuController.addMenu)
router.delete('/:menuId', menuController.deleteMenu)
router.patch('/:menuId', menuController.updateMenu)

module.exports = router;
