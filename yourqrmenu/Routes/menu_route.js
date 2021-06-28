const express = require('express');
const menuController = require('../Controllers/menu_controller');

const router = express.Router({mergeParams: true});

router.get('/', menuController.getAll);

router.get('/:_id', menuController.getById);

router.post('/add', menuController.addMenu)

module.exports = router;
