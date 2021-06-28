const express = require('express');
const menu = require('./menu_route');
const company = require('./company_route');
const menuItem = require('./menu_items_route');

const router = express.Router();

router.use('/menu', menu);
router.use('/company', company)
router.use('/menu-item', menuItem)

module.exports = router;
