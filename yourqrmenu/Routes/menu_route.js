const express = require('express');
const menuController = require('../Controllers/menu_controller');

const router = express.Router({mergeParams: true});

router.get('/', menuController.getAll);

router.get('/:_id', menuController.getById);

router.post('/add', menuController.addMenu)

router.post('/add/:_id', menuController.addMenuItem)

router.delete('/remove/:_id', menuController.deleteMenu)

router.delete('/remove/:_id/item/:_name', menuController.deleteMenuItem)

module.exports = router;
