const express = require('express');
const menuController = require('../Controllers/menu_controller');

const router = express.Router({mergeParams: true});

router.get('/', menuController.getAll);
router.get('/:companyId', menuController.getByCompanyId);
router.post('/', menuController.addMenu)
router.delete('/:menuId', menuController.deleteMenu)
router.patch('/:menuId', menuController.updateMenu)

module.exports = router;
